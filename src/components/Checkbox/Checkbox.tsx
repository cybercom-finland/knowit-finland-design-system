import React from 'react';
import styled, { ThemeProps, css } from 'styled-components';
import { variant } from 'styled-system';
import {
  spacing,
  pxToRem,
  typography,
  Size,
  generateRandomString,
} from '../../shared';
import { MdCheckBox } from 'react-icons/md';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { MdIndeterminateCheckBox } from 'react-icons/md';
import { Label } from '../Label';
import { HelperText } from '../HelperText';

/**
 * Various dimensions of checkbox component
 */
const checkboxDimensions = {
  contentSpacing: spacing(1),
  helperTextFontSize: pxToRem(14),
  small: {
    fontSize: pxToRem(16),
  },
  large: {
    fontSize: pxToRem(24),
  },
};

/**
 * Internal properties for styles
 */
interface InnerProps {
  /**
   * Disable checkbox
   */
  disabled?: boolean;

  /**
   * Checkbox is indeterminate state
   */
  indeterminate?: boolean;

  /**
   * Size of checkbox
   */
  size?: Exclude<Size, 'medium'>;

  /**
   * Checkbox helper text
   */
  helperText?: string;

  /**
   * Change event handler passed from internal component
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Checkbox component properties
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#additional_attributes
 */
export interface CheckboxProps
  extends InnerProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      | 'size'
      | 'type'
      | 'accept'
      | 'autoComplete'
      | 'list'
      | 'max'
      | 'min'
      | 'maxLength'
      | 'minLength'
      | 'multiple'
      | 'pattern'
      | 'placeholder'
      | 'dirName'
      | 'alt'
      | 'capture'
      | 'step'
      | 'formAction'
      | 'formEncType'
      | 'formMethod'
      | 'formNoValidate'
      | 'formTarget'
      | 'height'
      | 'src'
      | 'width'
    > {
  /**
   * Component id
   */
  id?: string;

  /**
   * Checkbox label text
   */
  label?: string;

  /**
   * Checkbox is checked
   */
  checked?: boolean;

  /**
   * Server side checkbox value
   */
  value?: string | number;
}

/**
 * Helper function to calculate correct sizes for font size
 * @param props mandatory checkbox props
 * @returns modified css
 */
const calculateSizes = (props: InnerProps) => {
  return css`
    ${variant({
      prop: 'size',
      variants: {
        small: {
          fontSize: checkboxDimensions.small.fontSize,
        },
        large: {
          fontSize: checkboxDimensions.large.fontSize,
        },
      },
    })};
  `;
};
/**
 * Helper function for checkbox disabled styles
 * @param props mandatory checkbox props and theme props
 * @returns modified css
 */
const isDisabled = (props: ThemeProps<any> & InnerProps) => {
  console.log(props);
  return css`
    ${variant({
      prop: 'disabled',
      variants: {
        true: {
          color: props.theme.colors.digitalBlack300,
          cursor: 'default',
        },
        false: {
          color: props.theme.colors.digitalBlack,
          cursor: 'pointer',
        },
      },
    })};
  `;
};

/**
 * calculate checkbox spacer width based on helper text
 * @param props mandatory checkbox props
 * @returns modified css
 */
const calculateWidth = (props: InnerProps) => {
  return css`
    width: ${props?.size == 'large'
      ? checkboxDimensions.large.fontSize
      : checkboxDimensions.small.fontSize};
  `;
};

const CheckboxWrapper = styled.span<InnerProps>`
  ${calculateSizes}
  ${isDisabled}
  display: inline-flex;
  font-family: ${typography.font};
  font-weight: ${typography.weight.regular};
  box-sizing: border-box;
  align-items: center;
  gap: ${checkboxDimensions.contentSpacing};
  border: none;
`;

const CheckboxHelperText = styled(HelperText)`
  font-size: ${checkboxDimensions.helperTextFontSize};
  margin: 0;
`;

const CheckboxLabel = styled(Label)`
  margin: 0;
`;

const CheckboxHelperTextWrapper = styled.span`
  display: flex;
  width: fit-content;
  gap: ${checkboxDimensions.contentSpacing};
  margin: 0;
`;

/**
 * Internal component styling
 */
const NativeCheckbox = styled.input<InnerProps>`
  display: none !important;
`;

const HelperTextSpacer = styled.span<InnerProps>`
  ${calculateWidth};
`;

/**
 * Exported component
 */
export const Checkbox = ({
  id,
  label,
  checked = false,
  disabled = false,
  indeterminate = false,
  size = 'small',
  helperText,
  ...restProps
}: CheckboxProps) => {
  const [boxChecked, setChecked] = React.useState(false);

  // Sync checkbox to undelying input component
  React.useEffect(() => {
    setChecked(!!checked);
  }, [checked]);

  // Handle onclick, sync with underlying input component
  const checkboxClicked = () => {
    if (disabled) return;
    checked = !boxChecked;
    setChecked(!boxChecked);
  };

  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return (
    <>
      <CheckboxWrapper
        id={componentId}
        onClick={checkboxClicked}
        size={size}
        disabled={disabled}
      >
        {boxChecked && !indeterminate && <MdCheckBox />}
        {!boxChecked && !indeterminate && <MdOutlineCheckBoxOutlineBlank />}
        {indeterminate && <MdIndeterminateCheckBox />}
        <NativeCheckbox
          id={`checkbox-${componentId}`}
          aria-labelledby={label && `label-${componentId}`}
          aria-describedby={helperText && `helper-${componentId}`}
          type={'checkbox'}
          checked={boxChecked}
          {...restProps}
        />
        <CheckboxLabel disabled={disabled}>{label}</CheckboxLabel>
      </CheckboxWrapper>
      <CheckboxHelperTextWrapper>
        <HelperTextSpacer size={size}></HelperTextSpacer>
        <CheckboxHelperText>{helperText}</CheckboxHelperText>
      </CheckboxHelperTextWrapper>
    </>
  );
};

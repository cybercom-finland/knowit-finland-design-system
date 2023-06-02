import React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import {
  spacing,
  pxToRem,
  typography,
  Size,
  generateRandomString,
  InputComponentBaseProps,
} from '../../shared';
import { MdCheckBox } from 'react-icons/md';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { MdIndeterminateCheckBox } from 'react-icons/md';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { InputBaseProps } from '../Input';

/**
 * Various dimensions of checkbox component
 */
const checkboxDimensions = {
  contentSpacing: spacing(1),
  helperTextFontSize: pxToRem(14),
  small: {
    fontSize: pxToRem(16),
    marginLeft: pxToRem(24),
  },
  large: {
    fontSize: pxToRem(24),
    marginLeft: pxToRem(32),
  },
};

type CheckboxInputBaseProps = Omit<
  InputBaseProps,
  'error' | 'variant' | 'endIcon' | 'placeholder'
>;

/**
 * Used HTML Attributes
 */
type CheckboxInputHTMLAttributes = Omit<
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
>;

/**
 * Checkbox component properties
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#additional_attributes
 */
export interface CheckboxProps
  extends InputComponentBaseProps<HTMLInputElement>,
    CheckboxInputBaseProps,
    CheckboxInputHTMLAttributes {
  /**
   * Checkbox value
   */
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];

  /**
   * Checkbox is checked
   */
  checked?: boolean;

  /**
   * Checkbox is indeterminate state
   */
  indeterminate?: boolean;

  /**
   * Size of checkbox
   */
  size?: Exclude<Size, 'medium'>;
}

/**
 * Helper function to calculate correct sizes for font size
 * @param props mandatory checkbox props
 * @returns modified css
 */
const calculateSizes = () => {
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
 * calculate left margin for helper text
 * @param props mandatory checkbox props
 * @returns modified css
 */
const calculateMargin = (props: CheckboxProps) => {
  return css`
    margin-left: ${props.size == 'large'
      ? checkboxDimensions.large.marginLeft
      : checkboxDimensions.small.marginLeft} !important;
  `;
};

const CheckboxWrapper = styled.span<CheckboxProps>`
  ${calculateSizes}
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  display: inline-flex;
  font-family: ${typography.font};
  font-weight: ${typography.weight.regular};
  box-sizing: border-box;
  align-items: center;
  gap: ${checkboxDimensions.contentSpacing};
  border: none;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${(props) => props.theme.colors.grayScale.digitalBlack300};
      cursor: default;
    `}
`;

const CheckboxHelperText = styled(HelperText)`
  ${calculateMargin}
  font-size: ${checkboxDimensions.helperTextFontSize};
  margin: 0;
`;

const CheckboxComponentWrapper = styled.span`
  display: inline-flex;
  flex-direction: column;
`;

const CheckboxLabel = styled(Label)`
  margin: 0;
`;

/**
 * Internal component styling
 */
const NativeCheckbox = styled.input`
  display: none !important;
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
  required = false,
  size = 'large',
  helperText,
  onChange,
  ...restProps
}: CheckboxProps) => {
  const [boxChecked, setChecked] = React.useState(false);

  // Sync checkbox to undelying input component
  React.useEffect(() => {
    setChecked(!!checked);
  }, [checked]);

  // Handle onclick, sync with underlying input component
  const checkboxClickHandler = (ev: React.MouseEvent) => {
    if (disabled) return;
    checked = !boxChecked;
    setChecked(!boxChecked);

    onChange && onChange(ev as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return (
    <CheckboxComponentWrapper>
      <CheckboxWrapper
        id={componentId}
        onClick={(ev) => checkboxClickHandler(ev)}
        size={size}
        data-testid='checkbox'
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
        <CheckboxLabel disabled={disabled} required={required}>
          {label}
        </CheckboxLabel>
      </CheckboxWrapper>
      <CheckboxHelperText size={size} disabled={disabled}>
        {helperText}
      </CheckboxHelperText>
    </CheckboxComponentWrapper>
  );
};

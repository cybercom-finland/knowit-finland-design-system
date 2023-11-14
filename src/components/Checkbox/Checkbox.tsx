import React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import {
  pxToRem,
  typography,
  Size,
  generateRandomString,
  InputComponentBaseProps,
} from '../../shared';
import { MdCheckBox } from 'react-icons/md';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { MdIndeterminateCheckBox } from 'react-icons/md';
import { FormLabel } from '../Label';
import { HelperText, HelperTextProps } from '../HelperText';
import { InputBaseProps } from '../Input';

/**
 * Various dimensions of checkbox component
 */
const checkboxDimensions = {
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

type CheckboxSize = Exclude<Size, 'medium'>;

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
  size?: CheckboxSize;
}

/**
 * Checkobox helper text props
 */
interface CheckboxHelperTextProps extends HelperTextProps {
  size?: CheckboxSize;
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

const CheckboxWrapper = styled.span<CheckboxProps>`
  ${calculateSizes}
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  display: inline-flex;
  font-family: ${typography.font};
  font-weight: ${typography.weight.regular};
  box-sizing: border-box;
  align-items: center;
  border: none;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${(props) => props.theme.colors.grayScale.digitalBlack300};
      cursor: default;
    `}
`;

/**
 * Checkbox helper text props
 */
const CheckboxHelperText = styled(HelperText)<CheckboxHelperTextProps>`
  margin-left: ${(props) =>
    props.size == 'large'
      ? checkboxDimensions.large.marginLeft
      : checkboxDimensions.small.marginLeft};
`;

const CheckboxComponentWrapper = styled.span`
  display: inline-flex;
  flex-direction: column;
`;

/**
 * Internal component styling
 */
const NativeCheckbox = styled.input`
  display: none;
`;

/**
 * Checkbox component
 */
export const Checkbox = React.forwardRef(
  (
    {
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
    }: CheckboxProps,
    ref: CheckboxProps['ref']
  ) => {
    const [boxChecked, setChecked] = React.useState(false);

    // Sync checkbox to undelying input component
    React.useEffect(() => {
      setChecked(!!checked);
    }, [checked]);

    // Handle onclick, sync with underlying input component
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      setChecked(!!event.target.checked);
      onChange && onChange(event);
    };

    // Use Id form props or create randomized string
    const componentId = id ?? generateRandomString(5);

    return (
      <CheckboxComponentWrapper>
        <FormLabel disabled={disabled} required={required}>
          <CheckboxWrapper
            id={componentId}
            size={size}
            data-testid='checkbox'
            disabled={disabled}
          >
            {boxChecked && !indeterminate && <MdCheckBox />}
            {!boxChecked && !indeterminate && <MdOutlineCheckBoxOutlineBlank />}
            {indeterminate && <MdIndeterminateCheckBox />}
          </CheckboxWrapper>
          <NativeCheckbox
            id={`checkbox-${componentId}`}
            aria-labelledby={label && `label-${componentId}`}
            aria-describedby={helperText && `helper-${componentId}`}
            type={'checkbox'}
            checked={boxChecked}
            onChange={onChangeHandler}
            ref={ref}
            {...restProps}
          />
          {label}
        </FormLabel>
        <CheckboxHelperText size={size} disabled={disabled}>
          {helperText}
        </CheckboxHelperText>
      </CheckboxComponentWrapper>
    );
  }
);

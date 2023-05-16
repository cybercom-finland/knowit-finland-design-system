import React, { ChangeEventHandler } from 'react';
import styled, { ThemeProps, css } from 'styled-components';
import { variant } from 'styled-system';
import { spacing, pxToRem, typography } from 'shared';
import { MdCheckBox } from 'react-icons/md';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { MdIndeterminateCheckBox } from 'react-icons/md';
import { Label } from 'components/Label';

/**
 * Various dimensions of checkbox component
 */
const checkboxDimensions = {
  contentSpacing: spacing(1),
  small: {
    fontSize: pxToRem(16),
  },
  large: {
    fontSize: pxToRem(24),
  },
};

type Size = 'small' | 'large';

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
  size?: Size;

  /**
   * Change event handler passed from internal component
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Checkbox component properties
 * Extrends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#additional_attributes
 */
export interface CheckboxProps
  extends InnerProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Checkbox label text
   */
  label?: string;

  /**
   * Checkbox is checked
   */
  checked?: boolean;
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
 * Helper function to calculate correct sizes for font size
 * @param props mandatory checkbox props
 * @returns modified css
 */
//TODO: find out real type
const isDisabled = (props: ThemeProps<any> & InnerProps) => {
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

const Wrapper = styled.span<InnerProps>`
  ${calculateSizes}
  ${isDisabled}
  display: flex;
  font-family: ${typography.font};
  font-weight: ${typography.weight.regular};
  cursor: pointer;
  box-sizing: border-box;
  align-items: center;
  gap: ${checkboxDimensions.contentSpacing};
  border: none;
  background-color: ${(props) => props.theme.colors.neutral};
`;

/**
 * Internal component styling
 */
const CheckboxComponent = styled.input<InnerProps>`
  display: none !important;
`;

CheckboxComponent.defaultProps = {
  type: 'checkbox',
};

/**
 * Exported component
 */
export const Checkbox = ({
  label,
  checked = false,
  disabled = false,
  indeterminate = false,
  size = 'small',
  ...restProps
}: CheckboxProps) => {
  const [boxChecked, setChecked] = React.useState(true);

  React.useEffect(() => {
    setChecked(!!checked);
  }, [checked]);

  const checkboxClicked = () => {
    if (disabled) return;
    checked = !boxChecked;
    setChecked(!boxChecked);
  };

  return (
    <Wrapper onClick={checkboxClicked} size={size} disabled={disabled}>
      {boxChecked && !indeterminate && <MdCheckBox />}
      {!boxChecked && !indeterminate && <MdOutlineCheckBoxOutlineBlank />}
      {indeterminate && <MdIndeterminateCheckBox />}
      <CheckboxComponent checked={boxChecked} readOnly {...restProps} />
      <Label disabled={disabled}>{label}</Label>
    </Wrapper>
  );
};

import React, {useState} from 'react';
import {
  generateRandomString,
  InputComponentBaseProps, pxToRem, Size,
} from '../../shared';
import { InputBaseProps } from '../Input';
import styled, {css} from "styled-components";
import {FormLabel} from "../Label";
import {variant} from "styled-system";

type RadioInputBaseProps = Omit<InputBaseProps, 'error' | 'endIcon' | 'variant'>;

/**
 * Used HTML Attributes
 */
type RadioInputHTMLAttributes = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'accept'
  | 'alt'
  | 'min'
  | 'max'
  | 'multiple'
  | 'type'
  | 'capture'
  | 'checked'
  | 'formAction'
  | 'formEncType'
  | 'formMethod'
  | 'formNoValidate'
  | 'formTarget'
  | 'height'
  | 'src'
  | 'width'
  | 'size'
>;

/**
 * Search component properties
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#additional_attributes
 */
export interface RadioProps
  extends InputComponentBaseProps<HTMLInputElement>,
    RadioInputBaseProps,
      RadioInputHTMLAttributes {
  /**
   * Radio value
   */
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
  /**
   * Radio callback function
   */
  onSelect?: (event: React.ChangeEvent<HTMLInputElement | null>) => void;
  /**
   * Radio is required
   */
  required?: boolean;
  /**
  * Is radio default checked
  */
  defaultChecked?: boolean;
  /**
   * Size of radio
   */
  size?: Exclude<Size, 'medium'>;
    /**
     * selected value
     */
    selectedValue?: string;
}

const calculateSizes = () => {
  return css`
    ${variant({
    prop: 'size',
    variants: {
      small: {
        width: pxToRem(13),
        height: pxToRem(13),
      },
      large: {
        width: pxToRem(20),
        height: pxToRem(20),
      },
    },
  })};
  `;
};

const RadioComponentWrapper = styled.span<RadioProps>`
  font-size: ${pxToRem(18)};
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  border: none;
`;

const RadioButton = styled.div<RadioProps>`
  ${calculateSizes};
  border: 1px solid ${(props) => props.theme.colors.grayScale.digitalBlack};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: ${pxToRem(10)};
  transition: background 0.10s, border-color 0.10s;
  padding: 2px;
  
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: ${(props) => props.theme.colors.grayScale.digitalBlack};
    border-radius: 50%;
    cursor: pointer;
    transform: scale(0);
  }
  ${({ disabled }) =>
          disabled
                  ? css`
        border: 1px solid ${(props) => props.theme.colors.grayScale.digitalBlack300};
        &::after {
          background: ${(props) => props.theme.colors.grayScale.digitalBlack300};
          pointer-events: none;
        }
      `
                  : ''};
`;

const RadioInput = styled.input`
 display: none;
  &:checked + ${RadioButton} {
    &::after {
      transform: scale(1);
    }
`;

/**
 * Exported component
 */
export const Radio = ({
    id,
    label,
    value,
    disabled = false,
    required = false,
    size = 'large',
    defaultChecked,
    selectedValue,
    onSelect,
    ...restProps
}: RadioProps) => {
  // Use ID form props or create randomized string
    const [checked, setChecked] = useState(false)
  const componentId = id ?? generateRandomString(5);

    const checkedProps = React.useMemo(() => {
        if (!defaultChecked) {
            return { checked };
        }
        return { defaultChecked };
    }, [checked, defaultChecked]);

    React.useEffect(()=> {
        if (selectedValue === value) {
            setChecked(true)
        }
    }, [selectedValue])

  return (
      <RadioComponentWrapper
          id={componentId}
          size={size}
          data-testid={'radio'}
      >
        <FormLabel disabled={disabled} required={required}>
          <RadioInput
              id={`radio-${componentId}`}
              type={'radio'}
              value={value}
              {...checkedProps}
              disabled={disabled}
              onChange={onSelect}
              {...restProps}
          />
          <RadioButton size={size} disabled={disabled}/>
          {label}
        </FormLabel>
      </RadioComponentWrapper>
);
};

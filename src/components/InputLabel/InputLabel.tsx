import styled, { css } from 'styled-components';
import { spacing, typography } from 'shared';

/**
 * Properties for styles
 */
interface InputLabelProps {
  /**
   * Control font weight
   */
  bold?: boolean;
  /**
   * For disabled input
   */
  disabled?: boolean;
  /**
   * Input error state
   */
  error?: boolean;
}

/**
 * Label and helper text component
 */
export const InputLabel = styled.label<InputLabelProps>`
  color: ${(props) => props.theme.base.digitalBlack};
  pointer-events: none;
  margin: ${spacing([0.75, 0])};
  display: block;
  font-weight: ${({ bold }) =>
    bold ? typography.weight.bold : typography.weight.regular};
  ${({ disabled, error }) =>
    error
      ? css`
          color: ${(props) => props.theme.semantic.danger800};
        `
      : disabled
      ? css`
          color: ${(props) => props.theme.base.digitalBlack300};
        `
      : ''}
`;

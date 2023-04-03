import styled, { css } from 'styled-components';
import { colors, spacing, typography } from '../../shared';

/**
 * Properties for styles
 */
interface LabelProps {
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
export const Label = styled.label<LabelProps>`
  margin: ${spacing([0.75, 0])};
  display: block;
  font-weight: ${({ bold }) =>
    bold ? typography.weight.bold : typography.weight.regular};
  ${({ disabled, error }) =>
    error
      ? css`
          color: ${colors.semantic.danger800};
        `
      : disabled
      ? css`
          color: ${colors.base.digitalBlack300};
        `
      : ''}
`;

import styled, { css } from 'styled-components';
import { spacing } from 'shared';

/**
 * Properties of wrapper div of whole component
 */
export interface WrapperProps {
  /**
   * Wrapper margins for custom positioning, using 0.5rem as base unit
   */
  margin?: number | number[];
  /**
   * Wrapper width in px, if undefined the component takes width of containing element
   */
  width?: number;
}

/**
 * Wrap all components with a div
 */
export const Wrapper = styled.div<WrapperProps>`
  margin: ${({ margin }) => spacing(margin)};
  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          flex: 1;
        `};
`;

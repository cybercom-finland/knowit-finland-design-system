import React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { pxToRem, ComponentBaseProps } from '../../shared';

export type AccordionVariant = 'rectangle' | 'rounded';

/**
 * Dimensions of accordion component
 */
const accordionDimensions = {
  rounded: {
    borderRadius: pxToRem(32),
  },
};

/**
 * Accordion component properties
 * Extends html div element attributes
 */
export interface AccordionProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Accordion variant
   */
  variant?: AccordionVariant;

  /**
   * Children
   */
  children: React.ReactNode;
}

/**
 * Helper function to calculate correct sizes
 * @param props mandatory accordion props
 * @returns modified css
 */
const calculateSizes = () => {
  return css`
    ${variant({
      prop: 'variant',
      variants: {
        rounded: {
          overflow: 'hidden',
          borderRadius: `0 ${accordionDimensions.rounded.borderRadius} 0 ${accordionDimensions.rounded.borderRadius}`,
        },
      },
    })};
  `;
};

const InternalAccordion = styled.div<AccordionProps>`
  ${calculateSizes}
  width: min-content;
  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack100};
`;

/**
 * Accordion component
 */
export const Accordion = ({
  variant = 'rectangle',
  children,
  ...restProps
}: AccordionProps) => {
  return (
    <InternalAccordion variant={variant} {...restProps}>
      {children}
    </InternalAccordion>
  );
};

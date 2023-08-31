import React, { useState } from 'react';
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
  title?: React.ReactNode;

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

  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack100};
`;

const AccordionTitle = styled.div<AccordionProps>`
  padding: 16px 16px 16px 24px;
`;
const AccordionContent = styled.div<AccordionProps>`
  padding: 0px 24px 24px 24px;
`;

/**
 * Accordion component
 */
export const Accordion = ({
  children,
  title,
  ...restProps
}: AccordionProps) => {
  const [accordionIsOpen, setAccordionOpen] = useState(false);
  return (
    <InternalAccordion
      onClick={() => setAccordionOpen(!accordionIsOpen)}
      {...restProps}
    >
      <AccordionTitle>{title}</AccordionTitle>
      {accordionIsOpen && <AccordionContent>{children}</AccordionContent>}
    </InternalAccordion>
  );
};

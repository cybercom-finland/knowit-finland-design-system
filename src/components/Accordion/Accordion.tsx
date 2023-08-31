import React, { useState } from 'react';
import styled from 'styled-components';
import { pxToRem, ComponentBaseProps } from '../../shared';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

/**
 * Dimensions of accordion component
 */
const accordionDimensions = {
  accordionTitle: {
    paddingTop: 16,
    paddingRigth: 16,
    paddingBottom: 16,
    paddingLeft: 24,
  },
  accordionContent: {
    paddingTop: 0,
    paddingRigth: 24,
    paddingBottom: 24,
    paddingLeft: 24,
  },
};

/**
 * Accordion component properties
 * Extends html div element attributes
 */
export interface AccordionProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Accordion title
   */
  title?: React.ReactNode;

  /**
   * Children
   */
  children: React.ReactNode;
}

const InternalAccordion = styled.div<AccordionProps>`
  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack100};
`;

const AccordionTitle = styled.div<AccordionProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  padding: ${pxToRem(accordionDimensions.accordionTitle.paddingTop)}
    ${pxToRem(accordionDimensions.accordionTitle.paddingRigth)}
    ${pxToRem(accordionDimensions.accordionTitle.paddingBottom)}
    ${pxToRem(accordionDimensions.accordionTitle.paddingLeft)};
`;
const AccordionContent = styled.div<AccordionProps>`
  padding: ${pxToRem(accordionDimensions.accordionContent.paddingTop)}
    ${pxToRem(accordionDimensions.accordionContent.paddingRigth)}
    ${pxToRem(accordionDimensions.accordionContent.paddingBottom)}
    ${pxToRem(accordionDimensions.accordionContent.paddingLeft)};
`;
const AccordionArrow = styled.div<AccordionProps>`
  align-self: center;
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
    <InternalAccordion {...restProps}>
      <AccordionTitle onClick={() => setAccordionOpen(!accordionIsOpen)}>
        {title}
        <AccordionArrow>
          {accordionIsOpen && <MdKeyboardArrowUp />}
          {!accordionIsOpen && <MdKeyboardArrowDown />}
        </AccordionArrow>
      </AccordionTitle>
      {accordionIsOpen && <AccordionContent>{children}</AccordionContent>}
    </InternalAccordion>
  );
};

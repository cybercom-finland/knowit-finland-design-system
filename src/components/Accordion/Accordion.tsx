import React, { useState } from 'react';
import styled from 'styled-components';
import { pxToRem, ComponentBaseProps } from '../../shared';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Typography } from '../Typography';

/**
 * Dimensions of accordion component
 */
const accordionDimensions = {
  accordionTitle: {
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 24,
  },
  accordionContent: {
    paddingTop: 0,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
  },
  iconSize: 24,
  marginBottom: 8,
};

type AccordionTitleSize = 'h2' | 'h3';

/**
 * Accordion component properties
 * Extends html div element attributes
 */
export interface AccordionProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Accordion title
   */
  title?: string;

  /**
   * Accordion title size
   */
  titleSize?: AccordionTitleSize;

  /**
   * Children
   */
  children: React.ReactNode;
}

const InternalAccordion = styled.div<AccordionProps>`
  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack100};
  margin-bottom: ${pxToRem(accordionDimensions.marginBottom)};
`;

const AccordionTitle = styled.div<AccordionProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  padding-top: ${pxToRem(accordionDimensions.accordionTitle.paddingTop)};
  padding-right: ${pxToRem(accordionDimensions.accordionTitle.paddingRight)};
  padding-bottom: ${pxToRem(accordionDimensions.accordionTitle.paddingBottom)};
  padding-left: ${pxToRem(accordionDimensions.accordionTitle.paddingLeft)};
`;

const AccordionContent = styled.div<AccordionProps>`
  padding-top: ${pxToRem(accordionDimensions.accordionContent.paddingTop)};
  padding-right: ${pxToRem(accordionDimensions.accordionContent.paddingRight)};
  padding-bottom: ${pxToRem(
    accordionDimensions.accordionContent.paddingBottom
  )};
  padding-left: ${pxToRem(accordionDimensions.accordionContent.paddingLeft)};
`;

/**
 * Accordion arrow icon wrapper component
 */
const AccordionArrow = styled.div<AccordionProps>`
  align-self: center;
  font-size: ${pxToRem(accordionDimensions.iconSize)};
`;

/**
 * Accordion component
 */
export const Accordion = ({
  children,
  title,
  titleSize = 'h2',
  ...restProps
}: AccordionProps) => {
  const [accordionIsOpen, setAccordionOpen] = useState(false);
  return (
    <InternalAccordion {...restProps}>
      <AccordionTitle onClick={() => setAccordionOpen(!accordionIsOpen)}>
        <Typography variant={titleSize}>{title}</Typography>
        <AccordionArrow>
          {accordionIsOpen && <MdKeyboardArrowUp />}
          {!accordionIsOpen && <MdKeyboardArrowDown />}
        </AccordionArrow>
      </AccordionTitle>
      {accordionIsOpen && <AccordionContent>{children}</AccordionContent>}
    </InternalAccordion>
  );
};

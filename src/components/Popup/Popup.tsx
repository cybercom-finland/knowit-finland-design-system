import React, { useEffect, useRef, useState } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';
import { variant } from 'styled-system';
import { pxToRem, ComponentBaseProps, typography } from '../../shared';

export type ArrowVariant = 'none' | 'top' | 'right' | 'bottom' | 'left';

/**
 * Dimensions of Popup component
 */
const popupDimensions = {
  arrow: {
    arrowSize: 8,
    arrowOffset: 146,
  },
  innerPopup: {
    popupWidth: 300,
  },
  popupTitle: {
    paddingTop: 25.5,
    paddingRigth: 16,
    paddingBottom: 17.5,
    paddingLeft: 16,
  },
  popupContents: {
    padding: 16,
    gap: 10,
  },
};

/**
 * Popup component properties
 * Extends html div element attributes
 */
export interface PopupProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Popup arrow variant
   */
  arrow?: ArrowVariant;

  /**
   * Title
   */
  title?: string;

  /**
   * Children
   */
  children?: React.ReactNode;
}

/**
 * Helper function to calculate correct sizes for font size
 * @param props theme props and popup height
 * @returns modified css
 */
const arrowStyles = (props: DefaultTheme) => {
  return css`
    ${variant({
      prop: 'arrow',
      variants: {
        top: {
          borderLeft: `${pxToRem(
            popupDimensions.arrow.arrowSize
          )} solid transparent`,
          borderRight: `${pxToRem(
            popupDimensions.arrow.arrowSize
          )} solid transparent`,
          borderBottom: `${pxToRem(popupDimensions.arrow.arrowSize)} solid ${
            props.theme.colors.grayScale.digitalBlack100
          }`,
          right: pxToRem(popupDimensions.arrow.arrowOffset),
          top: pxToRem(-popupDimensions.arrow.arrowSize),
        },
        right: {
          borderTop: `${pxToRem(
            popupDimensions.arrow.arrowSize
          )} solid transparent`,
          borderBottom: `${pxToRem(
            popupDimensions.arrow.arrowSize
          )} solid transparent`,
          borderLeft: `${pxToRem(popupDimensions.arrow.arrowSize)} solid ${
            props.theme.colors.grayScale.digitalBlack100
          }`,
          top: `calc(50% - ${pxToRem(popupDimensions.arrow.arrowSize)})`,
          right: pxToRem(-popupDimensions.arrow.arrowSize),
        },
        bottom: {
          borderLeft: `${pxToRem(
            popupDimensions.arrow.arrowSize
          )} solid transparent`,
          borderRight: `${pxToRem(
            popupDimensions.arrow.arrowSize
          )} solid transparent`,
          borderTop: `${pxToRem(popupDimensions.arrow.arrowSize)} solid ${
            props.theme.colors.grayScale.digitalBlack100
          }`,
          bottom: pxToRem(-popupDimensions.arrow.arrowSize),
          right: pxToRem(popupDimensions.arrow.arrowOffset),
        },
        left: {
          borderTop: `${pxToRem(
            popupDimensions.arrow.arrowSize
          )} solid transparent`,
          borderBottom: `${pxToRem(
            popupDimensions.arrow.arrowSize
          )} solid transparent`,
          borderRight: `${pxToRem(popupDimensions.arrow.arrowSize)} solid ${
            props.theme.colors.grayScale.digitalBlack100
          }`,
          top: `calc(50% - ${pxToRem(popupDimensions.arrow.arrowSize)})`,
          left: pxToRem(-popupDimensions.arrow.arrowSize),
        },
      },
    })};
  `;
};

const InternalPopup = styled.div<PopupProps>`
  position: relative;
  width: ${pxToRem(popupDimensions.innerPopup.popupWidth)};
  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack100};
`;
const PopupTitle = styled.div<PopupProps>`
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.paragraph};
  padding: ${pxToRem(popupDimensions.popupTitle.paddingTop)}
    ${pxToRem(popupDimensions.popupTitle.paddingRigth)}
    ${pxToRem(popupDimensions.popupTitle.paddingBottom)}
    ${pxToRem(popupDimensions.popupTitle.paddingLeft)};
`;
const PopupContents = styled.div<PopupProps>`
  font-size: ${typography.size.paragraph2};
  line-height: ${typography.lineHeight.paragraph2};
  padding: ${pxToRem(popupDimensions.popupContents.padding)};
  gap: ${pxToRem(popupDimensions.popupContents.gap)};
  display: flex;
  flex-direction: column;
`;

const Arrow = styled.div<PopupProps>`
  width: 0;
  height: 0;
  position: absolute;

  ${arrowStyles};
`;

/**
 * Popup component
 */
export const Popup = ({
  arrow = 'none',
  children,
  title,
  ...restProps
}: PopupProps) => {
  return (
    <InternalPopup {...restProps}>
      <Arrow arrow={arrow} />
      <PopupTitle>{title}</PopupTitle>
      <PopupContents>{children}</PopupContents>
    </InternalPopup>
  );
};

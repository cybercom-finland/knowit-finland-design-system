import React from 'react';
import styled, { css } from 'styled-components';
import { borderBottom, variant } from 'styled-system';
import { pxToRem, ComponentBaseProps, typography } from '../../shared';

export type ArrowVariant = 'none' | 'up' | 'right' | 'down' | 'left';

/**
 * Dimensions of Popup component
 */
const popupDimensions = {
  rounded: {
    borderRadius: pxToRem(32),
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
  arrowVariant?: ArrowVariant;

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
 * @param props mandatory checkbox props
 * @returns modified css
 */
const arrowStyles = () => {
  return css`
    ${variant({
      prop: 'arrowVariant',
      variants: {
        up: {
          borderLeft: '50px solid transparent',
          borderRight: '50px solid transparent',
          borderBottom: '50px solid black',
        },
        right: {
          borderTop: '50px solid transparent',
          borderBottom: '50px solid transparent',
          borderLeft: '50px solid black',
        },
        down: {
          borderLeft: '50px solid transparent',
          borderRight: '50px solid transparent',
          borderTop: '50px solid black',
        },
        left: {
          borderTop: '50px solid transparent',
          borderBottom: '50px solid transparent',
          borderRight: '50px solid black',
        },
      },
    })};
  `;
};

const InternalPopup = styled.div<PopupProps>`
  margin-top: -3.7px;
  width: 300px;
  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack100};
`;
const PopupTitle = styled.div<PopupProps>`
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.paragraph};
  padding: 25.5px 16px 17.5px 16px;
`;
const PopupContents = styled.div<PopupProps>`
  font-size: ${typography.size.paragraph2};
  line-height: ${typography.lineHeight.paragraph2};
  padding: 16px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const ArrowTop = styled.div<PopupProps>`
  width: 0;
  height: 0;
  ${arrowStyles}
`;

/**
 * Popup component
 */
export const Popup = ({
  arrowVariant = 'none',
  children,
  title,
  ...restProps
}: PopupProps) => {
  return (
    <>
      <ArrowTop arrowVariant={arrowVariant} />
      <InternalPopup {...restProps}>
        <PopupTitle>{title}</PopupTitle>
        <PopupContents>{children}</PopupContents>
      </InternalPopup>
    </>
  );
};

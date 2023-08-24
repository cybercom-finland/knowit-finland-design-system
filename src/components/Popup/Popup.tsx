import React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
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

const InternalPopup = styled.div<PopupProps>`
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
  padding: 16px 16px 10px 16px;
`;

/**
 * Popup component
 */
export const SvgArrow = ({ ...restProps }: PopupProps) => {
  return (
    <svg
      width='21'
      height='8'
      viewBox='0 0 21 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.5001 4.03769e-07L20.8242 8L0.175904 8L10.5001 4.03769e-07Z'
        fill='#F1F0ED'
      />
    </svg>
  );
};

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
      <SvgArrow></SvgArrow>
      <InternalPopup arrowVariant={arrowVariant} {...restProps}>
        <PopupTitle>{title}</PopupTitle>
        <PopupContents>{children}</PopupContents>
      </InternalPopup>
    </>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';
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
const arrowStyles = (props: DefaultTheme) => {
  return css`
    ${variant({
      prop: 'arrowVariant',
      variants: {
        up: {
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderBottom: `8px solid ${props.theme.colors.grayScale.digitalBlack100}`,
          right: '146px',
          top: '-8px',
        },
        right: {
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderLeft: `8px solid ${props.theme.colors.grayScale.digitalBlack100}`,
          top: `${props.popupHeight / 2 - 4}px`,
          right: '-8px',
        },
        down: {
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: `8px solid ${props.theme.colors.grayScale.digitalBlack100}`,
          bottom: '-8px',
          right: '146px',
        },
        left: {
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderRight: `8px solid ${props.theme.colors.grayScale.digitalBlack100}`,
          top: `${props.popupHeight / 2 - 4}px`,
          left: '-8px',
        },
      },
    })};
  `;
};

const InternalPopup = styled.div<PopupProps>`
  position: relative;
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

const Arrow = styled.div<PopupProps & { popupHeight: number }>`
  width: 0;
  height: 0;
  position: absolute;

  ${arrowStyles};
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
  const [popupHeight, setPopupHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPopupHeight(ref.current?.clientHeight ?? 0);
  });

  return (
    <InternalPopup ref={ref} {...restProps}>
      <Arrow arrowVariant={arrowVariant} popupHeight={popupHeight} />
      <PopupTitle>{title}</PopupTitle>
      <PopupContents>{children}</PopupContents>
    </InternalPopup>
  );
};

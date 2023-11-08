import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { pxToRem, ComponentBaseProps, typography } from '../../shared';

import {
  useFloating,
  useInteractions,
  Placement,
  offset,
  FloatingArrow,
  arrow,
  useClick,
  useHover,
  flip,
} from '@floating-ui/react';

/**
 * Dimensions of Popup component
 */
const popupDimensions = {
  arrow: {
    arrowHeight: 8,
    arrowWidth: 20,
  },
  innerPopup: {
    popupWidth: 300,
  },
  popupTitle: {
    paddingTop: 24,
    paddingRight: 16,
    paddingBottom: 4,
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
   * Title
   */
  title?: string;

  /**
   * Content
   */
  content?: React.ReactNode;

  /**
   * The element that has the popup
   */
  children?: React.ReactNode;

  /**
   * Placement of Popup component
   */
  placement?: Placement;

  /**
   * Popup arrow direction
   */
  showArrow?: boolean;

  /**
   * Is popup open initially
   */
  initiallyOpen?: boolean;

  // How to open popup
  openWith?: 'hover' | 'click' | 'both';
}

/**
 * Arrow component
 */
const StyledArrow = styled(FloatingArrow)`
  fill: ${(props) =>
    (props.fill = props.theme.colors.grayScale.digitalBlack100)};
`;

/**
 * Wrapper for popup component
 */
const InternalPopup = styled.div<PopupProps>`
  position: relative;
  max-width: ${pxToRem(popupDimensions.innerPopup.popupWidth)};
  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack100};
`;

/**
 * Popup title string styles
 */
const PopupTitle = styled.div<PopupProps>`
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.paragraph};
  padding-top: ${pxToRem(popupDimensions.popupTitle.paddingTop)};
  padding-right: ${pxToRem(popupDimensions.popupTitle.paddingRight)};
  padding-bottom: ${pxToRem(popupDimensions.popupTitle.paddingBottom)};
  padding-left: ${pxToRem(popupDimensions.popupTitle.paddingLeft)};
`;

/**
 * Wrapper for popup children
 */
const PopupContents = styled.div<PopupProps>`
  font-size: ${typography.size.paragraph2};
  line-height: ${typography.lineHeight.paragraph2};
  padding: ${pxToRem(popupDimensions.popupContents.padding)};
  gap: ${pxToRem(popupDimensions.popupContents.gap)};
  display: flex;
  flex-direction: column;
`;

/**
 * Popup component
 */
export const Popup = ({
  showArrow = false,
  children,
  title,
  placement = 'top',
  initiallyOpen,
  openWith = 'click',
  content,
  ...restProps
}: PopupProps) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: placement,
    middleware: [
      offset(10),
      flip(),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const hover = useHover(context, {
    enabled: openWith === 'hover' || openWith === 'both',
  });

  const click = useClick(context, {
    enabled: openWith === 'click' || openWith === 'both',
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    hover,
  ]);

  return (
    <>
      <div
        style={{ display: 'inline-block' }}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {children}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {showArrow && (
            <StyledArrow
              ref={arrowRef}
              context={context}
              height={popupDimensions.arrow.arrowHeight}
              width={popupDimensions.arrow.arrowWidth}
            />
          )}
          <InternalPopup {...restProps}>
            {title && <PopupTitle>{title}</PopupTitle>}
            <PopupContents>{content}</PopupContents>
          </InternalPopup>
        </div>
      )}
    </>
  );
};

import React, { ReactNode, createRef } from 'react';
import { generateRandomString, pxToRem } from '../../../shared';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { DialogContent } from '../DialogContent/DialogContent';
import { DialogHeader } from '../DialogHeader/DialogHeader';
import { DialogFooter } from '../DialogFooter/DialogFooter';
import { Button } from '../../Button';

export type DialogVariant = 'mobile' | 'medium' | 'large';

/**
 * Various dimensions of dialog component
 */
const dialogDimensions = {
  mobile: {
    width: pxToRem(299),
  },
  medium: {
    width: pxToRem(576),
  },
  large: {
    width: pxToRem(936),
  },
};

/**
 * Checkbox component properties
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#additional_attributes
 */
export interface DialogProps {
  /**
   * Show or hide the modal
   */
  visible: boolean;

  /**
   * Show or hide the modal
   */
  id: string;

  /**
   * Children
   */
  children: ReactNode;

  /**
   * Show content
   */
  showContent: boolean;

  /**
   * Variant
   */
  variant: DialogVariant;

  /** Focusable element ref when modal is opened. If not provided, modal title is focused. */
  focusOnOpenRef?: React.RefObject<any>;

  /**
   * Show vertical scroll bar if needed and show horizontal divider between content and footer.
   */
  scrollable?: boolean;
}

export interface ModalProviderState {
  titleRef: React.RefObject<HTMLHeadElement> | null;
  focusTitleOnOpen: boolean;
  variant: DialogVariant;
  scrollable: boolean;
}

const ModalStyle = styled.div`
  height: min-content;
  padding: 0 !important;
`;

const OverlayStyle = styled.div<DialogProps | any>`
  ${variant({
    prop: 'variant',
    variants: {
      mobile: {
        width: dialogDimensions.mobile.width,
      },
      medium: {
        width: dialogDimensions.medium.width,
      },
      large: {
        width: dialogDimensions.large.width,
      },
    },
  })};
`;

/**
 * Checkbox component
 */
const NativeDialog = ({
  id,
  visible,
  focusOnOpenRef,
  scrollable = true,
  variant = 'mobile',
  children,
  ...restProps
}: DialogProps) => {
  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);
  const titleRef = createRef<HTMLHeadElement>();

  return (
    <ReactModal
      isOpen={visible}
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props} {...restProps} variant={variant}>
          {contentElement}
        </OverlayStyle>
      )}
    >
      {children}
    </ReactModal>
  );
};

const Dialog = ({ ...restProps }: DialogProps) => {
  return (
    <NativeDialog {...restProps}>
      <DialogHeader {...restProps}>Header</DialogHeader>
      <DialogContent {...restProps}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et
        odio sed est pellentesque gravida sit amet at orci.
      </DialogContent>
      <DialogFooter {...restProps}>
        <Button label={'Button'} />
      </DialogFooter>
    </NativeDialog>
  );
};

export { Dialog, NativeDialog };

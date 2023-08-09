import React, { ReactNode, createRef } from 'react';
import { generateRandomString, pxToRem } from '../../../shared';
import styled from 'styled-components';
import { variant } from 'styled-system';

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

const defaultProviderValue: ModalProviderState = {
  /** Focus title on open for resolving title tab index */
  focusTitleOnOpen: true,
  /** Modal title ref for focusing */
  titleRef: null,
  /** Modal's smallScreen setting */
  variant: 'mobile',
  /** If modal should have scrollable content and size */
  scrollable: true,
};

const { Provider: ModalProvider, Consumer: ModalConsumer } =
  React.createContext(defaultProviderValue);

const StyledModal = styled.div<DialogProps>`
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
  margin: auto;
  height: min-content;
  padding: 0 !important;
`;

const StyledOverlay = styled.div<DialogProps>``;

/**
 * Checkbox component
 */
const Dialog = ({ id, children, ...restProps }: DialogProps) => {
  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);
  const titleRef = createRef<HTMLHeadElement>();

  return children;
};

export { Dialog, ModalConsumer };

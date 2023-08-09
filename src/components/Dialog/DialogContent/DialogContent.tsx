import React, { HTMLProps, ReactNode } from 'react';
import { generateRandomString, pxToRem } from '../../../shared';
import { DialogVariant, ModalConsumer } from '../Dialog/Dialog';
import styled from 'styled-components';

/**
 * Checkbox component properties
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#additional_attributes
 */
export interface DialogProps {
  /**
   * Show or hide the modal
   */
  id?: string;

  /**
   * Children
   */
  children: ReactNode;
}

export type HtmlDivProps = Omit<HTMLProps<HTMLDivElement>, 'ref' | 'as'>;
export interface ModalContentProps
  extends Omit<HtmlDivProps, 'children' | 'className'> {
  /** Modal container div class name for custom styling. */
  className?: string;
  /** Children */
  children: ReactNode;
}

interface InternalModalContentProps extends ModalContentProps {
  id?: string;
}

const NativeModalContent = ({
  children,
  ...passProps
}: InternalModalContentProps) => {
  return <div {...passProps}>{children}</div>;
};

const ModalContent = styled(NativeModalContent)`
  padding: 32px;
  gap: 32px;
`;

/**
 * Checkbox component
 */
export const DialogContent = ({ id, children }: DialogProps) => {
  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return <ModalContent id={componentId}>{children}</ModalContent>;
};

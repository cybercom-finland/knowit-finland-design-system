import React, { HTMLProps, ReactNode } from 'react';
import { generateRandomString } from '../../../shared';
import { DialogVariant } from '../Dialog/Dialog';
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
  id: string;

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
  modalVariant: DialogVariant;
  scrollable: boolean;
}

const NativeDialogFooter = styled.div`
  display: inline-flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.grayScale.digitalBlack100};
  width: 100%;
  padding: 24px 32px 32px 16px;
`;

/**
 * Checkbox component
 */
export const DialogFooter = ({ id, children, ...restProps }: DialogProps) => {
  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return (
    <NativeDialogFooter id={componentId} {...restProps}>
      {children}
    </NativeDialogFooter>
  );
};

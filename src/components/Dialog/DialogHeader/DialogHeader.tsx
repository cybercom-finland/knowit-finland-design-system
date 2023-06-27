import React, { HTMLProps, ReactNode } from 'react';
import { generateRandomString, pxToRem } from '../../../shared';
import { DialogVariant } from '../Dialog/Dialog';
import styled from 'styled-components';
import { MdAdd, MdClose } from 'react-icons/md';
import { IconButton } from '../../IconButton';

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

const NativeDialogHeader = ({
  children,
  ...passProps
}: InternalModalContentProps) => {
  return <div {...passProps}>{children}</div>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${pxToRem(2)} solid
    ${(props) => props.theme.colors.grayScale.digitalBlack100};
  padding: 32px;
  gap: 32px;
`;

/**
 * Checkbox component
 */
export const DialogHeader = ({ id, children, ...restProps }: DialogProps) => {
  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return (
    <Wrapper>
      <NativeDialogHeader
        id={componentId}
        modalVariant={'mobile'}
        scrollable={false}
        {...restProps}
      >
        {children}
      </NativeDialogHeader>
      <IconButton>
        <MdClose />
      </IconButton>
    </Wrapper>
  );
};

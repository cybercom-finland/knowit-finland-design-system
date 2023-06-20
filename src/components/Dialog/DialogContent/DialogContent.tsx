import React, { Component, HTMLProps, ReactNode } from 'react';
import { generateRandomString } from '../../../shared';
import { DialogVariant, ModalConsumer, baseClassName } from '../Dialog/Dialog';
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

const contentClassName = `${baseClassName}_content`;
const modalContentClassNames = {
  smallScreen: `${contentClassName}--small-screen`,
  noScroll: `${contentClassName}--no-scroll`,
  heading: `${contentClassName}_heading`,
};

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

class ModalContent extends Component<InternalModalContentProps> {
  render() {
    const {
      className,
      title,
      children,
      scrollable,
      modalVariant,
      ...passProps
    } = this.props;

    return <div {...passProps}>{children}</div>;
  }
}

/**
 * Checkbox component
 */
export const DialogContent = ({ id, ...restProps }: DialogProps) => {
  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return (
    <ModalConsumer>
      <ModalContent {...restProps} />
    </ModalConsumer>
  );
};

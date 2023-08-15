import React from 'react';
import { HTMLProps } from 'react';

/**
 * Div component properties
 * Extends html div element attributes
 */
export interface DialogProps extends HTMLProps<HTMLDivElement> {
  /**
   * Component children
   */
  children?: React.ReactNode;
}

export const Dialog = ({ children }: DialogProps) => {
  return <div role='dialog'>{children}</div>;
};

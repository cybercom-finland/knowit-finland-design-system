import React from 'react';
import { ComponentBaseProps } from '../../../shared';

/**
 * Div component properties
 * Extends html div element attributes
 */
export interface DialogProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Component children
   */
  children?: React.ReactNode;
}

export const Dialog = ({ children, ...restProps }: DialogProps) => {
  return (
    <div role='dialog' {...restProps}>
      {children}
    </div>
  );
};

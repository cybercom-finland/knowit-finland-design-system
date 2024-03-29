import React from 'react';
import { ComponentBaseProps } from '../../shared';

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

export const Dialog = React.forwardRef(
  ({ children, ...restProps }: DialogProps, ref: DialogProps['ref']) => {
    return (
      <div role='dialog' ref={ref} {...restProps}>
        {children}
      </div>
    );
  }
);

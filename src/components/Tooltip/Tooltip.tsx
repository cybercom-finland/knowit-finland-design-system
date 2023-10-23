import React from 'react';
import { Popup, PopupProps } from '../Popup';

/**
 * Tooltip component properties
 * Extends PopupProps
 */
export type TooltipProps = Omit<PopupProps, 'title' | 'openWith'>;

/**
 * Tooltip component
 * @param restProps Tooltip props
 * @returns Tooltip component
 */
export const Tooltip = ({ children, ...restProps }: TooltipProps) => {
  return (
    <Popup {...restProps} openWith='hover'>
      {children}
    </Popup>
  );
};

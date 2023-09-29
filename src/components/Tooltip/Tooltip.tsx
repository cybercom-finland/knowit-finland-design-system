import React from 'react';
import { Popup, PopupProps } from '../Popup';

/**
 * Tooltip component properties
 * Extends PopupProps
 */
export interface TooltipProps extends PopupProps {}

/**
 * Tooltip component
 * @param props Tooltip props
 * @returns Tooltip component
 */
export const Tooltip = ({ arrow, children }: TooltipProps) => {
  return <Popup arrow={arrow}>{children}</Popup>;
};

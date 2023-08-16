import React from 'react';
import { LoadingIndicatorBaseProps } from '../../shared';

/**
 * Linear loading indicator component properties
 */
export interface CircularLoadingIndicatorBaseProps
  extends LoadingIndicatorBaseProps {}

export const CircularLoadingIndicator = ({
  progress,
  determinate,
  indicatorStyle,
  ...restProps
}: LoadingIndicatorBaseProps) => {
  return <></>;
};

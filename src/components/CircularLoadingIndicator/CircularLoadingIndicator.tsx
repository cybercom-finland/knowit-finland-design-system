import React from 'react';
import {
  generateRandomString,
  LoadingIndicatorBaseProps,
  pxToRem,
  Size,
} from '../../shared';
import styled from 'styled-components';
import { LoadingIndicatorColor } from '../LinearLoadingIndicator/styles';

/**
 * Linear loading indicator component properties
 */
export interface CircularLoadingIndicatorBaseProps
  extends LoadingIndicatorBaseProps {
  /**
   * Indicator Size
   */
  size?: Size;
}

/**
 * Helper function to calculate correct sizes and width for circle
 * @param size Indicator size from props
 * @returns object with size and width
 */
const CalculateSize = (size: string) => {
  switch (size) {
    case 'small':
      return { size: 16, width: 2 };
    case 'medium':
      return { size: 24, width: 3 };
    case 'large':
      return { size: 32, width: 4 };
    default:
      return { size: 16, width: 2 };
  }
};
/**
 * Helper function to keep progress between 0 and 100
 * @param progress Progress from props
 * @returns number number progress
 */
const ProgressCap = (progress: number) => {
  if (progress >= 0 && progress <= 100) {
    return progress;
  }
  if (progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return 0;
};

const IndicatorBase = styled.svg<CircularLoadingIndicatorBaseProps>`
  transform: rotate(-90deg);
`;
const IndicatorCircle = styled.circle<CircularLoadingIndicatorBaseProps>`
  transform-origin: center;
  stroke: ${(props) =>
    LoadingIndicatorColor(props.indicatorStyle || 'default', props.theme)};

  animation: ${(props) =>
    props.determinate ? '' : 'loadingAnimation 1s linear infinite'};

  @keyframes loadingAnimation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const CircularLoadingIndicator = ({
  id,
  progress = 50,
  determinate = false,
  indicatorStyle,
  size = 'medium',
  ...restProps
}: CircularLoadingIndicatorBaseProps) => {
  /**
   * Math for circle
   */
  const isDeterminate = !determinate ? 50 : ProgressCap(progress);
  const componentId = id ?? generateRandomString(5);
  const calculatedSize = CalculateSize(size);
  const center = calculatedSize.size / 2;
  const radius = center - calculatedSize.width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * ((100 - isDeterminate) / 100);

  return (
    <IndicatorBase
      id={componentId}
      width={calculatedSize.size}
      height={calculatedSize.size}
      viewBox={`0 0 ${calculatedSize.size} ${calculatedSize.size}`}
      fill='none'
      {...restProps}
    >
      <IndicatorCircle
        determinate={determinate}
        indicatorStyle={indicatorStyle}
        cx={pxToRem(center)}
        cy={pxToRem(center)}
        r={pxToRem(radius)}
        fill='transparent'
        strokeWidth={pxToRem(calculatedSize.width)}
        strokeDasharray={pxToRem(dashArray)}
        strokeDashoffset={pxToRem(dashOffset)}
      ></IndicatorCircle>
    </IndicatorBase>
  );
};

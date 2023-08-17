import React from 'react';
import { ComponentBaseProps } from '../../shared';
import { LoadingIndicatorColor, linearLoadingIndicatorHeight } from './styles';
import { Wrapper, WrapperProps } from '../Wrapper';
import { Severity } from '../../shared/types';
import styled from 'styled-components';

/**
 * Linear loading indicator component properties
 */
export interface LinearLoadingIndicatorBaseProps
  extends ComponentBaseProps<HTMLSpanElement>,
    WrapperProps {
  /**
   * Progress (0-100)
   */
  progress?: number;

  /**
   * Is the indicator determinate (showing a specific progress bar value), or indeterminate (animated loading indicator)
   */
  determinate?: boolean;

  /**
   * Severity of the loading indicator
   */
  indicatorSeverity?: Severity;
}

/**
 * BarBackground component, which represents 100% width of the whole loading indicator / progress bar
 */
const BarBackground = styled.span<LinearLoadingIndicatorBaseProps>`
  background: ${(props) => props.theme.colors.grayScale.digitalBlack100};
  top: 0;
  left: 0;
  width: 100%;
  height: ${linearLoadingIndicatorHeight}px;
  display: inline-block;
`;

/**
 * Bar component, which represents the visible progress % of the bar, or the loading animation.
 * The percent will be limited between 0-100%. If it is undefined, it will be zero.
 */
const Bar = styled.span<LinearLoadingIndicatorBaseProps>`
  top: 0;
  left: 0;
  width: ${(props) =>
    props.progress == undefined
      ? 0
      : props.progress < 0
      ? 0
      : props.progress > 100
      ? 100
      : props.progress}%;
  height: ${linearLoadingIndicatorHeight}px;
  display: inline-block;
  position: relative;
  background: ${(props) =>
    LoadingIndicatorColor(props.indicatorSeverity || 'default', props.theme)};
  @keyframes loadingAnimation {
    0% {
      width: 0%;
      left: 0%;
    }
    50% {
      width: 100%;
      left: 0%;
    }
    100% {
      width: 0%;
      left: 100%;
    }
  }
  animation: ${(props) =>
    props.determinate ? '' : 'loadingAnimation 2s infinite ease-in-out'};
  transition: 'width 1s ease-in-out';
`;

/**
 * LinearLoadingIndicator component
 */
export const LinearLoadingIndicator = ({
  margin,
  width,
  progress,
  determinate,
  indicatorSeverity,
  ...restProps
}: LinearLoadingIndicatorBaseProps) => {
  const ariaLabelText = determinate && progress ? `${progress}%` : '';

  return (
    <Wrapper
      margin={margin}
      width={width}
      height={linearLoadingIndicatorHeight}
      style={{ display: 'flex' }}
    >
      <BarBackground {...restProps}>
        <Bar
          indicatorSeverity={indicatorSeverity}
          progress={progress}
          determinate={determinate}
          aria-label={ariaLabelText}
          role='status'
          {...restProps}
        >
          &nbsp;
        </Bar>
      </BarBackground>
    </Wrapper>
  );
};

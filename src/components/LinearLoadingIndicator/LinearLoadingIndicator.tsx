import React from 'react';
import { ComponentBaseProps } from '../../shared';
import { LoadingIndicatorColor, linearLoadingIndicatorHeight } from './styles';
import { Wrapper } from '../Wrapper';
import { Severity } from '../../shared/types';
import styled from 'styled-components';

type LinearLoadingIndicatorAttributes = React.HTMLAttributes<HTMLDivElement>;

/**
 * Linear loading indicator component properties
 */
export interface LinearLoadingIndicatorProps
  extends ComponentBaseProps<HTMLDivElement>,
    LinearLoadingIndicatorAttributes {
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
const BarBackground = styled.span`
  background: ${(props) => props.theme.colors.grayScale.digitalBlack100};
  top: 0;
  left: 0;
  width: 100%;
  height: ${linearLoadingIndicatorHeight}px;
  display: inline-block;
`;

/**
 * Internal Bar component
 */
const Bar = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  determinate,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  indicatorSeverity,
  ...restProps
}: LinearLoadingIndicatorProps) => <span {...restProps} />;

/**
 * Bar component, which represents the visible progress % of the bar, or the loading animation.
 * The percent will be limited between 0-100%. If it is undefined, it will be zero.
 */
const StyledBar = styled(Bar)`
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
  progress = 0,
  determinate = false,
  indicatorSeverity = 'default',
  ...restProps
}: LinearLoadingIndicatorProps) => {
  const ariaLabelText = determinate && progress ? `${progress}%` : '';

  return (
    <Wrapper
      height={linearLoadingIndicatorHeight}
      style={{ display: 'flex' }}
      {...restProps}
    >
      <BarBackground>
        <StyledBar
          indicatorSeverity={indicatorSeverity}
          progress={progress}
          determinate={determinate}
          aria-label={ariaLabelText}
          role='status'
        >
          &nbsp;
        </StyledBar>
      </BarBackground>
    </Wrapper>
  );
};

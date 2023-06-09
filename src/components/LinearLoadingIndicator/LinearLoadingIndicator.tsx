import React from 'react';
import {
  generateRandomString,
  ComponentBaseProps,
  LoadingIndicatorStyle,
  LoadingIndicatorColor,
} from '../../shared';
import { Wrapper, WrapperProps } from '../Wrapper';
import { InputBaseProps } from '../Input/Input';
import styled from 'styled-components';

/**
 * Linear loading indicator component properties
 */
export interface LinearLoadingIndicatorBaseProps
  extends ComponentBaseProps<HTMLSpanElement>,
    InputBaseProps,
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
   * Style (colour) of the loading indicator
   */
  indicatorStyle?: LoadingIndicatorStyle;
}

/**
 * OuterSpan component, which represents 100% width of the whole loading indicator / progress bar
 */
export const OuterSpan = styled.span<LinearLoadingIndicatorBaseProps>`
  background: ${(props) => props.theme.colors.loadingIndicator.background};
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  display: inline-block;
`;

/**
 * InnerSpan component, which represents the visible progress % of the bar, or the loading animation
 */
export const InnerSpan = styled.span<LinearLoadingIndicatorBaseProps>`
  top: 0;
  left: 0;
  width: ${(props) => props.progress}%;
  height: 4px;
  display: inline-block;
  position: relative;
  background: ${(props) =>
    LoadingIndicatorColor(
      props.indicatorStyle || LoadingIndicatorStyle.Default,
      props.theme
    )};
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
  id,
  margin,
  width,
  progress,
  determinate,
  indicatorStyle,
  ...restProps
}: LinearLoadingIndicatorBaseProps) => {
  // randomized part for id to avoid duplicates with multiple inputs
  const componentId = id ?? generateRandomString(5);

  const ariaLabelText = determinate ? `${progress}%` : '';

  return (
    <Wrapper margin={margin} width={width}>
      <OuterSpan id={`outerspan-${componentId}`} {...restProps}>
        <InnerSpan
          id={`innerspan-${componentId}`}
          indicatorStyle={indicatorStyle}
          progress={progress}
          determinate={determinate}
          aria-label={ariaLabelText}
          role="status"
          {...restProps}
        >
          &nbsp;
        </InnerSpan>
      </OuterSpan>
    </Wrapper>
  );
};

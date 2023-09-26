import React from 'react';
import styled from 'styled-components';
import { ComponentBaseProps, typography } from '../../shared';
import {
  BiSolidUpArrow,
  BiSolidDownArrow,
  BiSolidLeftArrow,
  BiSolidRightArrow,
} from 'react-icons/bi';
import { Wrapper } from '../Wrapper';
import { arrowVisibleSize, tooltipPadding } from './styles';

/**
 * Tooltip component properties
 * Extends html attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/
 */
export interface TooltipProps extends ComponentBaseProps<HTMLElement> {
  /**
   * Arrow up
   */
  arrowUp?: boolean;

  /**
   * Arrow down
   */
  arrowDown?: boolean;

  /**
   * Arrow left
   */
  arrowLeft?: boolean;

  /**
   * Arrow right
   */
  arrowRight?: boolean;

  /**
   * Children of the element, i.e. just the text that the tooltip contains
   */
  children?: React.ReactNode;
}

/**
 * Styled container for arrow icons
 */
const ArrowWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.grayScale.digitalBlack100};
  font-size: ${typography.size.paragraph2};
  padding: 0;
  margin: 0;
  border: 0;
  overflow: hidden;
  object-fit: none;
  object-position: center;
`;

/**
 * Styled container for the tooltip text
 */
const TextWrapper = styled.div<TooltipProps>`
  display: flex;
  flex: 1 0 auto;
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  font-size: ${typography.size.paragraph2};
  line-height: ${typography.lineHeight.paragraph2};
  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack100};
  padding: ${tooltipPadding};
  margin: 0;
  border: 0;
  cursor: default;
`;

/**
 * Up arrow component
 */
const UpArrow = () => {
  return (
    <ArrowWrapper style={{ height: arrowVisibleSize }}>
      <BiSolidUpArrow />
    </ArrowWrapper>
  );
};

/**
 * Down arrow component
 */
const DownArrow = () => {
  return (
    <ArrowWrapper style={{ height: arrowVisibleSize }}>
      <BiSolidDownArrow />
    </ArrowWrapper>
  );
};

/**
 * Left arrow component
 */
const LeftArrow = () => {
  return (
    <ArrowWrapper style={{ width: arrowVisibleSize }}>
      <div style={{ display: 'inline-block' }}>
        <BiSolidLeftArrow />
      </div>
    </ArrowWrapper>
  );
};

/**
 * Right arrow component
 */
const RightArrow = () => {
  return (
    <ArrowWrapper style={{ width: arrowVisibleSize }}>
      <div style={{ display: 'inline-block' }}>
        <BiSolidRightArrow />
      </div>
    </ArrowWrapper>
  );
};

/**
 * Tooltip component
 * @param props Tooltip props
 * @returns Tooltip component
 */
export const Tooltip = ({
  arrowUp,
  arrowDown,
  arrowLeft,
  arrowRight,
  children,
}: TooltipProps) => {
  return (
    <Wrapper style={{ display: 'flex', flexDirection: 'row' }}>
      {arrowLeft && <LeftArrow />}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {arrowUp && <UpArrow />}
        <TextWrapper>{children}</TextWrapper>
        {arrowDown && <DownArrow />}
      </div>
      {arrowRight && <RightArrow />}
    </Wrapper>
  );
};

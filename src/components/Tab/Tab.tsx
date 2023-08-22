import React from 'react';
import {
  ComponentBaseProps,
  generateRandomString,
  pxToRem,
} from '../../shared';
import styled, { css } from 'styled-components';

export interface TabProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Tabs value
   */
  value?: string;

  /**
   * Children
   */
  children?: React.ReactNode;

  /**
   * Is tab active
   */
  active?: boolean;

  /**
   * Is tab disabled
   */
  disabled?: boolean;
}

/**
 * Tab styles
 */
const TabContainer = styled.div<TabProps>`
  min-width: ${pxToRem(91)};
  max-width: ${pxToRem(91)};
  height: ${pxToRem(56)};
  display: flex;
  align-items: center;
  justify-content: center;
  // Transparent border to keep size from changing when adding bottom border
  border-bottom: 3px solid transparent;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.grayScale.digitalBlack100};
    border-bottom: 3px solid
      ${(props) => props.theme.colors.grayScale.digitalBlack400};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${(props) =>
        props.theme.colors.grayScale.digitalBlack200};
      border-bottom: 3px solid
        ${(props) => props.theme.colors.grayScale.digitalBlack};
    `};
`;

/**
 * Exported Tab component
 */
export const Tab = ({
  value,
  id,
  children,
  active,
    disabled,
  ...restprops
}: TabProps) => {
  const componentId = id ?? generateRandomString(5);
  return (
    <TabContainer value={value} disabled={disabled} id={componentId} active={active} {...restprops}>
      {children}
    </TabContainer>
  );
};

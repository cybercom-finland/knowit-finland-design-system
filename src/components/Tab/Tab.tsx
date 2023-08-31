import React from 'react';
import {
  ComponentBaseProps,
  generateRandomString,
  pxToRem,
} from '../../shared';
import styled, { css } from 'styled-components';
import { Button } from '../Button';

export interface TabProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Tabs value
   */
  value?: string;

  /**
   * Label
   */
  label?: string;

  /**
   * Icon
   */
  icon?: React.ReactNode;

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
const TabContainer = styled(Button)<TabProps>`
  height: ${pxToRem(56)};
  width: ${pxToRem(91)};
  justify-content: center;
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
  active,
  disabled,
  label,
  icon,
  ...restprops
}: TabProps) => {
  const componentId = id ?? generateRandomString(5);
  return (
    <TabContainer
      size='large'
      variant='text'
      value={value}
      disabled={disabled}
      id={componentId}
      active={active}
      {...restprops}
      label={label}
      endIcon={icon}
    ></TabContainer>
  );
};

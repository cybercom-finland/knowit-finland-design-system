import React from 'react';
import { ComponentBaseProps, generateRandomString } from '../../../shared';
import styled, { css } from 'styled-components';
import { Button, ButtonHTMLAttributes } from '../../Button';

export interface TabProps
  extends ComponentBaseProps<HTMLButtonElement>,
    ButtonHTMLAttributes {
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
   * Is tab selected
   */
  selected?: boolean;

  /**
   * Is tab disabled
   */
  disabled?: boolean;
}

/**
 * Tab styles
 */
const TabContainer = styled(Button)<TabProps>`
  justify-content: center;
  ${({ selected: active }) =>
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
export const Tab = React.forwardRef(
  (
    {
      value,
      id,
      selected: active,
      disabled,
      label,
      icon,
      ...restprops
    }: TabProps,
    ref: TabProps['ref']
  ) => {
    const componentId = id ?? generateRandomString(5);
    return (
      <TabContainer
        size='large'
        variant='text'
        value={value}
        disabled={disabled}
        id={componentId}
        selected={active}
        label={label}
        endIcon={icon}
        ref={ref}
        {...restprops}
      ></TabContainer>
    );
  }
);

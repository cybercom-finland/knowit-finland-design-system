import React from 'react';
import styled, { css } from 'styled-components';
import { ComponentBaseProps, spacing } from '../../shared';
import { MdOpenInNew } from 'react-icons/md';

/**
 * Link component properties
 * Extends html link attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes
 */
export interface LinkProps
  extends ComponentBaseProps<HTMLAnchorElement>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Text content
   */
  children?: React.ReactNode;

  /**
   * Optional icon after the text
   */
  endIcon?: React.ReactNode;

  /**
   * Optional href
   */
  href?: string;
}

/**
 * Link inner component to wrap styles
 */
const InnerLink = styled.a<LinkProps>`
  display: inline-flex;
  text-decoration: underline;
  gap: ${spacing(1)};
  cursor: pointer;
  color: ${(props) => props.theme.colors.info.info};
  &:hover {
    color: ${(props) => props.theme.colors.info.info800};
  }
`;

/**
 * Link component
 * @param props Link props
 * @returns Link component
 */
export const Link = ({ endIcon, children, ...restProps }: LinkProps) => {
  return (
    <InnerLink {...restProps}>
      {children}
      {endIcon}
    </InnerLink>
  );
};

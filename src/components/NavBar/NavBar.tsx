import React from 'react';
import {
  ComponentBaseProps,
  generateRandomString,
  pxToRem,
  Size,
} from '../../shared';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';

export interface NavBarProps extends ComponentBaseProps<HTMLElement> {
  /**
   * Navbar size
   */
  size?: Exclude<Size, 'large'>;

  /**
   * Children
   */
  children?: React.ReactNode;

  /**
   * Logo
   */
  logo?: React.ReactNode;

  /**
   * Menu
   */
  menu?: React.ReactNode;
}

const navBarDimensions = {
  small: {
    height: pxToRem(64),
  },
  medium: {
    height: pxToRem(80),
  },
};

const calculateSizes = () => {
  return css`
    ${variant({
      prop: 'size',
      variants: {
        small: {
          height: navBarDimensions.small.height,
        },
        medium: {
          height: navBarDimensions.medium.height,
        },
      },
    })};
  `;
};

/**
 * Navbar component styling
 * Pop out size property
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledNavBar = styled(({ size, ...restProps }: NavBarProps) => (
  <nav {...restProps} />
))`
  ${calculateSizes};
  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack100};
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  align-items: center;
`;

/**
 * Navbar logo/brand styling
 */
const NavLogo = styled.div<NavBarProps>`
  margin-left: ${pxToRem(16)};
`;

/**
 * Navbar menu button styling
 */
const NavMenu = styled.div<NavBarProps>`
  margin-right: ${pxToRem(16)};
`;

export const NavBar = React.forwardRef(
  (
    { id, size = 'small', children, menu, logo, ...restProps }: NavBarProps,
    ref: NavBarProps['ref']
  ) => {
    // Use ID form props or create randomized string
    const componentId = id ?? generateRandomString(5);

    return (
      <StyledNavBar size={size} ref={ref} {...restProps} id={componentId}>
        <NavLogo>{logo}</NavLogo>
        {children}
        <NavMenu>{menu}</NavMenu>
      </StyledNavBar>
    );
  }
);

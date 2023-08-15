import React, { useState } from 'react';
import { generateRandomString, pxToRem, Size } from '../../shared';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { MdMenu } from 'react-icons/md';

export interface NavBarProps {
  /**
   * Id
   */
  id?: string;
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

const Bar = styled.nav<NavBarProps>`
  ${calculateSizes};
  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack100};
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  align-items: center;
`;
const NavLogo = styled.div<NavBarProps>`
  margin-left: ${pxToRem(16)};
`;
const NavBarMenu = styled.span<NavBarProps>`
  margin-right: ${pxToRem(16)};
  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(20)};
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  cursor: pointer;
  color: ${(props) => props.theme.colors.grayScale.digitalBlack900};
`;
export const NavBar = ({
  id,
  size = 'small',
  children,
  menu,
  logo,
  ...restProps
}: NavBarProps) => {
  // Use ID form props or create randomized string
  const componentId = id ?? generateRandomString(5);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Bar size={size} {...restProps} id={componentId}>
      <NavLogo id={componentId}>{logo}</NavLogo>
      {children}
      {menu ? (
        <NavBarMenu onClick={() => setShowMenu(!showMenu)}>
          <MdMenu />
          {showMenu && menu}
        </NavBarMenu>
      ) : null}
    </Bar>
  );
};

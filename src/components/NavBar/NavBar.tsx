import React, { useState } from 'react';
import { generateRandomString, pxToRem, Size } from '../../shared';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { GiHamburgerMenu } from 'react-icons/gi';

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
  children?: React.ReactElement;
}

export interface NavBarChildProps {
  /**
   * Id
   */
  id?: string;
  /**
   * Children
   */
  children?: React.ReactElement;
}

const calculateSizes = () => {
  return css`
    ${variant({
      prop: 'size',
      variants: {
        small: {
          height: `${pxToRem(64)}`,
        },
        medium: {
          height: `${pxToRem(80)}`,
        },
      },
    })};
  `;
};

const Bar = styled.nav<NavBarProps>`
  font-size: 18px;
  ${calculateSizes};
  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack100};

  @media (min-width: 768px) {
    ${calculateSizes};
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    align-items: center;
  }
`;
const NavBrand = styled.div<NavBarChildProps>`
  margin-left: ${pxToRem(16)};
`;
const NavBarToggle = styled.span`
  margin-right: ${pxToRem(16)};
  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(20)};
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  cursor: pointer;
  color: #18090e;
  
`;
const ToggleItemsContainer = styled.div`
`
export const NavBar = ({
  id,
  size = 'small',
  children,
  ...restProps
}: NavBarProps) => {
  // Use ID form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return (
    <Bar size={size} {...restProps} id={componentId}>
      {children}
    </Bar>
  );
};
const Brand = ({ id, children, ...restProps }: NavBarChildProps) => {
  const componentId = id ?? generateRandomString(5);
  return (
    <NavBrand id={componentId} {...restProps}>
      {children}
    </NavBrand>
  );
};
NavBar.Brand = Brand;

const Toggle = ({ id, children, ...restProps }: NavBarChildProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const componentId = id ?? generateRandomString(5);
  return (
    <NavBarToggle
      id={componentId}
      {...restProps}
      onClick={() => setShowMenu(!showMenu)}
    >
      <GiHamburgerMenu />
      <ToggleItemsContainer>
        {showMenu && children}
      </ToggleItemsContainer>
    </NavBarToggle>
  );
};
NavBar.Toggle = Toggle;

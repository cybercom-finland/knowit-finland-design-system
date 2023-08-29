import React from 'react';
import {
  ComponentBaseProps,
  generateRandomString,
  pxToRem,
  typography,
} from '../../shared';
import styled from 'styled-components';

export interface BreadcrumbProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Children
   */
  children?: React.ReactNode;

  /**
   * Home link
   */
  homeLink?: React.ReactNode;
}

/**
 * Wrapper for breadcrumb component
 */
const BreadcrumbWrapper = styled.ol<BreadcrumbProps>`
  display: inline-flex;
  align-items: center;
  list-style-type: none;
  font-size: ${typography.size.paragraph2};
`;

/**
 * Wrapper for breadcrumb spacer
 */
const BreadcrumbSpacer = styled.p<BreadcrumbProps>`
  margin: auto ${pxToRem(8)} auto ${pxToRem(8)};
`;

/**
 * Wrapper for breadcrumb home icon/link
 */
const HomeLinkWrapper = styled.li<BreadcrumbProps>`
  display: flex;
  margin-right: ${pxToRem(8)};
`;

/**
 * Exported breadcrumbs component
 */
export const Breadcrumb = ({
  id,
  children,
  homeLink,
  ...restProps
}: BreadcrumbProps) => {
  const componentId = id ?? generateRandomString(5);
  const renderChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    const elementChild: React.ReactElement = child;
    return (
      <>
        <li style={{ display: 'flex' }}>{elementChild}</li>
        {index < React.Children.count(children) - 1 && (
          <BreadcrumbSpacer aria-hidden> / </BreadcrumbSpacer>
        )}
      </>
    );
  });
  return (
    <BreadcrumbWrapper id={componentId} {...restProps}>
      {homeLink && <HomeLinkWrapper>{homeLink}</HomeLinkWrapper>}
      {renderChildren}
    </BreadcrumbWrapper>
  );
};

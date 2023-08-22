import React from 'react';
import {
  ComponentBaseProps,
  generateRandomString,
  pxToRem,
} from '../../shared';
import styled from 'styled-components';

export interface SidebarProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Header icon
   */
  headerContent?: React.ReactNode;

  /**
   * Sidebar Content
   */
  sidebarContent?: React.ReactNode;

  /**
   * Show overlay
   */
  overlay?: boolean;
}

/**
 * Sidebar dimensions
 */
const sidebarDimensions = {
  // Body width
  bodyWidth: 400,
  // Header height
  headerHeight: 24,
  // Header and content container width
  contentWidth: 368,
};

/**
 * Sidebar and overlay
 */
const SidebarWrapper = styled.div<SidebarProps>`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

/**
 * Sidebar overlay
 */
const SidebarOverlay = styled.div<SidebarProps>`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.82);
`;

/**
 * Wrapper for sidebar
 */
const SidebarBody = styled.div<SidebarProps>`
  width: ${pxToRem(sidebarDimensions.bodyWidth)};
  height: 100%;
  background-color: ${(props) => props.theme.colors.neutral};
  border-left: 1px solid
    ${(props) => props.theme.colors.grayScale.digitalBlack200};
  ${(props) => props.theme.styles.dropshadow};
`;

/**
 * Wrapper for sidebar header
 */
const SidebarHeader = styled.div<SidebarProps>`
  width: ${pxToRem(sidebarDimensions.contentWidth)};
  height: ${pxToRem(sidebarDimensions.headerHeight)};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: ${pxToRem(16)};
`;

/**
 * Wrapper for content inside sidebar
 */
const SidebarContentWrapper = styled.div<SidebarProps>`
  width: ${pxToRem(sidebarDimensions.contentWidth)};
  display: flex;
  // Calculated height for content container with removed margins and height of header
  height: calc(100% - ${pxToRem(48 + sidebarDimensions.headerHeight)});
  // Shorthand top right bottom left
  margin: 0 ${pxToRem(16)} ${pxToRem(16)} ${pxToRem(16)};
`;

/**
 * Exported sidebar component
 */
export const Sidebar = ({
  id,
  headerContent,
  sidebarContent,
  overlay,
  ...restProps
}: SidebarProps) => {
  const componentId = id ?? generateRandomString(5);

  return (
    <SidebarWrapper id={componentId} {...restProps}>
      {overlay && <SidebarOverlay />}
      <SidebarBody>
        <SidebarHeader>{headerContent}</SidebarHeader>
        <SidebarContentWrapper>{sidebarContent}</SidebarContentWrapper>
      </SidebarBody>
    </SidebarWrapper>
  );
};

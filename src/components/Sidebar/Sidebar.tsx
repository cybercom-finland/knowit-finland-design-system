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
   * Sidebar Slot
   */
  sidebarContent?: React.ReactNode;
  /**
   * Show overlay
   */
  overlay?: boolean;
}
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
  background-color: black;
`;
/**
 * Wrapper for sidebar
 */
const SidebarBody = styled.div<SidebarProps>`
  width: ${pxToRem(400)};
  height: 100%;
  background-color: ${(props) => props.theme.colors.neutral};
`;
/**
 * Wrapper for sidebar header
 */
const SidebarHeader = styled.div<SidebarProps>`
  width: ${pxToRem(368)};
  height: ${pxToRem(24)};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: ${pxToRem(16)};
`;
/**
 * Wrapper for content inside sidebar
 */
const SidebarSlotWrapper = styled.div<SidebarProps>`
  width: ${pxToRem(368)};
  display: flex;
  // Calculated height for slot content container with removed margins and height of header
  height: calc(100% - ${pxToRem(72)});
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
        <SidebarSlotWrapper>{sidebarContent}</SidebarSlotWrapper>
      </SidebarBody>
    </SidebarWrapper>
  );
};

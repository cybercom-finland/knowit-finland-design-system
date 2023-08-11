import React from 'react';
import { pxToRem } from '../../../shared';
import styled from 'styled-components';
import { DialogProps } from '../Dialog/Dialog';

/**
 * Dimensions of dialog header component
 */
const dialogHeaderDimensions = {
  padding: `${pxToRem(24)} ${pxToRem(32)} ${pxToRem(55)} ${pxToRem(16)}`,
  gap: pxToRem(20),
};

const InnerDialogFooter = styled.div`
  background: ${(props) => props.theme.colors.grayScale.digitalBlack100};
  padding: ${dialogHeaderDimensions.padding};
  display: flex;
  justify-content: right;
  gap: ${dialogHeaderDimensions.gap};
`;

export const DialogFooter = ({ children }: DialogProps) => {
  return <InnerDialogFooter>{children}</InnerDialogFooter>;
};

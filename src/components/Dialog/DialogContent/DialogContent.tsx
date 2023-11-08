import React from 'react';
import { pxToRem } from '../../../shared';
import styled from 'styled-components';
import { DialogProps } from '../Dialog';

/**
 * Dimensions of dialog content component
 */
const dialogContentDimensions = {
  padding: pxToRem(32),
};

const InnerDialogContent = styled.div`
  padding: ${dialogContentDimensions.padding};
`;

export const DialogContent = ({ children }: DialogProps) => {
  return <InnerDialogContent>{children}</InnerDialogContent>;
};

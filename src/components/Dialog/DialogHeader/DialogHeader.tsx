import React from 'react';
import { pxToRem } from '../../../shared';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { IconButton } from '../../IconButton';
import { DialogProps } from '../Dialog/Dialog';

/**
 * Dimensions of dialog header component
 */
const dialogHeaderDimensions = {
  padding: pxToRem(32),
  borderBottom: pxToRem(2),
};

const DialogHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${dialogHeaderDimensions.borderBottom} solid
    ${(props) => props.theme.colors.grayScale.digitalBlack100};
  padding: ${dialogHeaderDimensions.padding};
`;

export const DialogHeader = ({ children, ...restProps }: DialogProps) => {
  return <DialogHeaderWrapper {...restProps}>{children}</DialogHeaderWrapper>;
};

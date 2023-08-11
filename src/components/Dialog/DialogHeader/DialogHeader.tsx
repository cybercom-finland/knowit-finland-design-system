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
};

const DialogHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${pxToRem(2)} solid
    ${(props) => props.theme.colors.grayScale.digitalBlack100};
  padding: ${dialogHeaderDimensions.padding};
`;

export const DialogHeader = ({ children }: DialogProps) => {
  return (
    <DialogHeaderWrapper>
      <div>{children}</div>
      <IconButton size={'large'}>
        <MdClose />
      </IconButton>
    </DialogHeaderWrapper>
  );
};

import React from 'react';
import { pxToRem } from '../../../shared';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { IconButton } from '../../IconButton';
import { DialogProps } from '../Dialog/Dialog';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${pxToRem(2)} solid
    ${(props) => props.theme.colors.grayScale.digitalBlack100};
  padding: ${pxToRem(32)};
  gap: ${pxToRem(32)};
`;

export const DialogHeader = ({ children }: DialogProps) => {
  return (
    <Wrapper>
      <div>{children}</div>
      <IconButton>
        <MdClose />
      </IconButton>
    </Wrapper>
  );
};

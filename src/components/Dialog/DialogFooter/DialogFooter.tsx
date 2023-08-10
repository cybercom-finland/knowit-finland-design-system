import React from 'react';
import { pxToRem } from '../../../shared';
import styled from 'styled-components';
import { DialogProps } from '../Dialog/Dialog';

const NativeDialogFooter = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.grayScale.digitalBlack100};
  padding: ${pxToRem(24)} ${pxToRem(32)} ${pxToRem(55)} ${pxToRem(16)};
  justify-content: right;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  gap: ${pxToRem(20)};
`;

export const DialogFooter = ({ children }: DialogProps) => {
  return (
    <NativeDialogFooter>
      <Wrapper>{children}</Wrapper>
    </NativeDialogFooter>
  );
};

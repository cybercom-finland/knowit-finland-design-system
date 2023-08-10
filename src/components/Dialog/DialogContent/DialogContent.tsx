import React from 'react';
import { pxToRem } from '../../../shared';
import styled from 'styled-components';
import { DialogProps } from '../Dialog/Dialog';

const ModalContent = styled.div`
  padding: ${pxToRem(32)};
  gap: ${pxToRem(32)};
`;

export const DialogContent = ({ children }: DialogProps) => {
  return <ModalContent>{children}</ModalContent>;
};

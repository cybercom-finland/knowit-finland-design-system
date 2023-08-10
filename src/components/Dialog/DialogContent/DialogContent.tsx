import React from 'react';
import { pxToRem } from '../../../shared';
import styled from 'styled-components';
import { DialogProps } from '../Dialog/Dialog';

const NativeModalContent = ({ children, ...passProps }: DialogProps) => {
  return <div {...passProps}>{children}</div>;
};

const ModalContent = styled(NativeModalContent)`
  padding: ${pxToRem(32)};
  gap: ${pxToRem(32)};
`;

export const DialogContent = ({ children }: DialogProps) => {
  return <ModalContent>{children}</ModalContent>;
};

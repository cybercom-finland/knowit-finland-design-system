import React from 'react';
import { generateRandomString, pxToRem } from '../../../shared';
import styled from 'styled-components';
import { DialogProps } from '../Dialog/Dialog';

const NativeModalContent = ({ children, ...passProps }: DialogProps) => {
  return <div {...passProps}>{children}</div>;
};

const ModalContent = styled(NativeModalContent)`
  padding: ${pxToRem(32)};
  gap: ${pxToRem(32)};
`;

export const DialogContent = ({ id, children }: DialogProps) => {
  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return <ModalContent id={componentId}>{children}</ModalContent>;
};

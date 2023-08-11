import React from 'react';
import { HTMLProps } from 'react';

export type DialogProps = HTMLProps<HTMLDivElement>;

export const Dialog = ({ children }: DialogProps) => {
  return <div role={'dialog'}>{children}</div>;
};

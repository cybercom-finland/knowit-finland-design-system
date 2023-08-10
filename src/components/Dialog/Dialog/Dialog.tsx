import { HTMLProps } from 'react';

export type DialogProps = Omit<HTMLProps<HTMLDivElement>, 'ref' | 'as'>;

export const Dialog = ({ children }: DialogProps) => {
  return children;
};

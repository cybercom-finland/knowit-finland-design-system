import { HTMLProps } from 'react';

export type DialogProps = Omit<HTMLProps<HTMLDivElement>, 'ref' | 'as'>;

const Dialog = ({ children }: DialogProps) => {
  return children;
};

export { Dialog };

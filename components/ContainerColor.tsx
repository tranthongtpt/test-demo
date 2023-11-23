import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function ColorContainer({ children }: Props) {
  return <div className="bg-[#D01F1B]">{children}</div>;
}

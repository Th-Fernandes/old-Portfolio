import type { ReactNode } from 'react';
import { GradientButtonContainer } from './styles';

interface Props {
  children: ReactNode;
  width?: { mobile: string; desktop: string };
}

export function GradientButton({ children, width }: Props) {
  return (
    <GradientButtonContainer width={width}>
      {children}
    </GradientButtonContainer>
  );
}

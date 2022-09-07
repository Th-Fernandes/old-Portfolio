import type { ReactNode } from 'react';
import { GradientButtonContainer } from './styles';

interface Props {
  children: ReactNode;
  borderGradient: 'purple' | 'pink';
}

export function GradientButton({ children, borderGradient }: Props) {
  console.log(borderGradient);
  return (
    <GradientButtonContainer borderGradient={borderGradient}>
      {children}
    </GradientButtonContainer>
  );
}

import type { ReactNode } from 'react';
import { GradientButtonContainer } from './styles';

interface Props {
  children: ReactNode;
  borderGradient: 'purple' | 'pink';
  width?: { mobile: string; desktop: string };
}

export function GradientButton({ children, borderGradient, width }: Props) {
  console.log(borderGradient);
  return (
    <GradientButtonContainer borderGradient={borderGradient} width={width}>
      {children}
    </GradientButtonContainer>
  );
}

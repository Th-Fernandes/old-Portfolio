import { ReactNode } from "react";
import { TechsContainer } from "./styles"

interface Props {
  title: string;
  children: ReactNode,
  gridColumnsSize: number,
}

export function Techs({title, children, gridColumnsSize}: Props) {
  return (
    <TechsContainer gridColumnsSize={gridColumnsSize}>
      <h2>{title}</h2>

      {children}
    </TechsContainer>
  )
}
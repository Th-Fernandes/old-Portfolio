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
      <h2 className="techs-title">{title}</h2>

      <div className="techs-img-container">
        {children}
      </div>
    </TechsContainer>
  )
}
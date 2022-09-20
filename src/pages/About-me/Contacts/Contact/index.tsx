import { ReactNode } from "react"
import { ContactContainer } from "./styles"

interface Props {
  children: ReactNode,
}

export function Contact({children}: Props) {
  return (
    <ContactContainer>
      {children}
    </ContactContainer>
  )
}
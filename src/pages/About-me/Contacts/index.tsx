import { DeviceMobile, EnvelopeSimple } from "phosphor-react";
import { Contact } from "./Contact";

export function Contacts() {
  return (
    <div>
      <h2>Entre em contanto</h2>

      <Contact>
        <DeviceMobile size={48} color="#ffffff"  />
        <a href="tel:21996518546">
          <span>(21) 99651-8546</span>
        </a>
      </Contact>

      <Contact>
        <EnvelopeSimple size={48} color="#ffffff" /> 
        <a href="mailto:thiagojfcarvalho@gmail.com">
          <span>thiagojfcarvalho@gmail.com</span>
        </a>
      </Contact>
    </div>
  )
}
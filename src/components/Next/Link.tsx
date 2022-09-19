import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  download?: true;
}

export function NextLink({ children, href, download }: Props) {
  return (
    <Link href={href} >
      <a target="blank" download={download}>{children}</a>
    </Link>
  );
}

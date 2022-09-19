import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  download?: true;
  title?: string;
  target?: "blank"
}

export function NextLink({ children, href, target, download, title }: Props) {
  return (
    <Link href={href} >
      <a 
        target={target} 
        download={download} 
        title={title}>
          {children}
      </a>
    </Link>
  );
}

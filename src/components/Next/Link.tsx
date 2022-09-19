import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  download?: true;
  title?: string;
}

export function NextLink({ children, href, download, title }: Props) {
  return (
    <Link href={href} >
      <a target="blank" download={download} title={title}>{children}</a>
    </Link>
  );
}

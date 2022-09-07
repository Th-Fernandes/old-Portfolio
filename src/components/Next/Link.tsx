import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
}

export function NextLink({ children, href }: Props) {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
}

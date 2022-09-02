import Link from "next/link";

export function NextLink({children, href}:any) {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
} 
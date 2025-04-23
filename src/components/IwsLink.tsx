import Link from 'next/link'

export interface Props {
  href: string
  className?: string
  children?: any
  onClick?: () => void
}

function IwsLink(props: Props) {
  const { href, className, children ,onClick} = props
  return (
    <Link href={href}>
      <a className={className} onClick={(e) => {
        if (onClick) {
          onClick();
        }
      }}>{children}</a>
    </Link>
  )
}

export default IwsLink

import Link from 'next/link'
import { ComponentProps } from 'react'

export interface Props {
  href: string
  className?: string
  children?: any
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void  // 修改这里的类型定义
  target?: string
  rel?: string
}

function IwsLink(props: Props) {
  const { href, className, children, onClick, target, rel } = props
  return (
    <Link href={href}>
      <a 
        className={className} 
        onClick={(e) => {
          if (onClick) {
            onClick(e);  // 传递事件对象
          }
        }}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    </Link>
  )
}

export default IwsLink
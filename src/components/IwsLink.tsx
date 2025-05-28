import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { log } from 'console';

export interface Props {
  href: string
  className?: string
  children?: any
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  target?: string
  rel?: string
}

function IwsLink(props: Props) {
  const { href, className, children, onClick, target, rel } = props;
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    const currentPath = router.asPath.split('#')[0];
    const currentHash = router.asPath.split('#')[1] || '';
    const targetPath = href.split('#')[0];
    const targetHash = href.split('#')[1] || '';
    
    if (currentPath === targetPath && currentHash === targetHash) {
      // 如果路由和哈希都没有变化，调用reload方法
      router.reload();
      console.log("1111");
      
    }else {
      // 如果路由或哈希变化，使用push方法
      router.push(href);
      console.log("2222");
      console.log("变化了");
    }
  };

  return (
    <Link href={href}>
      <a 
        className={className} 
        onClick={handleClick}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    </Link>
  );
}

export default IwsLink;
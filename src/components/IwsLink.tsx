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
      // 先滚动到顶部，然后重新加载页面
      window.scrollTo(0, 0);
      router.reload();
    }else {
      // 如果路由或哈希变化，使用push方法
      router.push(href);
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
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

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
    const isExternalLink = /^https?:\/\//.test(href); // 判断是否是外部链接
  
    if (isExternalLink) {
      // 外部链接直接打开
      window.open(href, target || '_blank', `noopener,noreferrer`);
    } else {
      // 内部路由链接处理
      const currentPath = router.asPath.split('#')[0];
      const currentHash = router.asPath.split('#')[1] || '';
      const targetPath = href.split('#')[0];
      const targetHash = href.split('#')[1] || '';
  
      // 特殊处理pricing页面的#other锚点链接
      if (currentPath === '/pricing' && targetPath === '/pricing' && targetHash === 'other') {
        // 只滚动到锚点位置，不刷新页面
        const element = document.getElementById('other');
        if (element) {
          const headerOffset = 60; // 头部导航的高度
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else if (currentPath === targetPath && currentHash === targetHash) {
        // 其他情况保持原有逻辑
        window.scrollTo(0, 0);
        router.reload();
      } else {
        router.push(href);
      }
    }
  };

  return (
    <Link href={href} className={className}
      onClick={handleClick}
      target={target}
      rel={rel}>
      {children}
    </Link>
  );
}

export default IwsLink;
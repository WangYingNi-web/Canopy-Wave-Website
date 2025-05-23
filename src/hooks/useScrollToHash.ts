import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useScrollToHash = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const headerOffset = 70; // 头部导航的高度
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 200);
      }
    };

    handleScroll();
    window.addEventListener('load', handleScroll);
    router.events.on('hashChangeComplete', handleScroll);

    return () => {
      window.removeEventListener('load', handleScroll);
      router.events.off('hashChangeComplete', handleScroll);
    };
  }, [router.events]);
};
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { log } from 'console';

export const useScrollToHash = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            let headerOffset = 50; // 默认头部导航的高度

            if (hash === '#H100' || hash === '#H200') {
              headerOffset = 100;
            }
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
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
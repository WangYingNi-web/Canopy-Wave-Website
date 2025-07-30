'use client';

import { useRouter } from 'next/router';

const FloatingButtons = () => {
    const router = useRouter();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goToContact = () => {
        router.push('/contact');
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '18px',
            right: '14px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        }}>
            {/* go_email - 跳转到联系页面 */}
            <img
                src="/go_email.svg"
                alt="Contact us"
                onClick={goToContact}
                style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    filter: 'drop-shadow(0 4px 8px rgba(122, 122, 122, 0.2))',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, filter 0.2s ease'
                }}
            />
            {/* go_top - 回到顶部 */}
            <img
                src="/go_top.svg"
                alt="Back to top"
                onClick={scrollToTop}
                style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    filter: 'drop-shadow(0 4px 8px rgba(122, 122, 122, 0.2))',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, filter 0.2s ease'
                }}
            />

        </div>
    );
};

export default FloatingButtons;
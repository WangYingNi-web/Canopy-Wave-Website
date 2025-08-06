import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const FloatingButtons = () => {
    const router = useRouter();
    const [showScrollTop, setShowScrollTop] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goToContact = () => {
        router.push('/contact');
    };

    // 监听滚动事件
    useEffect(() => {
        const handleScroll = () => {
            // 当滚动距离超过300px时显示回到顶部按钮
            // 这样可以避免在banner区域显示按钮
            const scrollY = window.scrollY;
            setShowScrollTop(scrollY > 300);
        };

        // 添加滚动事件监听器
        window.addEventListener('scroll', handleScroll);
        
        // 组件卸载时清理事件监听器
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            bottom: '100px',
            right: '16px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        }}>
            {/* go_top - 回到顶部，根据滚动位置条件显示 */}
            {showScrollTop && (
                <img
                    src="/go_top.svg"
                    alt="Back to top"
                    onClick={scrollToTop}
                    style={{
                        width: '73px',
                        height: '73px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        filter: 'drop-shadow(0 4px 8px rgba(122, 122, 122, 0.2))',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        opacity: 1,
                        transform: 'scale(1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                />
            )}
            {/* go_email - 跳转到联系页面 */}
            <img
                src="/go_email.svg"
                alt="Contact us"
                onClick={goToContact}
                style={{
                    width: '73px',
                    height: '73px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    filter: 'drop-shadow(0 4px 8px rgba(122, 122, 122, 0.2))',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, filter 0.2s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            />
            
        </div>
    );
};

export default FloatingButtons;
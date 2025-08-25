import React, { useState, useEffect, ReactNode, useRef } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import DocumentFeedback from '@/components/DocumentFeedback';

interface NavigationItem {
    id: string;
    label: string;
    href?: string;
    children?: NavigationItem[];
}

interface JumpToItem {
    id: string;
    label: string;
}

interface DocumentLayoutProps {
    title: string;
    description?: string;
    reviewDate?: string;
    downloadUrl?: string;
    leftNavItems: NavigationItem[];
    jumpToItems: JumpToItem[];
    children: ReactNode;
    pageTitle?: string;
}

const DocumentLayout: React.FC<DocumentLayoutProps> = ({
    title,
    description,
    reviewDate,
    downloadUrl,
    leftNavItems,
    jumpToItems,
    children,
    pageTitle
}) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
    const [activeSection, setActiveSection] = useState('');
    const [leftSidebarPosition, setLeftSidebarPosition] = useState('fixed');
    //   const [rightSidebarPosition, setRightSidebarPosition] = useState('fixed');
    const contentRef = useRef<HTMLDivElement>(null);
    const leftSidebarRef = useRef<HTMLDivElement>(null);
    const rightSidebarRef = useRef<HTMLDivElement>(null);
    const [sidebarPosition, setSidebarPosition] = useState('sticky');
    const [rightSidebarPosition, setRightSidebarPosition] = useState('sticky');
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = 64; // Header高度
            const extraOffset = 20;
            const totalOffset = headerHeight + extraOffset;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - totalOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    const toggleExpanded = (itemId: string) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(itemId)) {
            newExpanded.delete(itemId);
        } else {
            newExpanded.add(itemId);
        }
        setExpandedItems(newExpanded);
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const screenWidth = window.innerWidth;

            // 小屏幕下使用简单定位
            if (screenWidth < 1280) {
                setLeftSidebarPosition('sticky');
                setRightSidebarPosition('sticky');
                return;
            }

            // 获取关键元素
            const mainContentContainer = contentRef.current;
            const leftSidebar = leftSidebarRef.current;
            const rightSidebar = rightSidebarRef.current;
            const footerElement = document.querySelector('footer');

            if (!mainContentContainer || !leftSidebar || !rightSidebar || !footerElement) return;

            // 计算关键位置
            const headerHeight = 64;
            const mainContentRect = mainContentContainer.getBoundingClientRect();
            const mainContentTop = mainContentRect.top + scrollY;
            const mainContentBottom = mainContentRect.bottom + scrollY;
            const footerTop = footerElement.offsetTop;

            const leftSidebarHeight = leftSidebar.getBoundingClientRect().height;
            const rightSidebarHeight = rightSidebar.getBoundingClientRect().height;
            const windowHeight = window.innerHeight;
            const windowBottom = scrollY + windowHeight;

            // 计算距离屏幕底部的距离
            const documentHeight = document.documentElement.scrollHeight;
            const distanceToBottom = documentHeight - windowBottom;
            const bottomThreshold = 200; // 距离底部200px时切换

            // 判断左侧边栏是否会超出内容区域
            const leftWouldExceedBottom = scrollY + leftSidebarHeight + headerHeight > footerTop - bottomThreshold;
            const rightWouldExceedBottom = scrollY + rightSidebarHeight + headerHeight > footerTop - bottomThreshold;
            // 简化逻辑：只要距离底部小于等于200px就切换为absolute
            const shouldSwitchToAbsolute = distanceToBottom <= bottomThreshold;
            // 左侧边栏定位逻辑
            if (distanceToBottom < 100) {
                setLeftSidebarPosition('absolute');
            } else if (scrollY >= headerHeight) {
                setLeftSidebarPosition('fixed');
            } else {
                setLeftSidebarPosition('sticky');
            }

            // 右侧边栏定位逻辑
            if (distanceToBottom < 100) {
                setRightSidebarPosition('absolute');
            } else if (scrollY >= headerHeight) {
                setRightSidebarPosition('fixed');
            } else {
                setRightSidebarPosition('sticky');
            }

            // 章节高亮逻辑
            const sections = jumpToItems.map(item => {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return {
                        id: item.id,
                        top: rect.top
                    };
                }
                return null;
            }).filter(section => section !== null);

            let currentSection = '';
            const viewportTop = 120;

            for (const section of sections) {
                if (section!.top <= viewportTop) {
                    currentSection = section!.id;
                } else {
                    break;
                }
            }

            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection);
            }

            console.log('distanceToBottom:', distanceToBottom, 'shouldSwitch:', shouldSwitchToAbsolute);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        // 初始化
        setTimeout(() => {
            handleScroll();
        }, 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [jumpToItems, activeSection]);

    // 动态计算左侧边栏样式
    const getLeftSidebarStyles = () => {
        const baseClasses = 'lg:w-[340px] lg:max-h-[calc(100vh-150px)] lg:overflow-y-auto transition-all duration-300';

        switch (sidebarPosition) {
            case 'fixed':
                return `${baseClasses} lg:fixed lg:top-24 lg:z-10`;
            case 'absolute-bottom':
                return `${baseClasses} lg:absolute lg:bottom-0 lg:z-10`;
            case 'sticky':
            default:
                return `${baseClasses} lg:sticky lg:top-24`;
        }
    };

    // 动态计算右侧边栏样式
    const getRightSidebarStyles = () => {
        const baseClasses = 'lg:w-[358px] lg:max-h-[calc(100vh-150px)] lg:overflow-y-auto transition-all duration-300';

        switch (sidebarPosition) {
            case 'fixed':
                return `${baseClasses} lg:fixed lg:top-24 lg:z-10`;
            case 'absolute-bottom':
                return `${baseClasses} lg:absolute lg:bottom-0 lg:z-10`;
            case 'sticky':
            default:
                return `${baseClasses} lg:sticky lg:top-24`;
        }
    };
    console.log(sidebarPosition, "123123");


    // 渲染导航项的递归函数
    const renderNavItem = (item: NavigationItem, level: number = 0) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedItems.has(item.id);
        const paddingLeft = level * 12; // 每级缩进12px

        return (
            <li key={item.id}>
                <div className="flex items-center">
                    <a
                        href={item.href || '#'}
                        className={`flex-1 flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md`}
                        style={{ paddingLeft: `${12 + paddingLeft}px` }}
                    >
                        {item.label}
                    </a>
                    {hasChildren && (
                        <button
                            onClick={() => toggleExpanded(item.id)}
                            className="p-1 text-gray-400 hover:text-gray-600 mr-2"
                        >
                            <svg
                                className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-90' : ''
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    )}
                </div>
                {hasChildren && isExpanded && (
                    <ul className="space-y-1 mt-1">
                        {item.children!.map((child) => renderNavItem(child, level + 1))}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <main className="min-h-screen bg-[#F9F9F9] text-gray-800 relative">
            <Header />

            <div className="w-full flex" ref={contentRef}>
                {/* 左侧导航 */}
                <aside className={getLeftSidebarStyles()} ref={leftSidebarRef}>
                    <div className="p-2 pl-6">
                        <nav className="space-y-2">
                            <div className="mb-6">
                                {/* <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                                    Documentation
                                </h3> */}
                                <ul className="space-y-1">
                                    {leftNavItems.map((item) => renderNavItem(item))}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </aside>

                {/* 中间内容区域 */}
                <div className="flex-1 border-l border-gray-300 py-16">
                    <div className="w-full px-8 py-8 pt-12">
                        {/* 面包屑导航 */}
                        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                            <a href="/" className="hover:text-gray-700">Home</a>
                            <span>/</span>
                            <span className="hover:text-gray-700">Docs</span>
                            {/* <a href="/resources/docs/cw-cloud-account/quick-start" className="hover:text-gray-700">Docs</a> */}
                            <span>/</span>
                            <span className="text-gray-900">Quick Start</span>
                        </nav>
                        <div className="w-full h-[280px] relative mb-6">
                            <Image
                                src="/docs/quick-banner.png"
                                alt="banner"
                                fill
                                priority
                            />
                            <div className="absolute inset-0 z-10">
                                <div className="max-w-xl px-4 sm:px-6 lg:px-8 py-20 ">
                                    <SlideUp>
                                        <h1 className="text-4xl font-black text-[#222638] text-shadow-lg">
                                            Document Center
                                        </h1>
                                    </SlideUp>
                                    <SlideUp>
                                        <p className="text-gray-600 text-l mt-8">
                                            Recently Updated：Deploy an instance
                                        </p>
                                    </SlideUp>

                                </div>
                            </div>
                        </div>
                        {/* 文章标题 */}
                        <header className="mb-6">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                {title}
                            </h1>
                            <div className="flex items-center justify-between">
                                {reviewDate && (
                                    <p className="text-gray-600 text-sm">Reviewed on {reviewDate}</p>
                                )}
                                {downloadUrl && (
                                    <a href={downloadUrl} className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                                        download 📄
                                    </a>
                                )}
                            </div>
                        </header>

                        {/* 文章内容 */}
                        <article className="prose prose-lg max-w-none">
                            {description && (
                                <p className="text-l text-gray-700 mb-6">
                                    {description}
                                </p>
                            )}
                            {children}
                        </article>

                        {/* 导航按钮 */}
                        {/* <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
                            <button className="flex items-center text-gray-600 hover:text-gray-900">
                                ← Previous
                            </button>
                            <button className="flex items-center text-gray-600 hover:text-gray-900">
                                Next →
                            </button>
                        </div> */}

                        {/* 联系信息 */}
                        {/* <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-600">
                                If you have questions, please contact our support team at{' '}
                                <a href="mailto:support@canopywave.com" className="text-[#80B224] hover:text-green-800">
                                    support@canopywave.com
                                </a>
                                , and we will gladly get back to you!
                            </p>
                        </div> */}
                    </div>
                </div>

                {/* 右侧导航和反馈 */}
                <aside className={getRightSidebarStyles()} ref={rightSidebarRef}>
                    {/* Jump to 导航 */}
                    <div className="mb-8 mt-2">
                        <h3 className="text-l font-semibold text-gray-600 mb-4">Jump to</h3>
                        <ul className="space-y-3 pl-4 relative">
                            {/* 背景边线 - 加粗 */}
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                            {jumpToItems.map((item, index) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <li key={item.id} className="relative">
                                        {/* 当前激活项的绿色边线段 - 加粗 */}
                                        {isActive && (
                                            <div
                                                className="absolute left-[-16px] w-0.5 bg-[#80B224] transition-all duration-300"
                                                style={{
                                                    top: '0px',
                                                    height: '100%'
                                                }}
                                            ></div>
                                        )}
                                        <a
                                            href={`#${item.id}`}
                                            className={`text-sm block ${isActive
                                                ? 'text-[#80B224] hover:text-[#98c455]'
                                                : 'text-gray-600 hover:text-gray-900'
                                                }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToSection(item.id);
                                            }}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="mb-6 mr-6 pl-6 bg-gray-50 rounded-lg border border-1 border-gray-200">
                        {/* 使用 DocumentFeedback 组件 */}
                        {pageTitle && (
                            <div className="mt-6">
                                <DocumentFeedback pageTitle={pageTitle} />
                            </div>
                        )}

                        {/* Feedback 链接 */}
                        <div className="flex flex-col gap-3 py-6">
                            {/* <a href="#" className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium">
                                <span className="w-5 h-5 border-2 border-green-600 rounded flex items-center justify-center text-xs">✏️</span>
                                Feedback
                            </a> */}

                            <a href="/contact" className="flex items-center gap-2 text-sm text-[#80B224] hover:text-[#98c455] font-medium">
                                <Image src="/docs/contact.svg" alt="Security" width={24} height={24} />
                                Contact Us
                            </a>
                        </div>
                    </div>

                </aside>
            </div>

            <Footer />
        </main>
    );
};

export default DocumentLayout;
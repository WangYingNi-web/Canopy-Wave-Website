import React, { useState, useEffect, ReactNode, useRef } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import DocumentFeedback from '@/components/DocumentFeedback';
import { useRouter } from 'next/router';

interface NavigationItem {
    id: string;
    label: string | React.ReactNode;
    href?: string;
    children?: NavigationItem[];
    isDivider?: boolean; // 添加分隔线标识
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
    const router = useRouter();
    const getInitialExpandedItems = () => {
        const expanded = new Set<string>();
        const addExpandedItems = (items: NavigationItem[]) => {
            items.forEach(item => {
                if (item.children && item.children.length > 0) {
                    expanded.add(item.id);
                    // 递归处理嵌套的子项
                    addExpandedItems(item.children);
                }
            });
        };
        addExpandedItems(leftNavItems);
        return expanded;
    };
    const [expandedItems, setExpandedItems] = useState<Set<string>>(getInitialExpandedItems());
    const [activeSection, setActiveSection] = useState('');
    const contentRef = useRef<HTMLDivElement>(null);
    const leftSidebarRef = useRef<HTMLDivElement>(null);
    const rightSidebarRef = useRef<HTMLDivElement>(null);
    const [sidebarPosition, setSidebarPosition] = useState('sticky');
    const [rightSidebarPosition, setRightSidebarPosition] = useState('sticky');
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = 0;
            const extraOffset = 20;
            const rightSidebar = rightSidebarRef.current;

            // 获取右侧边栏高度
            const sidebarHeight = rightSidebar ? rightSidebar.getBoundingClientRect().height : 0;
            const viewportHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // 计算元素位置
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            let offsetPosition = elementPosition - headerHeight - extraOffset;

            // 如果滚动到这个位置会让右侧边栏超出视线，则调整偏移量
            const maxScrollPosition = documentHeight - viewportHeight;
            const sidebarBottomPosition = offsetPosition + sidebarHeight + headerHeight + extraOffset;

            // 如果边栏底部会超出文档底部，调整滚动位置
            if (sidebarBottomPosition > documentHeight) {
                offsetPosition = Math.max(0, documentHeight - viewportHeight - 50); // 留50px缓冲
            }

            // 确保不会滚动超过最大位置
            offsetPosition = Math.min(offsetPosition, maxScrollPosition);

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
                setSidebarPosition('sticky');
                setRightSidebarPosition('sticky');
                return;
            }

            // 简化的定位逻辑：滚动150px后从fixed变为sticky
            if (scrollY > 110) {
                setSidebarPosition('sticky');
                setRightSidebarPosition('sticky');
            } else {
                setSidebarPosition('fixed');
                setRightSidebarPosition('fixed');
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
        const baseClasses = 'lg:w-[280px] lg:max-h-[calc(100vh-250px)] lg:overflow-y-auto transition-all duration-300';

        switch (sidebarPosition) {
            case 'fixed':
                return `${baseClasses} lg:sticky lg:top-24 lg:left-0 lg:z-10`;
            case 'sticky':
            default:
                return `${baseClasses} lg:sticky lg:top-2`;
        }
    };

    // 动态计算右侧边栏样式
    const getRightSidebarStyles = () => {
        const baseClasses = 'lg:w-[290px] lg:max-h-[calc(100vh-250px)] lg:overflow-y-auto transition-all duration-300';

        switch (rightSidebarPosition) {
            case 'fixed':
                return `${baseClasses} lg:sticky lg:top-24 lg:right-0 lg:z-10`;
            case 'sticky':
            default:
                return `${baseClasses} lg:sticky lg:top-2`;
        }
    };


    // 渲染导航项的递归函数
    const renderNavItem = (item: NavigationItem, level: number = 0) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedItems.has(item.id);
        const paddingLeft = level * 12;
        const isCurrentRoute = item.href === router.pathname;
        if (item.isDivider) {
            return (
                <li key={item.id} className="my-3 pl-0">
                    <hr className="border-gray-300" />
                </li>
            );

        }
        return (
            <li key={item.id}>
                <div className="flex items-center">
                    <a
                        href={item.href || '#'}
                        className={`flex-1 flex items-center px-3 py-2 text-sm rounded-md ${isCurrentRoute
                            ? 'text-[#80B224]'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
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
                    <nav className="space-y-2">
                        <div className="mb-6">
                            {/* <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Documentation
            </h3> */}
                            <ul className="space-y-1">
                                {leftNavItems.map((item) =>
                                    item.isDivider ? (
                                        renderNavItem(item)
                                    ) : (
                                        <div key={`wrapper-${item.id}`} className="p-1 pl-4">
                                            {renderNavItem(item)}
                                        </div>
                                    )
                                )}
                            </ul>
                        </div>
                    </nav>
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
                        <div className="w-full relative mb-6 rounded-lg overflow-hidden">
                            <Image
                                src="/docs/quick-banner.png"
                                alt="banner"
                                width={1500}
                                height={289}
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* 文章标题 */}
                        <header className="mb-6">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                {title}
                            </h1>
                            <div className="flex items-center justify-between mb-10">
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
                        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
                            <button className="flex items-center text-gray-600 hover:text-gray-900">
                                ← Previous
                            </button>
                            <button className="flex items-center text-gray-600 hover:text-gray-900">
                                Next →
                            </button>
                        </div>

                        {/* 联系信息 */}
                        <div className="bg-[#F0F0F0] p-4 mt-10">
                            <div className="flex">
                                <div className="ml-3">
                                    <p className="text-sm text-gray-700">
                                      If you encounter any issues, contact our support team at <a href="mailto:support@canopywave.com" className="text-[#80B224] hover:text-[#98c455]">support@canopywave.com</a>. We provide 24/7 assistance.
                                    </p>
                                    <p className="text-sm text-gray-700 mt-2">
                                        Get started now: Launch your H100 and H200 instances by clicking: <a href="https://cloud.canopywave.io/" className="text-[#80B224] hover:text-[#98c455] underline" target="_blank" rel="noopener noreferrer">https://cloud.canopywave.io/</a>
                                    </p>
                                </div>
                            </div>
                        </div>
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
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
    breadcrumb: string;
    description?: string;
    reviewDate?: string;
    downloadUrl?: string;
    leftNavItems: NavigationItem[];
    jumpToItems: JumpToItem[];
    children: ReactNode;
    pageTitle?: string;
    bannerImage?: string;
    previousPage?: { title: string; href: string }; // 新增
    nextPage?: { title: string; href: string }; // 新增
}

const DocumentLayout: React.FC<DocumentLayoutProps> = ({
    title,
    breadcrumb,
    description,
    reviewDate,
    downloadUrl,
    leftNavItems,
    jumpToItems,
    children,
    pageTitle,
    bannerImage,
    previousPage,
    nextPage,
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
    const [isMobile, setIsMobile] = useState(false);
    const [showMobileLeftNav, setShowMobileLeftNav] = useState(false);
    const menuButtonRef = useRef<HTMLDivElement>(null);
    const [isMenuSticky, setIsMenuSticky] = useState(false);

    // 添加反馈弹窗状态管理
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [feedbackType, setFeedbackType] = useState('');
    const [feedbackDescription, setFeedbackDescription] = useState('');
    const [feedbackName, setFeedbackName] = useState('');
    const [feedbackEmail, setFeedbackEmail] = useState('');

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'success' | 'error'>('success');
    const [loading, setLoading] = useState(false);

    // 检测屏幕尺寸
    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth < 1024; // lg breakpoint
            setIsMobile(mobile);
            if (!mobile) {
                setShowMobileLeftNav(false);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // 处理反馈提交
    const handleFeedbackSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 表单验证 - 检查每个字段并给出具体提示
        if (!feedbackType) {
            setToastMessage('Please complete this required field.');
            setToastType('error');
            setShowToast(true);
            return;
        }

        // if (!feedbackName) {
        //     setToastMessage('Please complete this required field.');
        //     setToastType('error');
        //     setShowToast(true);
        //     return;
        // }

        if (!feedbackEmail) {
            setToastMessage('Please complete this required field.');
            setToastType('error');
            setShowToast(true);
            return;
        }

        if (!feedbackDescription) {
            setToastMessage('Please complete this required field.');
            setToastType('error');
            setShowToast(true);
            return;
        }

        // 邮箱格式验证
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(feedbackEmail)) {
            setToastMessage('Please enter a valid email address.');
            setToastType('error');
            setShowToast(true);
            return;
        }
        setLoading(true);
        try {
            // 准备发送的数据
            const emailData = {
                recipients: ['Lumi.Xiao@canopywave.com', 'sales@canopywave.com'],
                // recipients: ['wangyingni@canopywave.com'],
                subject: `Documentation Feedback: ${feedbackType}`,
                body: `
                    Documentation Feedback
                    submitted from: ${window.location.href}
                    Feedback Type: ${feedbackType}
                    Name: ${feedbackName}
                    Email: ${feedbackEmail}
                    Description:
                    ${feedbackDescription.replace(/\n/g, '<br>')}
                    This feedback was submitted from the documentation page: ${window.location.href}
                `,
                from: feedbackEmail
            };

            // 发送API请求
            const response = await fetch('https://sequoia-paas.canopywave.io/api/v1/send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer alsfkjalsdkfjldksjfalksdjfljk13123'
                },
                body: JSON.stringify(emailData)
            });

            if (response.ok) {
                // 成功提交
                setToastMessage('Thank you for your feedback! We have received your message and will review it shortly.');
                setToastType('success');
                setShowToast(true);

                // 重置表单并关闭弹窗
                setFeedbackType('');
                setFeedbackDescription('');
                setFeedbackName('');
                setFeedbackEmail('');
                setShowFeedbackModal(false);
            } else {
                // API返回错误
                const errorData = await response.text();
                console.error('API Error:', errorData);
                setToastMessage('Sorry, there was an error sending your feedback. Please try again later or contact us directly.');
                setToastType('error');
                setShowToast(true);
            }
        } catch (error) {
            // 网络错误或其他异常
            console.error('Network Error:', error);
            setToastMessage('Sorry, there was a network error. Please check your connection and try again.');
            setToastType('error');
            setShowToast(true);
        } finally {
            // 无论成功还是失败，都要重置loading状态
            setLoading(false);
        }
    };

    // Toast自动隐藏
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 5000); // 5秒后自动隐藏
            return () => clearTimeout(timer);
        }
    }, [showToast]);

// ... existing code ...
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        // 修正header高度计算
        const headerHeight = 84; // 正确的header高度：64px + 16px + 4px
        const extraOffset = 20;  // 额外偏移量

        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - extraOffset;

        window.scrollTo({
            top: Math.max(0, offsetPosition), // 确保不会滚动到负数位置
            behavior: 'smooth'
        });
    }
};
// ... existing code ...
    const toggleExpanded = (itemId: string) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(itemId)) {
            newExpanded.delete(itemId);
        } else {
            newExpanded.add(itemId);
        }
        setExpandedItems(newExpanded);
    };
    // 关闭弹窗时重置表单
    const handleCloseModal = () => {
        setShowFeedbackModal(false);
        setFeedbackType('');
        setFeedbackDescription('');
        setFeedbackName('');
        setFeedbackEmail('');
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

            // 桌面端定位逻辑
            const mainContentContainer = contentRef.current;
            const leftSidebar = leftSidebarRef.current;
            const rightSidebar = rightSidebarRef.current;

            if (!mainContentContainer || !leftSidebar || !rightSidebar) return;

            const mainContentRect = mainContentContainer.getBoundingClientRect();
            const mainContentBottom = mainContentRect.bottom + scrollY;
            const leftSidebarHeight = leftSidebar.getBoundingClientRect().height;
            const rightSidebarHeight = rightSidebar.getBoundingClientRect().height;
            const windowHeight = window.innerHeight;
            const windowBottom = scrollY + windowHeight;

            // 简化的定位逻辑：只在需要时使用 fixed，其他时候用 sticky
            const leftDistanceToBottom = mainContentBottom - windowBottom;
            const leftWouldExceedBottom = scrollY + leftSidebarHeight + 100 > mainContentBottom;

            if (leftWouldExceedBottom && leftDistanceToBottom < 300) {
                setSidebarPosition('sticky'); // 使用 sticky 而不是 absolute-bottom
            } else if (scrollY > 150) {
                setSidebarPosition('sticky'); // 使用 sticky 而不是 fixed
            } else {
                setSidebarPosition('sticky');
            }

            // 右侧边栏同样简化
            const rightDistanceToBottom = mainContentBottom - windowBottom;
            const rightWouldExceedBottom = scrollY + rightSidebarHeight + 100 > mainContentBottom;

            if (rightWouldExceedBottom && rightDistanceToBottom < 300) {
                setRightSidebarPosition('sticky');
            } else if (scrollY > 150) {
                setRightSidebarPosition('sticky');
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

    useEffect(() => {
    const handleScroll = () => {
        if (!menuButtonRef.current || !isMobile) return;
        
        const scrollY = window.scrollY;
        // 我们需要通过计算来获取，因为固定后 getBoundingClientRect() 会返回固定后的位置
        const menuButtonElement = menuButtonRef.current;
        const originalTop = menuButtonElement.offsetTop;
        // 当滚动距离超过按钮原始位置时固定它
        // 当滚动回按钮原始位置上方时取消固定
        if (scrollY > originalTop - 80) {
        setIsMenuSticky(true);
        } else {
        setIsMenuSticky(false);
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 初始检查
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    // 动态计算左侧边栏样式
    const getLeftSidebarStyles = () => {
        const baseClasses = 'transition-all duration-300 flex-shrink-0';
        
        if (isMobile) {
            return `${baseClasses} fixed inset-0 bg-white z-40 transform ${
                showMobileLeftNav ? 'translate-x-0' : '-translate-x-full'
            } overflow-y-auto`;
        }

        // 桌面端统一使用 sticky 定位，避免布局错乱
        return `${baseClasses} lg:w-[18%] lg:max-h-[calc(100vh-200px)] lg:overflow-y-auto lg:sticky lg:top-24`;
    };

    // 动态计算右侧边栏样式
    const getRightSidebarStyles = () => {
        const baseClasses = 'transition-all duration-300 flex-shrink-0';
        
        if (isMobile) {
            return `${baseClasses} hidden`; // 移动端隐藏右侧边栏
        }

        // 桌面端统一使用 sticky 定位，避免布局错乱
        return `${baseClasses} lg:w-[18%] lg:max-h-[calc(100vh-250px)] lg:overflow-y-auto lg:sticky lg:top-24`;
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
                                ? 'text-[#80B224] bg-green-50 hover:bg-green-100'
                                : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        style={{ paddingLeft: `${12 + paddingLeft}px` }}
                        onClick={(e) => {
                            if (isMobile) {
                                e.preventDefault();
                                router.push(item.href || '#');
                                setShowMobileLeftNav(false);
                            }
                        }}
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

            {/* 移动端导航遮罩 */}
            {showMobileLeftNav && isMobile && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => {
                        setShowMobileLeftNav(false);
                    }}
                />
            )}

            {/* 主容器 - 添加最大宽度限制 */}
            <div>
                <div className="w-full flex flex-col lg:flex-row" ref={contentRef}>
                    {/* 左侧导航 */}
                    <aside className={getLeftSidebarStyles()} ref={leftSidebarRef}>
                        {/* 移动端头部 */}
                        {isMobile && (
                            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0">
                                <h3 className="text-lg font-semibold">Navigation</h3>
                                <button
                                    onClick={() => setShowMobileLeftNav(false)}
                                    className="p-2 text-gray-500 hover:text-gray-700"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                        
                        <nav className="space-y-2 p-4 lg:p-0">
                            <div className="mb-6">
                                    {/* <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Documentation
                    </h3> */}
                                <ul className="space-y-1">
                                    {leftNavItems.map((item) =>
                                        item.isDivider ? (
                                            renderNavItem(item)
                                        ) : (
                                            <div key={`wrapper-${item.id}`} className="p-1 lg:pl-4">
                                                {renderNavItem(item)}
                                            </div>
                                        )
                                    )}
                                </ul>
                            </div>
                        </nav>
                    </aside>

                    {/* 中间内容区域 - 确保宽度固定 */}
                    <div className="flex-1 lg:w-[64%] border-l border-gray-300 py-16 min-w-0 w-full">
                        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 pt-12">
                            {/* 面包屑导航 */}
                            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6 overflow-x-auto">
                                <a href="/" className="hover:text-gray-700 whitespace-nowrap">Home</a>
                                <span>/</span>
                                <span className="hover:text-gray-700 whitespace-nowrap">Docs</span>
                                <span>/</span>
                                <span className="text-gray-900 whitespace-nowrap">{breadcrumb}</span>
                            </nav>
                            
                            {/* 移动端 Menu 按钮和 Jump to 导航 */}
                            {isMobile && (
                            <div className="mb-6">
                                {/* Menu 按钮的占位元素 - 当按钮固定时保持布局稳定 */}
                                {isMenuSticky && (
                                <div className="h-[56px] mb-4"></div> // 这个高度应该与 Menu 按钮容器的高度匹配
                                )}
                                
                                {/* Menu 按钮 - 根据滚动状态切换样式 */}
                                <div 
                                ref={menuButtonRef}
                                className={`transition-all duration-300 ${
                                    isMenuSticky 
                                    ? 'fixed top-20 left-4 right-4 z-30 bg-[#F9F9F9] py-3 shadow-sm' 
                                    : 'relative'
                                }`}
                                >
                                <button
                                    onClick={() => setShowMobileLeftNav(true)}
                                    className="flex items-center gap-1 p-2 bg-[#80B224] text-white rounded-lg shadow-sm hover:bg-[#98c455] transition-colors text-sm font-medium w-11 justify-center"
                                >
                                    <Image 
                                        src="/chouti.png" 
                                        alt="Chat" 
                                        width={28} 
                                        height={28} 
                                        priority={true}
                                    />
                                </button>
                                </div>
                                
                                {/* Jump to 导航 */}
                                {jumpToItems.length > 0 && (
                                <div className="p-4">
                                    <h3 className="text-base font-semibold text-gray-600 mb-3">Jump to</h3>
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
                                )}
                            </div>
                            )}

                            {bannerImage && (
                                <div className="w-full relative mb-6 rounded-lg overflow-hidden">
                                    <Image
                                        src={bannerImage}
                                        alt="banner"
                                        width={1400}
                                        height={459}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 z-10 flex items-center justify-start pl-4 lg:pl-8">
                                        <div className="text-left ml-0 lg:ml-4">
                                            <SlideUp>
                                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222638] text-shadow-lg">
                                                    Document Center
                                                </h1>
                                        
                                                <p className="text-gray-600 text-xs lg:text-lg mt-4 lg:mt-6">
                                                    Recently Updated: <a href="/resources/docs/cw-cloud-account/deploy-an-instance" className='hover:text-[#80B224]'>Deploy an instance</a>
                                                </p>
                                            </SlideUp>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 文章标题 */}
                            <header className="mb-6">
                                <h1 className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-gray-900 mb-4 break-words">
                                    {title}
                                </h1>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-2">
                                    {reviewDate && (
                                        <p className="text-gray-600 text-sm">
                                            Updated on {reviewDate}
                                        </p>
                                    )}
                                    {downloadUrl && (
                                        <a href={downloadUrl} className="text-blue-600 hover:text-blue-800 text-sm flex items-center whitespace-nowrap">
                                            download 📄
                                        </a>
                                    )}
                                </div>
                            </header>

                            {/* 文章内容 */}
                            <article className="prose prose-sm sm:prose-lg max-w-none">
                                {description && (
                                    <p className="text-base lg:text-l text-gray-700 mb-6">
                                        {description}
                                    </p>
                                )}
                                {children}
                            </article>

                            {/* 反馈部分 */}
                            {isMobile && (
                                <div className="mb-6 mr-6 pl-6 bg-gray-50 rounded-lg border border-1 border-gray-200">
                                    {/* 使用 DocumentFeedback 组件 */}
                                    {pageTitle && (
                                        <div className="mt-6">
                                            <DocumentFeedback pageTitle={pageTitle} />
                                        </div>
                                    )}

                                    {/* Feedback 链接 */}
                                    <div className="flex flex-col gap-3 py-6">
                                        <div className="flex flex-col gap-3">
                                            <button
                                                onClick={() => setShowFeedbackModal(true)}
                                                className="flex items-center gap-2 text-sm text-[#80B224] hover:text-[#98c455] font-medium cursor-pointer"

                                            >
                                                <Image src="/docs/feedback.svg" alt="Feedback" width={24} height={24} />
                                                Feedback
                                            </button>

                                            <a href="/contact" className="flex items-center gap-2 text-sm text-[#80B224] hover:text-[#98c455] font-medium">
                                                <Image src="/docs/contact.svg" alt="Contact" width={24} height={24} />
                                                Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 导航按钮 */}
                            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 gap-4">
                                {previousPage ? (
                                    <button
                                        onClick={() => router.push(previousPage.href)}
                                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base whitespace-nowrap"
                                    >
                                        {'<< Previous'}
                                    </button>
                                ) : (
                                    <div></div>
                                )}

                                {nextPage ? (
                                    <button
                                        onClick={() => router.push(nextPage.href)}
                                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base whitespace-nowrap"
                                    >
                                        {'Next >>'}
                                    </button>
                                ) : (
                                    <div></div>
                                )}
                            </div>

                            {/* 联系信息 */}
                            <div className="bg-[#F0F0F0] p-4 mt-10 rounded-lg">
                                <div className="flex">
                                    <div className="ml-0 lg:ml-3">
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            If you encounter any issues, contact our support team at <a href="mailto:support@canopywave.com" className="text-[#80B224] hover:text-[#98c455]">support@canopywave.com</a>. We provide 24/7 assistance.
                                        </p>
                                        <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                                            Get started now: Launch your H100 and H200 instances by clicking: <a href="https://cloud.canopywave.io/" className="text-[#80B224] hover:text-[#98c455] underline break-all" target="_blank" rel="noopener noreferrer">https://cloud.canopywave.io/</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 右侧导航和反馈 */}
                    <aside className={getRightSidebarStyles()} ref={rightSidebarRef}>
                        <div className="p-4 lg:p-0">
                            {/* Jump to 导航 */}
                            {!isMobile && (
                                <div className="mb-8 mt-2 lg:mt-0">
                                    <h3 className="text-base lg:text-l font-semibold text-gray-600 mb-4">Jump to</h3>
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
                            )}

                            {!isMobile && (
                                <div className="mb-6 mr-6 lg:mr-6 lg:pl-6 bg-gray-50 rounded-lg border border-1 border-gray-200">
                                    {/* 使用 DocumentFeedback 组件 */}
                                    {pageTitle && (
                                        <div className="mt-4 lg:mt-6">
                                            <DocumentFeedback pageTitle={pageTitle} />
                                        </div>
                                    )}

                                    {/* Feedback 链接 */}
                                    <div className="flex flex-col gap-3 py-4 lg:py-6">
                                        <div className="flex flex-col gap-3">
                                            <button
                                                onClick={() => setShowFeedbackModal(true)}
                                                className="flex items-center gap-2 text-sm text-[#80B224] hover:text-[#98c455] font-medium cursor-pointer"

                                            >
                                                <Image src="/docs/feedback.svg" alt="Feedback" width={24} height={24} />
                                                Feedback
                                            </button>

                                            <a href="/contact" className="flex items-center gap-2 text-sm text-[#80B224] hover:text-[#98c455] font-medium">
                                                <Image src="/docs/contact.svg" alt="Contact" width={24} height={24} />
                                                Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
            {/* 反馈弹窗 */}
            {showFeedbackModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-3xl mx-auto max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Documentation Feedback</h2>
                            <button
                                onClick={handleCloseModal}
                                className="text-gray-400 hover:text-gray-600 text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleFeedbackSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    What would you like to provide feedback on?<span className="ml-2 text-red-500">*</span>
                                </label>
                                <div className="space-y-2">
                                    {['Incorrect Information', 'Product-related Issue', 'Webpage-related Issue', 'Other'].map((type) => (
                                        <label key={type} className="flex items-center">
                                            <input
                                                type="radio"
                                                name="feedbackType"
                                                value={type}
                                                checked={feedbackType === type}
                                                onChange={(e) => setFeedbackType(e.target.value)}
                                                className="mr-2"
                                            />
                                            <span className="text-sm text-gray-700">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Description<span className="ml-2 text-red-500">*</span>
                                    </label>
                                    <span className="text-xs text-gray-500 mr-2">
                                        {feedbackDescription.length}/800
                                    </span>
                                </div>
                                <textarea
                                    value={feedbackDescription}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 800) {
                                            setFeedbackDescription(e.target.value);
                                        }
                                    }}
                                    placeholder="Please describe the issue in detail to help us better understand and resolve it."
                                    className="text-sm w-full p-3 border border-gray-300 rounded-md"
                                    rows={5}
                                    maxLength={800}
                                />
                            </div>
                            <div className="mb-4">
                                <p className="text-sm text-gray-700 mb-3">
                                    Please provide your email so we can respond to your feedback.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <input
                                            type="text"
                                            value={feedbackName}
                                            onChange={(e) => setFeedbackName(e.target.value)}
                                            placeholder="Name"
                                            className="text-sm w-full p-2 border border-gray-300 rounded-md"
                                            // focus:ring-2 focus:ring-[#80B224] focus:border-transparent
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="email"
                                            value={feedbackEmail}
                                            onChange={(e) => setFeedbackEmail(e.target.value)}
                                            placeholder="Email address"
                                            className="text-sm w-full p-2 border border-gray-300 rounded-md"
                                        />
                                        <span className="ml-2 text-red-500">*</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="text-sm px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className={`text-sm px-4 py-2 bg-[#80B224] text-white rounded-md hover:bg-[#98c455] transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={loading}
                                >
                                    {loading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* Toast 通知 */}
            {showToast && (
                <div className={`fixed top-4 right-4 left-4 sm:left-auto z-50 max-w-md p-4 rounded-lg shadow-lg transition-all duration-300 ${toastType === 'success'
                        ? 'bg-[#80B224] text-white'
                        : 'bg-red-500 text-white'
                }`}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {toastType === 'success' ? (
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            )}
                            <span className="text-sm font-medium">{toastMessage}</span>
                        </div>
                        <button
                            onClick={() => setShowToast(false)}
                            className="ml-4 text-white hover:text-gray-200"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            <Footer />
        </main>
    );
};

export default DocumentLayout;
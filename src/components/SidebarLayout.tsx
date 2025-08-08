import React, { useState, useEffect, ReactNode, useRef } from 'react';

interface NavigationItem {
  id: string;
  label: string;
}

interface SidebarLayoutProps {
  navigationItems: NavigationItem[];
  children: ReactNode;
  title: string;
  subtitle?: string;
  rightSidebar?: ReactNode; // 新增右侧边栏内容
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  navigationItems,
  children,
  title,
  subtitle,
  rightSidebar
}) => {
  const [activeSection, setActiveSection] = useState(navigationItems[0]?.id || '');
  const [sidebarPosition, setSidebarPosition] = useState('sticky');
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const rightSidebarRef = useRef<HTMLDivElement>(null); // 新增右侧边栏ref
  const [showVideo, setShowVideo] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // 计算Header高度和额外偏移量
      const headerHeight = 84;
      const extraOffset = 25;
      const totalOffset = headerHeight + extraOffset;

      // 获取元素位置
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - totalOffset;

      // 平滑滚动到计算后的位置
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // 页面滚动处理函数 - 控制Sidebar位置
    const handlePageScroll = () => {
      const scrollY = window.scrollY;

      // 获取关键元素的位置信息
      const heroSection = document.querySelector('.w-full.h-\\[490px\\]') ||
        document.querySelector('.w-full.h-\\[500px\\]') ||
        document.querySelector('[class*="h-["]');
      const mainContentContainer = contentRef.current;
      const sidebar = sidebarRef.current;

      if (!mainContentContainer || !sidebar) return;

      // 动态计算关键位置点
      const heroHeight = heroSection ? heroSection.getBoundingClientRect().height + 84 : 574; // 84是header高度
      const mainContentRect = mainContentContainer.getBoundingClientRect();
      const mainContentTop = mainContentRect.top + scrollY;
      const mainContentBottom = mainContentRect.bottom + scrollY;
      const sidebarHeight = sidebar.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      const windowBottom = scrollY + windowHeight;

      // 计算距离主内容区域底部的距离
      const distanceToBottom = mainContentBottom - windowBottom;

      // 动态阈值计算
      const startFixedThreshold = heroHeight - 100; // hero区域结束前100px开始固定
      const bottomThreshold = 300; // 距离底部300px时调整位置

      // 判断sidebar是否会超出内容区域底部
      const wouldExceedBottom = scrollY + sidebarHeight + 96 > mainContentBottom; // 96是top-24的像素值

      if (wouldExceedBottom && distanceToBottom < bottomThreshold) {
        // 当sidebar会超出内容底部且接近底部时，使用绝对定位
        setSidebarPosition('absolute-bottom');
      }
      else if (scrollY >= startFixedThreshold) {
        // 当滚动超过hero区域时，使用固定定位
        setSidebarPosition('fixed');
      }
      else {
        // 在页面顶部时，使用粘性定位
        setSidebarPosition('sticky');
      }
    };

    // 章节高亮处理函数
    const handleContentScroll = () => {
      const sections = navigationItems.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            top: rect.top,
            element
          };
        }
        return null;
      }).filter((section): section is { id: string; top: number; element: HTMLElement } => section !== null);

      // 找到当前在视口中最靠近顶部的章节
      let currentSection: string | null = null;
      const viewportTop = 120; // 考虑导航栏高度的偏移

      for (const section of sections) {
        if (section.top <= viewportTop) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      // 如果找到了章节且与当前不同，则更新
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // 监听页面滚动
    window.addEventListener('scroll', handlePageScroll);
    window.addEventListener('scroll', handleContentScroll, { passive: true });

    // 监听窗口大小变化，重新计算位置
    window.addEventListener('resize', handlePageScroll);

    // 初始化时调用一次，设置初始高亮状态
    setTimeout(() => {
      handleContentScroll();
      handlePageScroll();
    }, 100);

    return () => {
      window.removeEventListener('scroll', handlePageScroll);
      window.removeEventListener('scroll', handleContentScroll);
      window.removeEventListener('resize', handlePageScroll);
    };
  }, [navigationItems, activeSection]);

  // 动态计算sidebar的样式
  const getSidebarStyles = () => {
    const baseClasses = 'lg:w-56 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto transition-all duration-300';

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
  // 新增：动态计算右侧边栏的样式
  const getRightSidebarStyles = () => {
    const baseClasses = 'lg:w-20 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto transition-all duration-300';

    switch (sidebarPosition) {
      case 'fixed':
        return `${baseClasses} lg:fixed lg:top-24 lg:z-10 lg:right-[calc((100vw-1280px)/2)]`;
      case 'absolute-bottom':
        return `${baseClasses} lg:absolute lg:bottom-0 lg:z-10`;
      case 'sticky':
      default:
        return `${baseClasses} lg:sticky lg:top-24`;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-16 mb-12" ref={contentRef}>
      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* Left Sidebar Navigation */}
        <div className="lg:w-56 lg:flex-shrink-0 mb-8 lg:mb-0">
          <div className={getSidebarStyles()} ref={sidebarRef}>
            <div className="bg-white rounded-lg border border-gray-100 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-100">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-all duration-200 flex items-center group ${activeSection === item.id
                      ? 'bg-green-50 text-[#80B224] font-medium border-l-3 border-[#80B224] pl-4'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:pl-4'
                      }`}
                  >
                    <span className="flex-1">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
            {/* Right Sidebar - 移动到左侧sidebar下方 */}
            {rightSidebar && (
              <div className="p-2">
                {rightSidebar}
              </div>
            )}

          </div>
        </div>

        {/* Center Content Area - 调整为包含主内容和推荐教程的容器 */}
        <div className="flex-1 min-w-0 max-w-5xl">
          <div className="flex gap-6">
            {/* 主要内容区域 */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h1 className="text-2xl sm:text-3xl font-black mb-8">{title}</h1>
                {subtitle && (
                  <p className="text-gray-600 text-xl mb-8">{subtitle}</p>
                )}
                {children}
              </div>
            </div>

            {/* Recommended Tutorials 板块 - 保持在右侧 */}
            <div className="hidden xl:block w-64 flex-shrink-0">
              <div className={getSidebarStyles()} ref={sidebarRef}>
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-4">
                  Recommended Tutorials
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg pb-2">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden">
                      <iframe
                        src="https://www.youtube.com/embed/sAtw9ugBb0M?modestbranding=1&showinfo=0&rel=0&controls=1"
                        title="How to Connect and Use the Canopywave Platform Virtual Machine"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h4 className="font-medium text-gray-900 text-xs mb-2 line-clamp-2">
                      How to Connect and Use the Canopywave Platform Virtual Machine
                    </h4>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg pb-2">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden">
                      {!showVideo ? (
                        <div
                          className="w-full h-full cursor-pointer"
                          onClick={() => setShowVideo(true)}
                        >
                          <img
                            src="https://img.youtube.com/vi/yLpYTQN-4ZY/maxresdefault.jpg"
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <img
                              src="/tutorials/youtube.svg"
                              alt="Play video"
                              className="w-16 h-16 cursor-pointer hover:scale-110 transition-transform duration-200"
                            />
                          </div>
                        </div>
                      ) : (
                        <iframe
                          src="https://www.youtube.com/embed/yLpYTQN-4ZY?modestbranding=1&rel=0&controls=1&autoplay=1"
                          title="How to Build the Virtual Machines on the Cloud Platform"
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      )}
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=yLpYTQN-4ZY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                    >
                      How to Build the "Virtual Machines" on the Cloud Platform
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
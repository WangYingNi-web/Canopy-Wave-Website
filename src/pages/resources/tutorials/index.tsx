import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import SlideUp from '@/components/slide';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import IwsLink from '@/components/IwsLink'
import { useRouter } from 'next/router';

interface TutorialPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface Card {
  id: string;
  category: string;
  title: string;
  image: string;
  date: string;
  tag?: string;
  onClick: () => void;
}

const Tutorials: React.FC = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // 修改为每页显示6个卡片
  // 处理教程点击事件
  const handleTutorialClick = (title: string) => {
    const tutorialTitle = title.toLowerCase().replace(/[\s-]+/g, '-');
    router.push(`/resources/tutorials/${tutorialTitle}`);
  };

  // 定义卡片数据（扩展更多数据）
  const allCards: Card[] = [
    // {
    //   id: 'comparing-ai-agent-frameworks',
    //   category: 'AI Models',
    //   title: 'LangGraph vs AutoGPT vs AgentGPT',
    //   image: '/tutorials/ai-agent-frameworks/ai-agent-frameworks.webp',
    //   date: 'September 19, 2025',
    //   onClick: () => handleTutorialClick('Comparing Open-Source AI Agent Frameworks')
    // },
    {
      id: 'prompt-engineering-guide',
      category: 'LLMs',
      title: 'Prompt Engineering Guide',
      image: '/tutorials/prompt-engineering-guide/group.png',
      date: 'September 3, 2025',
      onClick: () => handleTutorialClick('Prompt Engineering Guide')
    },
    {
      id: 'ai-workflows',
      category: 'GPU',
      title: 'NVIDIA H100 vs H200 vs B200: Which GPU for Your Workload?',
      image: '/tutorials/workload/workload.png',
      date: 'August 27, 2025',
      onClick: () => handleTutorialClick('NVIDIA H100 vs H200 vs B200: Which GPU for Your Workload')
    },
    {
      id: 'storage-guide',
      category: 'Storage',
      title: 'How to Choose the Right Storage for Your AI Workflows?',
      image: '/tutorials/workflows/workflows.png',
      date: 'August 27, 2025',
      onClick: () => handleTutorialClick('How to Choose the Right Storage for Your AI Workflows')
    },
    {
      id: 'GPT-OSS',
      category: 'AI Models',
      title: 'How to Run the GPT-OSS Locally on a Canopy Wave VM?',
      image: '/tutorials/gpt-oss/gpt-oss.png',
      date: 'August 13, 2025',
      onClick: () => handleTutorialClick('How to Run the GPT-OSS Locally on a Canopy Wave VM')
    },
    {
      id: 'KIMI-K2',
      category: 'AI Models',
      title: 'How to Run the KIMI-K2 Locally on a Canopy Wave VM?',
      image: '/tutorials/kimi-k2/kimi.png',
      date: 'August 11, 2025',
      onClick: () => handleTutorialClick('How to Run the KIMI-K2 Locally on a Canopy Wave VM')
    },
    {
      id: 'llama',
      category: 'AI Models',
      title: 'How to Run the Llama Locally on a Canopy Wave VM?',
      image: '/tutorials/result-banner/Llama-Locally.png',
      date: 'August 1, 2025',
      onClick: () => handleTutorialClick('How to Run the Llama Locally on a Canopy Wave VM')
    },
    {
      id: 'deepseek',
      category: 'AI Models',
      title: 'How to Run DeepSeek-R1 Locally on a Canopy Wave VM?',
      image: '/tutorials/result-banner/DeepSeek-R1.png',
      date: 'July 31, 2025',
      onClick: () => handleTutorialClick('How to Run DeepSeek-R1 Locally on a Canopy Wave VM')
    },
    
    {
      id: 'api',
      category: 'API',
      title: 'Canopy Wave supports a set of REST API to enable servers to develop management clients or to integrate VMS functionality into users\' own custom management infrastructure.',
      image: '/tutorials/result-banner/API-Management.png',
      date: 'June 11, 2025',
      tag: 'API',
      // onClick: () => handleTutorialClick('API Management Guide')
      onClick: () => router.push('/resources/tutorials/manage-cloud-via-api')
    },
  ];

  useEffect(() => {
    const { category } = router.query;
    if (category) {
      // 解码URL参数，处理空格等特殊字符
      const decodedCategory = decodeURIComponent(category as string);
      setActiveCategory(decodedCategory);
    } else {
      setActiveCategory('All');
    }
    // 切换分类时重置到第一页
    setCurrentPage(1);
  }, [router.query]);

  // 处理分类按钮点击
  const handleCategoryClick = (category: string) => {
    if (category === 'All') {
      router.push('/resources/tutorials');
    } else {
      // 对包含空格的分类进行URL编码
      const encodedCategory = encodeURIComponent(category);
      router.push(`/resources/tutorials?category=${encodedCategory}`);
    }
  };

    // 获取要显示的卡片 - Results区域按最新日期排序
    const getDisplayCards = () => {
      let cards;
      if (activeCategory === 'All') {
        cards = allCards;
      } else {
        cards = allCards.filter(card => card.category === activeCategory);
      }
      
      // 按日期排序（最新的在前面）
      return cards.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime(); // 降序排列，最新的在前
      });
    };
  
    const filteredCards = getDisplayCards();
  
    // 获取Featured Content区域要显示的卡片 - deepseek排在前面
    const getFeaturedCards = () => {
      if (activeCategory === 'All') {
        // 直接筛选指定的两篇文章
        const featuredCards = allCards.filter(card => 
          card.id === 'GPT-OSS' || card.id === 'ai-workflows'
        );
        
        // 确保GPT-OSS排在前面
        return featuredCards.sort((a, b) => {
          if (a.id === 'GPT-OSS') return -1;
          if (b.id === 'GPT-OSS') return 1;
          return 0;
        });
      }
      return [];
    };
  const featuredCards = getFeaturedCards();

  // 分页逻辑
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = filteredCards.slice(startIndex, endIndex);

  // 处理分页
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // 滚动到Results区域
    const resultsSection = document.getElementById('results-section');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    // 生成分页按钮
    const renderPagination = () => {
      // if (totalPages <= 1) return null;
  
      const pages = [];
      const maxVisiblePages = 5;
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
      // 调整起始页，确保显示足够的页码
      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
  
      return (
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-1" aria-label="Pagination">
            {/* 左箭头 - 上一页 */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all duration-200 ${
                currentPage === 1
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
                  : 'border-gray-300 text-gray-600 hover:bg-[#80B224] hover:text-white hover:border-[#80B224] bg-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
  
            {/* 页码按钮 */}
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
              const pageNumber = startPage + index;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg border font-medium transition-all duration-200 ${
                    currentPage === pageNumber
                      ? 'bg-[#80B224] text-white border-[#80B224] shadow-md'
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-[#80B224] hover:text-white hover:border-[#80B224]'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
  
            {/* 右箭头 - 下一页 */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all duration-200 ${
                currentPage === totalPages
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
                  : 'border-gray-300 text-gray-600 hover:bg-[#80B224] hover:text-white hover:border-[#80B224] bg-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      );
    };

  return (
    <>
      <Head>
        <title>Tutorials - Canopy Wave</title>
        <meta name="description" content="Explore comprehensive product usage guides and tutorials for AI model deployment" />
        <meta property="og:title" content="Tutorials - Canopy Wave" />
        <meta property="og:description" content="Explore comprehensive product usage guides and tutorials for AI model deployment" />
      </Head>

      <Header />

      <main className="min-h-screen bg-[#f9f9f9]">
        {/* Hero Section */}
        <div className="w-full h-[520px] relative mt-[84px]">
          <Image
            src="/about/banner.svg"
            alt="banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
              <SlideUp>
                <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-center">
                  Tutorials
                </h1>
              </SlideUp>
              <SlideUp>
                <p className="text-gray-600 text-l mt-8 text-center">
                  Explore Comprehensive Product Usage Guides
                </p>
              </SlideUp>
            </div>
          </div>
        </div>

        {/* 教程内容区域 */}
        <div id="tutorials-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* 分类导航 */}
          <div className="mb-12">
            <SlideUp>
              <div className="flex flex-wrap gap-4 justify-start">
                {['All', 'AI Models', 'API', 'Storage' ,'GPU','LLMs'].map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-[#80B224] text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#80B224]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </SlideUp>
          </div>

          {/* Featured Content 区域 */}
          {featuredCards.length > 0 && (
            <div className="mb-16">
              <SlideUp>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Content</h2>
              </SlideUp>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {featuredCards.map((card) => (
                  <SlideUp key={card.id}>
                    <div
                      className="relative bg-white rounded-xl overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300 border border-gray-200"
                      onClick={card.onClick}
                    >
                      {/* 图片区域 */}
                      <div className="relative w-full h-65 overflow-hidden">
                        <Image
                          src={card.image}
                          alt="banner"
                          width={400}
                          height={192}
                          className="object-cover w-full h-full"
                          priority
                        />
                      </div>

                      {/* 内容区域 */}
                      <div className="p-6">
                        {/* AI Models标签和日期 */}
                        <div className="flex items-center justify-between text-sm mb-3">
                          <span className="px-2 py-1 bg-[#F5F9F4] text-[#80B224] rounded-full font-semibold">
                            {card.tag || card.category}
                          </span>
                          <span className="text-gray-500">{card.date}</span>
                        </div>

                        {/* 标题 */}
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </div>
          )}

          {/* Results 区域 */}
          <div id="results-section">
            <SlideUp>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Results</h2>
                {/* <div className="text-sm text-gray-500">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredCards.length)} of {filteredCards.length} results
                </div> */}
              </div>
            </SlideUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCards.map((card) => (
                <SlideUp key={card.id}>
                  <div
                    className="relative bg-white min-h-[335px] rounded-xl overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300 border border-gray-200"
                    onClick={card.onClick}
                  >
                    {/* 图片区域 */}
                    <div className="relative w-full aspect-[2/1] overflow-hidden bg-gray-100">
                      <Image
                        src={card.image}
                        alt="banner"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    </div>

                    {/* 内容区域 */}
                    <div className="p-6">
                      {/* 标签和日期 */}
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="px-2 py-1 bg-[#F5F9F4] text-[#80B224] rounded-full font-semibold">
                          {card.tag || card.category}
                        </span>
                        <span className="text-gray-500">{card.date}</span>
                      </div>

                      {/* 标题 */}
                      <h3 className="text-l font-bold text-gray-900 line-clamp-2">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>

            {/* 分页控件 */}
            {renderPagination()}
          </div>

          {/* 空状态提示 */}
          {filteredCards.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Currently, there is no relevant content available</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Tutorials;
import React, { useState } from 'react';
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
const Tutorials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const tutorialPosts: TutorialPost[] = [
    {
      id: 1,
      title: "How to Run DeepSeek-R1 Locally in a Canopy Wave VM",
      description: "A comprehensive guide to setting up and managing your first GPU cluster",
      date: "July 31, 2025",
      image: "/tutorials/deepseek.png"
    },
    {
      id: 2,
      title: "How to Run the Llama Locally in a Canopy Wave VM",
      description: "Best practices for configuring your AI training and inference workloads",
      date: "August 1, 2025",
      image: "/tutorials/Llama.png"
    },
  ];
  const handleTutorialClick = (title: string) => {
    const tutorialTitle = title.toLowerCase().replace(/[\s-]+/g, '-');
    router.push(`/resources/tutorials/${tutorialTitle}`);
  };
  const router = useRouter();
  // 教程数据
  const tutorials = [
    {
      id: 1,
      title: "How to Run DeepSeek-R1 Locally in a Canopy Wave VM",
      description: "A comprehensive guide to setting up and managing your first GPU cluster",
      image: "/tutorials/deepseek.png",
      category: "本地部署",
      link: "/resources/tutorials/how-to-run-deepseek-r1-locally-in-a-canopy-wave-vm",
      tags: ["DeepSeek", "本地部署", "LLM"]
    },
    {
      id: 2,
      title: "How to Run the Llama Locally in a Canopy Wave VM",
      description: "Best practices for configuring your AI training and inference workloads",
      image: "/tutorials/Llama.png",
      category: "本地部署",
      link: "/resources/tutorials/how-to-run-the-llama-locally-in-a-canopy-wave-vm",
      tags: ["Llama", "本地部署", "Meta"]
    }
  ];

  // 分类选项
  const categories = ['All', '本地部署'];

  // 过滤教程
  const filteredTutorials = activeCategory === 'All'
    ? tutorials
    : tutorials.filter(tutorial => tutorial.category === activeCategory);

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
        {/* Hero Banner Section */}
        <div className="w-full h-[520px] relative mt-[84px] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] overflow-hidden">
          {/* 科技风背景元素 */}
          <div className="absolute inset-0">
            {/* 网格背景 */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(128, 178, 36, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(128, 178, 36, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            {/* 动态光效 */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-[#80B224] rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* 几何装饰 */}
            <div className="absolute top-40 right-40 w-4 h-4 bg-[#80B224] rotate-45 opacity-60"></div>
            <div className="absolute bottom-40 left-40 w-6 h-6 border-2 border-[#80B224] rotate-45 opacity-40"></div>
            <div className="absolute top-60 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-70"></div>
          </div>

          {/* 内容区域 */}
          <div className="absolute inset-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
              <SlideUp>
                <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
                  <span className="text-[#80B224]">Tutorials</span>
                </h1>
              </SlideUp>
              <SlideUp>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                  Explore Comprehensive Product Usage Guides
                </p>
              </SlideUp>
              <SlideUp>
                <Button
                  className="bg-[#80B224] hover:bg-[#6fa01e] text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    const tutorialsSection = document.getElementById('tutorials-section');
                    tutorialsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Launch Now
                </Button>
              </SlideUp>
            </div>
          </div>
        </div>

        {/* 教程内容区域 */}
        <div id="tutorials-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* 分类导航 */}
          <div className="mb-12">
            <SlideUp>
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                        ? 'bg-[#80B224] text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#80B224]'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </SlideUp>
          </div>

          {/* 教程卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial, index) => (
              <SlideUp key={tutorial.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                  {/* 教程图片 */}
                  <div className="relative h-48 bg-gradient-to-br from-[#80B224] to-[#6fa01e] overflow-hidden">
                    {/* 如果图片存在则显示，否则显示占位符 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          {tutorial.category === '本地部署' && tutorial.title.includes('DeepSeek') && (
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                          )}
                          {tutorial.category === '本地部署' && tutorial.title.includes('Llama') && (
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          )}
                        </div>
                        <div className="text-sm font-semibold opacity-90">
                          {tutorial.title.includes('DeepSeek') ? 'DeepSeek-R1' : 'Llama'}
                        </div>
                      </div>
                    </div>

                    {/* 悬浮效果 */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>

                  {/* 教程内容 */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#80B224] transition-colors duration-300">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {tutorial.description}
                    </p>

                    {/* 标签 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 操作按钮 */}
                    <Button
                      className="w-full bg-[#80B224] hover:bg-[#6fa01e] text-white font-semibold py-2 transition-all duration-300"
                      onClick={() => window.location.href = tutorial.link}
                    >
                      开始学习
                    </Button>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorialPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer flex flex-col" onClick={() => handleTutorialClick(post.title)}>
                <div className="relative mb-4 overflow-hidden rounded-lg shadow-xl">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2 flex-grow">{post.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-auto">
                  <IwsLink
                    href={`/about/newsroom/tutorials/${post.title.toLowerCase().replace(/[\s-]+/g, '-')}`}
                    className="px-3 py-1 bg-[#8CC63F] text-white text-sm rounded-full hover:bg-[#7ab32f] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Tutorial
                  </IwsLink>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
          {/* 空状态 */}
          {filteredTutorials.length === 0 && (
            <div className="text-center py-16">
              <SlideUp>
                <div className="text-gray-400 text-lg">
                  该分类下暂无教程，敬请期待更多内容
                </div>
              </SlideUp>
            </div>
          )}

          {/* 即将推出提示 */}
          <div className="mt-16 text-center">
            <SlideUp>
              <div className="bg-gradient-to-r from-[#80B224] to-[#6fa01e] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">更多教程即将推出</h3>
                <p className="text-lg opacity-90 mb-6">
                  我们正在准备更多类别的教程内容，包括云端部署、模型优化、性能调优等
                </p>
                <Button
                  className="bg-white text-[#80B224] hover:bg-gray-100 font-semibold px-8 py-3"
                  onClick={() => window.location.href = '/contact'}
                >
                  联系我们获取定制教程
                </Button>
              </div>
            </SlideUp>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Tutorials;
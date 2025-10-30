"use client";

import Image from 'next/image'
import IwsLink from './IwsLink'
import { useRouter } from 'next/router'
import { router as routerList } from './../router'
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

export default function Header() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const [showProducts, setShowProducts] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showDataCenter, setShowDataCenter] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showModelPlatform, setShowModelPlatform] = useState(false);


  const [showMobileProducts, setShowMobileProducts] = useState(false);
  const [showMobileSolutions, setShowMobileSolutions] = useState(false);
  const [showMobilePricing, setShowMobilePricing] = useState(false);
  const [showMobileDataCenter, setShowMobileDataCenter] = useState(false);
  const [showMobileResources, setShowMobileResources] = useState(false);
  const [showMobileAbout, setShowMobileAbout] = useState(false);



  const [showMobileSubMenu, setShowMobileSubMenu] = useState<string | null>(null);
  const [showDataCenterSubMenu, setShowDataCenterSubMenu] = useState(false);
  const [showAboutSubMenu, setshowAboutSubMenu] = useState(false);



  const menuRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const datacenterRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const modelPlatformRef = useRef<HTMLDivElement>(null);
  const closeMobileMenu = () => {
    setIsOpen(false);
    setShowMobileProducts(false);
    setShowMobileSolutions(false);
    setShowMobilePricing(false);
    setShowMobileDataCenter(false);
    setShowMobileResources(false);
    setShowMobileAbout(false);
    setShowMobileSubMenu(null);
  };
  const getContainerMaxWidth = () => {
    return router.pathname.startsWith('/resources/docs') ? 'max-w-8xl' : 'max-w-7xl';
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowProducts(false);
      }
      if (modelPlatformRef.current && !modelPlatformRef.current.contains(event.target as Node)) {
        setShowModelPlatform(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setShowSolutions(false);
      }
      if (pricingRef.current && !pricingRef.current.contains(event.target as Node)) {
        setShowPricing(false);
      }
      if (datacenterRef.current && !datacenterRef.current.contains(event.target as Node)) {
        setShowDataCenter(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setShowResources(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setShowAbout(false);
      }
    };

    // 新增滚动监听逻辑
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 当滚动超过100px时，将header从fixed改为sticky
      setIsScrolled(scrollY > 100);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <nav className={`bg-[#F9F9F9] border-y-2 border-gray-200 z-50 py-2 transition-all duration-300 ${router.pathname.startsWith('/resources/docs/cw-cloud-account') && isScrolled
    //     ? 'sticky -top-[83px]'
    //     : 'fixed top-0 left-0 right-0'
    //   }`}>
    <nav className="bg-[#F9F9F9] border-y-2 border-gray-200 py-2 z-50 fixed top-0 left-0 right-0">
      <div className={`${getContainerMaxWidth()} mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="flex items-center justify-between h-16">
          {/* 左侧 logo */}
          <div className="flex-shrink-0 flex items-center w-[140px] md:w-[160px] lg:w-[180px]">
            <div className="flex items-center">
              <IwsLink href="/" className="flex items-center">
                <Image
                  src="/canopy.png"
                  alt="Canopy Wave Logo"
                  width={45}
                  height={45}
                  className="md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px]"
                  priority
                />
                <span className="whitespace-nowrap text-l font-bold text-gray-600 ml-2">Canopy Wave</span>
              </IwsLink>
            </div>
          </div>

          {/* 中间导航部分 */}
          <div className="hidden custom:flex flex-1 justify-center">
            <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6">
              <div className="relative text-sm" ref={modelPlatformRef}>
                <button
                  className="text-gray-600 text-sm max-1207:text-xs font-medium hover:text-[#8CC63F] flex items-center"
                  onClick={() => setShowModelPlatform(!showModelPlatform)}
                >
                  Model Platform
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showModelPlatform ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showModelPlatform && (
                  <div className="bg-[#EFEFEF] fixed left-0 right-0 py-[40px] top-[83px] shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-2 gap-8">
                        {/* 左侧：Inferencing as a Service */}
                        <div className='border-r border-[#ffffff] max-w-[500px]'>
                          <div className="flex items-center gap-2 mb-[16px]">
                            <Image src="/header/model_ic_inferencing.png" alt="Inferencing" width={50} height={50} />
                            <h3 className="font-bold text-[16px]">Inferencing as a Service</h3>
                          </div>
                          <ul className="space-y-2 text-[14px]">
                            <li><IwsLink href="/ai-model" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowModelPlatform(false)}>Model Library</IwsLink></li>
                            <li><IwsLink href="/inference" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowModelPlatform(false)}>Serverless Inference</IwsLink></li>
                            <li><IwsLink href="https://chat.canopywave.io/" className="text-gray-600 hover:text-[#8CC63F] text-sm" target="_blank" rel="noopener noreferrer" onClick={() => setShowModelPlatform(false)}>Canopy Wave Chat</IwsLink></li>
                          </ul>
                        </div>
                        {/* 右侧：Featured Models */}
                        <div className='-ml-[28px] w-[520px]'>
                          <div className="flex items-center justify-between mb-[16px]">
                            <h3 className="font-bold text-[#333333] text-[16px]">Featured Models</h3>
                            <IwsLink href="/ai-model" className="text-[#8CC63F] hover:text-[#6fa82f] text-[16px] flex items-center gap-1" onClick={() => setShowModelPlatform(false)}>
                              Explore All Models
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#8CC63F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M13 5l7 7-7 7"></path>
                              </svg>
                            </IwsLink>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-[12px]">
                            {/* 大卡片 */}
                            <div className="col-span-2 row-span-2 bg-white rounded-3xl p-4 shadow-sm h-[314px] flex flex-col">
                              <div className="text-[16px] text-gray-500 mb-8 ml-6">CHAT</div>
                              <div className="flex items-center mb-[24px] mx-auto">
                                <div className="w-30 h-30">
                                  <Image src="/header/ic_deepseekv3.2.png" alt="Deepseek" width={120} height={120} />
                                </div>
                              </div>
                              <div className={`text-[24px] font-bold text-[#333333] line-clamp-1 mx-auto mb-[16px]`}>DEEPSEEK V3.2 EXP</div>
                              <div className={`flex items-center gap-6 text-[#666666] text-[16px] line-height-[24px] mx-auto mb-[16px]`}>
                                <div className="flex items-center gap-2">
                                  <span className="inline-block w-2 h-2 bg-[#8CC63F] rounded-full" />
                                  <span>685B</span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <span className="inline-block w-2 h-2 bg-[#8CC63F] rounded-full" />
                                  <span>128K context</span>
                                </div>
                              </div>
                            </div>

                            {/* 小卡片1 */}
                            <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center justify-center flex-col h-[150px]">
                              <div className="w-16 h-16 flex items-center justify-center rounded-md">
                                <Image src="/ai-model/allmodels_ic_gpt.png" alt="GPT-OSS 120B" width={68} height={68} />
                              </div>
                              <div className="mt-2 text-[16px] text-gray-700">GPT-OSS 120B</div>
                            </div>
                            {/* 小卡片2 */}
                            <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center justify-center flex-col h-[150px]">
                              <div className="w-16 h-16 flex items-center justify-center rounded-md">
                                <Image src="/ai-model/allmodels_ic_glm.png" alt="GLM 4.6" width={68} height={68} />
                              </div>
                              <div className="mt-2 text-[16px] text-gray-700">GLM 4.6</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative text-sm" ref={menuRef}>
                <button
                  className="text-gray-600 text-sm max-1207:text-xs font-medium hover:text-[#8CC63F] flex items-center"
                  onClick={() => setShowProducts(!showProducts)}
                >
                  GPU Cloud
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showProducts ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showProducts && (
                  <div className="bg-[#EEEEEE] fixed left-0 right-0 py-[40px] top-[83px] shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-4 gap-8">
                        <div>
                          <div className="flex items-center gap-3 mb-[16px]">
                            <div className="w-12 h-12 flex items-center justify-center rounded-md">
                              <Image src="/header/gpucloud_ic_gpus.png" alt="GPUs" width={58} height={58} />
                            </div>
                            <IwsLink href="/compute-services" className="text-[#333333] text-[16px] hover:text-[#8CC63F] font-bold" onClick={() => setShowProducts(false)}>
                              GPUs
                            </IwsLink>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li><IwsLink href="/gb200-nvl72" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowProducts(false)}><span>NVIDIA GB200 NVL72</span></IwsLink></li>
                            <li><IwsLink href="/hgx-b200" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowProducts(false)}><span>NVIDIA HGX B200</span></IwsLink></li>
                            <li><IwsLink href="/compute-services#hgx-h200" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowProducts(false)}>NVIDIA HGX H200</IwsLink></li>
                            <li><IwsLink href="/compute-services#hgx-h100" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowProducts(false)}>NVIDIA HGX H100</IwsLink></li>
                            <li><IwsLink href="/compute-services#bare-metal" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowProducts(false)}>Bare metal GPU cluster</IwsLink></li>
                          </ul>
                        </div>
                        <div className="border-l border-[#ffffff] pl-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-md">
                              <Image src="/header/gpucloud_ic_storage.png" alt="Storage Services" width={58} height={58} />
                            </div>
                            <IwsLink href="/storage-services" className="text-[#333333] text-[16px] flex items-center text-gray-900 hover:text-[#8CC63F] font-bold" onClick={() => setShowProducts(false)}>
                              Storage Services
                            </IwsLink>
                          </div>
                          {/* <ul className="space-y-2 text-sm">
                            <li><IwsLink href="/storage-services#local-storage" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowProducts(false)}>Local Storage</IwsLink></li>
                            <li><IwsLink href="/storage-services#shared-storage" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowProducts(false)}>Shared Storage</IwsLink></li>
                            <li><IwsLink href="/storage-services#object-storage" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowProducts(false)}>Object Storage</IwsLink></li>
                          </ul> */}
                        </div>
                        <div className="border-l border-[#ffffff] pl-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-md">
                              <Image src="/header/gpucloud_ic_networking.png" alt="Networking Services" width={58} height={58} />
                            </div>
                            <IwsLink href="/networking-services" className="text-[#333333] text-[16px] flex items-center hover:text-[#8CC63F] font-bold" onClick={() => setShowProducts(false)}>
                              Networking Services
                            </IwsLink>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li><IwsLink href="/networking-services/infiniband-networking" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowProducts(false)}>InfiniBand NetworkingRoCEv2</IwsLink></li>
                            <li><IwsLink href="/networking-services/rocev2-networking" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowProducts(false)}>Networking</IwsLink></li>
                          </ul>
                        </div>
                        <div className="border-l border-[#ffffff] pl-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-md">
                              <Image src="/header/gpucloud_ic_platform.png" alt="Platform" width={58} height={58} />
                            </div>
                            <IwsLink href="/platform" className="text-[#333333] text-[16px] flex items-center hover:text-[#8CC63F] font-bold" onClick={() => setShowProducts(false)}>
                              Platform
                            </IwsLink>
                          </div>
                          {/* <ul className="space-y-2 text-sm">
                            <li><IwsLink href="/platform#dcim-platform" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowProducts(false)}>Canopy Wave DCIM Platform</IwsLink></li>
                            <li><IwsLink href="/platform#cloud-platform" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => setShowProducts(false)}>Canopy Wave Cloud Platform</IwsLink></li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={solutionsRef}>
                <button
                  className="text-gray-600 text-sm max-1207:text-xs font-medium hover:text-[#8CC63F] flex items-center"
                  onClick={() => setShowSolutions(!showSolutions)}
                >
                  Solutions
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showSolutions ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showSolutions && (
                  <div className="bg-[#EEEEEE] fixed left-0 right-0 py-[40px] px-8 pl-8 mt-[31px] shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-3 gap-8">
                        {/* Use Cases */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 mb-[16px]">
                            <div className="w-12 h-12 rounded-md flex items-center justify-center">
                              <Image src="/header/solutions_ic_usecases.png" alt="GPUs" width={58} height={58} />
                            </div>
                            <div className="text-[#333333] font-bold">Use Cases</div>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <IwsLink href="/model-training" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowSolutions(false) }}>
                                AI Model Training
                              </IwsLink>
                            </li>
                          </ul>
                        </div>

                        {/* Private Cloud and GPUs Deployment */}
                        <div className="space-y-3 border-l border-[#ffffff] pl-8">
                          <div className="flex items-center gap-3 mb-[16px]">
                            <div className="w-12 h-12 rounded-md flex items-center justify-center">
                              <Image src="/header/solutions_ic_private.png" alt="GPUs" width={58} height={58} />
                            </div>
                            <IwsLink href="/private-cloud" className="text-[#333333] font-bold hover:text-[#8CC63F] transition-colors cursor-pointer">Private Cloud and GPUs Deployment</IwsLink>
                          </div>
                          {/* <ul className="space-y-2 text-sm">
                            <li>
                              <IwsLink href="/private-cloud" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowSolutions(false) }}>
                                Private Cloud and GPUs Deployment
                              </IwsLink>
                            </li>
                          </ul> */}
                        </div>

                        {/* Networking Hardware Solution */}
                        <div className="space-y-3 border-l border-[#ffffff] pl-8">
                          <div className="flex items-center gap-3 mb-[16px]">
                            <div className="w-12 h-12 rounded-md flex items-center justify-center">
                              <Image src="/header/solutions_ic_networking.png" alt="GPUs" width={58} height={58} />
                            </div>
                            <IwsLink href="/networking-hardware" className="text-[#333333] font-bold hover:text-[#8CC63F] transition-colors cursor-pointer">Networking Hardware Solution</IwsLink>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <IwsLink href="/networking-hardware/gb200-with-rocev2" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowSolutions(false) }}>
                                GB200 Cluster with RoCEv2 Network Solution
                              </IwsLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={pricingRef}>
                <IwsLink
                  href="/pricing"
                  className="text-gray-600 text-sm max-1207:text-xs font-medium hover:text-[#8CC63F] flex items-center"
                >
                  Pricing
                </IwsLink>

                {/* {showPricing && (
                  <div className="bg-[#F9F9F9] fixed left-0 right-0 py-6 px-8 mt-[31px] shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <ul className="space-y-2 text-sm">
                        <li className='flex flex-wrap gap-x-32 gap-y-2'>
                          <div>
                            <IwsLink href="/pricing" className="text-sm text-gray-600 hover:text-[#8CC63F] flex items-center" onClick={() => setShowProducts(false)}>
                              GPU Cloud Pricing
                            </IwsLink>
                            <ul className="pl-4 mt-2 space-y-2">
                              <li className="flex flex-wrap gap-x-20 gap-y-2">
                                <div className="flex flex-col space-y-2">
                                  <IwsLink href="/pricing#GB200" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowPricing(false) }}>NVIDIA GB200 NVL72</IwsLink>
                                  <IwsLink href="/pricing#B200" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowPricing(false) }}>NVIDIA HGX B200</IwsLink>
                                  <IwsLink href="/pricing#H100" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowPricing(false) }}>NVIDIA HGX H100</IwsLink>
                                  <IwsLink href="/pricing#H200" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowPricing(false) }}>NVIDIA HGX H200</IwsLink>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <IwsLink href="/pricing#other" className="text-sm text-gray-600 hover:text-[#8CC63F] flex items-center" onClick={() => setShowProducts(false)}>
                              Storage Pricing
                            </IwsLink>
                            <ul className="pl-4 mt-2 space-y-2">
                              <li className="flex flex-wrap gap-x-20 gap-y-2">
                                <div className="flex flex-col space-y-2">
                                  <IwsLink href="/pricing#other" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowPricing(false) }}>Network Shared Storage</IwsLink>
                                  <IwsLink href="/pricing#other" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowPricing(false) }}>Object Storage</IwsLink>
                                  <IwsLink href="/pricing#other" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowPricing(false) }}>Additional Public IP Address</IwsLink>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>

                      </ul>

                    </div>
                  </div>
                )} */}
              </div>

              {/* <div className="relative" ref={datacenterRef}>
                <button
                  className="text-gray-600 whitespace-nowrap text-sm max-1207:text-xs font-medium hover:text-[#8CC63F] flex items-center"
                  onClick={() => setShowDataCenter(!showDataCenter)}
                >
                  Data Center
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showDataCenter ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showDataCenter && (
                  <div className="bg-[#F9F9F9] fixed left-0 right-0 py-6 px-8 pl-8 mt-[31px] shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <ul className="space-y-2 text-sm">
                        <li>
                          <div>
                            <IwsLink href="/data-center/iceland" className="text-gray-600 hover:text-[#8CC63F] flex items-center" onClick={() => { setShowDataCenter(false) }}>
                              Our Data Center
                            </IwsLink>
                            <ul className="pl-4 mt-2 space-y-2">
                              <li><IwsLink href="/data-center/iceland#iceland1" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowDataCenter(false) }}>Iceland 1</IwsLink></li>
                              <li><IwsLink href="/data-center/iceland#iceland2" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowDataCenter(false) }}>Iceland 2</IwsLink></li>
                            </ul>
                            <div className='mt-2'>
                              <IwsLink href="/data-center/iceland#future-locations" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowDataCenter(false) }}>Future locations</IwsLink>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div> */}

              <div className="relative" ref={resourcesRef}>
                <button
                  className="text-gray-600 text-sm max-1207:text-xs font-medium hover:text-[#8CC63F] flex items-center"
                  onClick={() => setShowResources(!showResources)}
                >
                  Resources
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showResources ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showResources && (
                  <div className="bg-[#EEEEEE] fixed left-0 right-0 py-[40px] px-8 pl-8 mt-[31px] shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-3 gap-8">
                        {/* Tutorials */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-md flex items-center justify-center">
                              <Image src="/header/resources_ic_tutorials.png" alt="GPUs" width={58} height={58} />
                            </div>
                            <IwsLink href="/resources/tutorials" className="text-[#333333] font-bold hover:text-[#8CC63F] transition-colors cursor-pointer">Tutorials</IwsLink>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <IwsLink href="/resources/tutorials" className="text-[#999999] hover:text-[#8CC63F] text-[16px]" onClick={() => { setShowResources(false) }}>
                                Analyze Product Selection and Applications
                              </IwsLink>
                            </li>
                          </ul>
                        </div>

                        {/* Case Studies */}
                        <div className="space-y-3 border-l border-[#FFFFFF] pl-8">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-md flex items-center justify-center">
                              <Image src="/header/resources_ic_casestudies.png" alt="GPUs" width={58} height={58} />
                            </div>
                            <IwsLink href="/resources/case-study" className="text-[#333333] font-bold hover:text-[#8CC63F] transition-colors cursor-pointer">Case Studies</IwsLink>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <IwsLink href="/resources/case-study" className="text-[#999999] hover:text-[#8CC63F] text-[16px]" onClick={() => { setShowResources(false) }}>
                                Real Customers, Real Growth with Canopy Wave
                              </IwsLink>
                            </li>
                          </ul>
                        </div>

                        {/* Docs */}
                        <div className="space-y-3 border-l border-[#FFFFFF] pl-8">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-md flex items-center justify-center">
                              <Image src="/header/resources_ic_docs.png" alt="GPUs" width={58} height={58} />
                            </div>
                            <IwsLink href="/resources/docs/cw-cloud-account/quick-start" className="text-[#333333] font-bold hover:text-[#8CC63F] transition-colors cursor-pointer">Docs</IwsLink>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <IwsLink href="/resources/docs/cw-cloud-account/quick-start" className="text-[#999999] hover:text-[#8CC63F] text-[16px]" onClick={() => { setShowResources(false) }}>
                                Analyze Product Selection and Applications
                              </IwsLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={aboutRef}>
                <button
                  className="text-gray-600 text-sm max-1207:text-xs font-medium hover:text-[#8CC63F] flex items-center"
                  onClick={() => setShowAbout(!showAbout)}
                >
                  About
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showAbout ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showAbout && (
                  <div className="bg-[#EEEEEE] fixed left-0 right-0 py-[40px] px-8 pl-8 mt-[31px] shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-4 gap-8">
                        {/* About Us */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-md flex items-center justify-center">
                              <Image src="/header/about_ic_aboutus.png" alt="GPUs" width={58} height={58} />
                            </div>
                            <IwsLink href="/about" className="text-[#333333] font-bold hover:text-[#8CC63F]" onClick={() => setShowAbout(false)}>About Us</IwsLink>
                          </div>
                          <div>
                            <IwsLink href="/about" className="text-[#999999] hover:text-[#8CC63F] text-[16px]" onClick={() => { setShowAbout(false) }}>
                              An overview of Canopy Wave Group
                            </IwsLink>
                          </div>
                        </div>

                        {/* Careers */}
                        <div className="space-y-3 border-l border-[#FFFFFF] pl-8">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-md flex items-center justify-center">
                              <Image src="/header/about_ic_careers.png" alt="GPUs" width={58} height={58} />
                            </div>
                            <IwsLink href="/about/careers" className="text-[#333333] font-bold hover:text-[#8CC63F]" onClick={() => setShowAbout(false)}>Careers</IwsLink>
                          </div>
                          <div>
                            <IwsLink href="/about/careers" className="text-[#999999] hover:text-[#8CC63F] text-[16px]" onClick={() => { setShowAbout(false) }}>
                              Blog&Events&Case Studies
                            </IwsLink>
                          </div>
                        </div>

                        {/* Data Center */}
                        <div className="space-y-3 border-l border-[#FFFFFF] pl-8">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-md flex items-center justify-center">
                              <Image src="/header/about_ic_data.png" alt="GPUs" width={58} height={58} />
                            </div>
                            <IwsLink href="/data-center/iceland" className="text-[#333333] font-bold hover:text-[#8CC63F]" onClick={() => setShowAbout(false)}>Data Center</IwsLink>
                          </div>
                          <div>
                            <IwsLink href="/data-center/iceland" className="text-[#999999] hover:text-[#8CC63F] text-[16px]" onClick={() => { setShowAbout(false) }}>
                              Introduction to data center
                            </IwsLink>
                          </div>
                        </div>

                        {/* Newsroom */}
                        <div className="space-y-3 border-l border-gray-200 pl-8">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-md flex items-center justify-center">
                              <Image src="/header/about_ic_newsroom.png" alt="GPUs" width={58} height={58} />
                            </div>
                            <IwsLink href="/about/newsroom" className="text-[#333333] font-bold hover:text-[#8CC63F]" onClick={() => setShowAbout(false)}>Newsroom</IwsLink>
                          </div>
                          <div>
                            <IwsLink href="/about/newsroom" className="text-[#999999] hover:text-[#8CC63F] text-[16px]" onClick={() => { setShowAbout(false) }}>
                              Join our mission
                            </IwsLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* 右侧按钮组 */}
          <div className="hidden custom:flex items-center space-x-4">
            <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>Go to Canopy Wave Cloud</Button>
            <IwsLink href="/contact">
              <Button variant="outline" className="text-sm max-1207:text-xs">Contact Us</Button>
            </IwsLink>
          </div>

          {/* 移动端折叠导航 */}
          <div className="-mr-2 flex items-center custom:hidden">
            <button
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out"
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
            >

              <span className="sr-only">Open main menu</span>
              {/* 根据菜单状态显示不同的图标 */}
              {isOpen ? (
                // X形状图标 - 当菜单打开时显示
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // 三条横线图标 - 当菜单关闭时显示
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端折叠菜单 */}
      <div
        className={`md:hidden no-scrollbar ${isOpen ? '' : 'hidden'}`}
        id="mobile-menu"
        style={{
          maxHeight: 'calc(100vh - 80px)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <div className="relative">
            <button
              className={`flex items-center block w-full text-left text-gray-600 ${activeMenu === 'products' ? 'bg-gray-200' : ''} px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => {
                setShowMobileProducts(!showMobileProducts);
                setActiveMenu('products');
              }}
            >
              Products
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showMobileProducts ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {showMobileProducts && (
              <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                <li>
                  <IwsLink
                    href="/compute-services"
                    className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 rounded justify-between"
                    onClick={closeMobileMenu}
                  >
                    <span>Compute Services</span>
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </IwsLink>
                  <ul className={`pl-4 mt-2 space-y-2`}>
                    <li><IwsLink href="/gb200-nvl72" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}><span>NVIDIA GB200 NVL72 <span className='flash'>NEW</span></span></IwsLink></li>
                    <li><IwsLink href="/hgx-b200" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}><span>NVIDIA HGX B200 <span className='flash'>NEW</span></span></IwsLink></li>
                    <li><IwsLink href="/compute-services#hgx-h200" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>NVIDIA HGX H200</IwsLink></li>
                    <li><IwsLink href="/compute-services#hgx-h100" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>NVIDIA HGX H100</IwsLink></li>
                    <li><IwsLink href="/compute-services#cpu-node" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>CPU Nodes</IwsLink></li>
                    <li><IwsLink href="/compute-services#bare-metal" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Bare Metal GPU Cluster</IwsLink></li>
                  </ul>
                </li>
                <li>
                  <IwsLink
                    href="/storage-services"
                    className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 rounded justify-between"
                    onClick={closeMobileMenu}
                  >
                    <span>Storage Services</span>
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </IwsLink>
                  <ul className={`pl-4 mt-2 space-y-2`}>
                    <li><IwsLink href="/storage-services#local-storage" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Local Storage</IwsLink></li>
                    <li><IwsLink href="/storage-services#shared-storage" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Shared Storage</IwsLink></li>
                    <li><IwsLink href="/storage-services#object-storage" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Object Storage</IwsLink></li>
                  </ul>
                </li>
                <li>
                  <IwsLink
                    href="/networking-services"
                    className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 rounded justify-between"
                    onClick={closeMobileMenu}
                  >
                    <span>Networking Services</span>
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </IwsLink>
                  <ul className={`pl-4 mt-2 space-y-2`}>
                    <li><IwsLink href="/networking-services#infiniband-networking" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>InfiniBand Networking</IwsLink></li>
                    <li><IwsLink href="/networking-services#private-cloud" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>RoCEv2 Networking</IwsLink></li>
                  </ul>
                </li>
                <li>
                  <IwsLink
                    href="/platform"
                    className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 rounded justify-between"
                    onClick={closeMobileMenu}
                  >
                    <span>Platform</span>
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </IwsLink>
                  <ul className={`pl-4 mt-2 space-y-2`}>
                    <li><IwsLink href="/platform#dcim-platform" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Canopy Wave DCIM Platform</IwsLink></li>
                    <li><IwsLink href="/platform#cloud-platform" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Canopy Wave Cloud Platform</IwsLink></li>
                  </ul>
                </li>

              </ul>
            )}
          </div>

          <div className="relative">
            <button
              className={`flex items-center block w-full text-left text-gray-600 ${activeMenu === 'solutions' ? 'bg-gray-200' : ''} px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => {
                setShowMobileSolutions(!showMobileSolutions);
                setActiveMenu('solutions');
              }}
            >
              Solutions
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showMobileSolutions ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {showMobileSolutions && (
              <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                <li><IwsLink href="/model-training" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>AI Model Training</IwsLink></li>
                <li><IwsLink href="/inferences" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Inference</IwsLink></li>
                <li><IwsLink href="/rendering" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Rendering</IwsLink></li>
                <li><IwsLink href="/private-cloud" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Private Cloud and GPUs Deployment</IwsLink></li>
                <li><IwsLink href="/networking-hardware" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Networking Hardware Solution</IwsLink></li>
                <li><IwsLink href="/networking-hardware/gb200-with-rocev2" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>GB200 Cluster with RoCEv2 Network Solution</IwsLink></li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button
              className={`flex items-center block w-full text-left text-gray-600 ${activeMenu === 'pricing' ? 'bg-gray-200' : ''} px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => {
                setShowMobilePricing(!showMobilePricing);
                setActiveMenu('pricing');
              }}
            >
              Pricing
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showMobilePricing ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {showMobilePricing && (
              <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                <li>
                  <div>
                    <button
                      className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 rounded flex justify-between items-center"
                      onClick={() => window.location.href = '/pricing'}
                    >
                      <span>GPU Cloud Pricing</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-200`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600 ">
                      <li><IwsLink href="/pricing#GB200" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>NVIDIA GB200 NVL72</IwsLink></li>
                      <li><IwsLink href="/pricing#B200" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>NVIDIA HGX B200</IwsLink></li>
                      <li><IwsLink href="/pricing#H100" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>NVIDIA HGX H100</IwsLink></li>
                      <li><IwsLink href="/pricing#H200" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>NVIDIA HGX H200</IwsLink></li>
                    </ul>

                  </div>
                </li>
                <li>
                  <div>
                    <button
                      className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 rounded flex justify-between items-center"
                      onClick={() => window.location.href = "/pricing#other"}
                    >
                      <span>Storage Pricing</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-200`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600 ">
                      <li><IwsLink href="/pricing#other" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Network Shared Storage</IwsLink></li>
                      <li><IwsLink href="/pricing#other" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Object Storage</IwsLink></li>
                      <li><IwsLink href="/pricing#other" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Additional Public IP Address</IwsLink></li>
                    </ul>

                  </div>
                </li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button
              className={`flex items-center block w-full text-left text-gray-600 ${activeMenu === 'datacenter' ? 'bg-gray-200' : ''} px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => {
                setShowMobileDataCenter(!showMobileDataCenter);
                setActiveMenu('datacenter');
              }}
            >
              Data Center
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showMobileDataCenter ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {showMobileDataCenter && (
              <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                <li>
                  <div>
                    <button
                      className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 rounded flex justify-between items-center"
                      onClick={() => window.location.href = '/data-center/iceland'}
                    >
                      <span>Our Data Center</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-200`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <ul className={`pl-4 mt-2 space-y-2`}>
                      <li><IwsLink href="/data-center/iceland#iceland1" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={() => { setShowDataCenter(false) }}>Iceland 1</IwsLink></li>
                      <li><IwsLink href="/data-center/iceland#iceland2" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={() => { setShowDataCenter(false) }}>Iceland 2</IwsLink></li>
                    </ul>
                    <ul className="pl-2 mt-1 py-1 hover:bg-gray-100">
                      <li>
                        <IwsLink href="/data-center/iceland#future-locations" className="text-gray-600 hover:text-[#8CC63F] text-sm" onClick={() => { setShowDataCenter(false) }}>Future locations</IwsLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button
              className={`flex items-center block w-full text-left text-gray-600 ${activeMenu === 'resources' ? 'bg-gray-200' : ''} px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => {
                setShowMobileResources(!showMobileResources);
                setActiveMenu('resources');
              }}
            >
              Resources
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showMobileResources ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {showMobileResources && (
              <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                <li><IwsLink href="/resources/tutorials" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Tutorials</IwsLink></li>
                <li><IwsLink href="/resources/case-study" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Case Studies</IwsLink></li>
                <li><IwsLink href="/resources/docs/cw-cloud-account/quick-start" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Docs</IwsLink></li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button
              className={`flex items-center block w-full text-left text-gray-600 ${activeMenu === 'about' ? 'bg-gray-200' : ''} px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => {
                setShowMobileAbout(!showMobileAbout);
                setActiveMenu('about');
              }}
            >
              About
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showMobileAbout ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {showMobileAbout && (
              <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600 ">
                <li><IwsLink href="/about" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>About Us</IwsLink></li>
                <li><IwsLink href="/about/careers" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Careers</IwsLink></li>
                <div>
                  <button
                    className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 rounded flex justify-between items-center"
                    onClick={() => window.location.href = '/about/newsroom'}
                  >
                    <span>Newsroom</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-200`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <ul className={`pl-4 mt-2 space-y-2`}>
                    <li><IwsLink href="/about/newsroom#blog" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Blog</IwsLink></li>
                    <li><IwsLink href="/about/newsroom#events" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Events</IwsLink></li>
                  </ul>
                </div>
              </ul>
            )}
          </div>
          <div className="mt-4 space-y-2">
            {/* 新增 Canopy Wave Cloud 按钮 */}
            <div className="relative">
              <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                Go to Canopy Wave Cloud
              </Button>
            </div>
            {/* 新增 Contact US 按钮 */}
            <div className="relative mt-2">
              <Button variant="outline" className="text-gray-600 hover:text-[#8CC63F] w-full sm:w-auto" onClick={() => window.location.href = '/contact'}>

                Contact US
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

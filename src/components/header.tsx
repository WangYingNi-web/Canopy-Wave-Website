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
  const currentRouter = routerList.find((e) => e.path === router.asPath)?.name

  const [showProducts, setShowProducts] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showDataCenter, setShowDataCenter] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showAbout, setShowAbout] = useState(false);


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

  // const reloadClick = () => {
  //   router.push('/').then(() => {
  //     router.reload();
  //   });
  // };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowProducts(false);
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#F9F9F9] border-y-2 border-gray-200 fixed top-0 left-0 right-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <span className="whitespace-nowrap text-sm font-bold text-gray-600 ml-2">Canopy Wave</span>
              </IwsLink>
            </div>
          </div>

          {/* 中间导航部分 */}
          <div className="hidden custom:flex flex-1 justify-center">
            <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6">
              <div className="relative text-sm" ref={menuRef}>
                <button
                  className="text-gray-600 text-sm max-1207:text-xs font-medium hover:text-gray-900 flex items-center"
                  onClick={() => setShowProducts(!showProducts)}
                >
                  Products
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
                  <div className="bg-[#F9F9F9] fixed left-0 right-0 py-6 mt-[31px] shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-4 gap-8">
                        <div>
                          <h3 className="font-semibold mb-4">
                            <IwsLink href="/compute-services" className="text-gray-900 hover:text-[#8CC63F] flex items-center" onClick={() => setShowProducts(false)}>
                              Compute Services
                              <svg
                                className="w-4 h-4 ml-1"
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
                          </h3>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <div>
                                <IwsLink href="/compute-services#gpu-cloud" className="text-sm text-gray-600 hover:text-[#8CC63F] flex items-center" onClick={() => setShowProducts(false)}>
                                  GPU Cloud on-demand Cluster
                                  <svg
                                    className="w-4 h-4 ml-1"
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
                                <ul className="pl-4 mt-2 space-y-2">
                                  <li><IwsLink href="/compute-services#hgx-h200" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowProducts(false)}>NVIDIA HGX H200</IwsLink></li>
                                  <li><IwsLink href="/compute-services#hgx-h100" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowProducts(false)}>NVIDIA HGX H100</IwsLink></li>
                                </ul>
                              </div>
                            </li>
                            <li><IwsLink href="/compute-services#cpu-node" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowProducts(false)}>CPU Nodes</IwsLink></li>
                            <li><IwsLink href="/compute-services#bare-metal" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowProducts(false)}>Bare Metal GPU Cluster</IwsLink></li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-4">
                            <IwsLink href="/storage-services" className="flex items-center text-gray-900 hover:text-[#8CC63F]" onClick={() => setShowProducts(false)}>
                              Storage Services
                              <svg
                                className="w-4 h-4 ml-1"
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
                          </h3>
                          <ul className="space-y-2 text-sm">
                            <li><IwsLink href="/storage-services#local-storage" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowProducts(false)}>Local Storage</IwsLink></li>
                            <li><IwsLink href="/storage-services#shared-storage" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowProducts(false)}>Shared Storage</IwsLink></li>
                            <li><IwsLink href="/storage-services#object-storage" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowProducts(false)}>Object Storage</IwsLink></li>
                            {/* <li><IwsLink href="/storage-services#cloud-storage" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowProducts(false)}>Cloud Storage</IwsLink></li>
                            <li><IwsLink href="/storage-services#rdma-storage" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowProducts(false)}>RDMA Storage</IwsLink></li> */}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-4">
                            <IwsLink href="/networking-services" className="flex items-center text-gray-900 hover:text-[#8CC63F]" onClick={() => setShowProducts(false)}>
                              Networking Services
                              <svg
                                className="w-4 h-4 ml-1"
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
                          </h3>
                          <ul className="space-y-2 text-sm">
                            <li><IwsLink href="/networking-services#infiniband-networking" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowProducts(false)}>InfiniBand Networking</IwsLink></li>
                            <li><IwsLink href="/networking-services#private-cloud" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowProducts(false)}>RoCEv2 Networking</IwsLink></li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-4">
                            <IwsLink href="/platform" className="flex items-center text-gray-900 hover:text-[#8CC63F]" onClick={() => setShowProducts(false)}>
                              Platform
                              <svg
                                className="w-4 h-4 ml-1"
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
                          </h3>
                          <ul className="space-y-2 text-sm">
                            <li><IwsLink href="/platform#dcim-platform" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowProducts(false)}>Canopy DCIM Platform</IwsLink></li>
                            <li><IwsLink href="/platform#cloud-platform" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowProducts(false)}>Wave GPU cloud platform</IwsLink></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={solutionsRef}>
                <button
                  className="text-gray-600 text-sm max-1207:text-xs font-medium hover:text-gray-900 flex items-center"
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
                  <div className="bg-[#F9F9F9] fixed left-0 right-0 py-6 px-8 pl-8 mt-[31px] shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <ul className="space-y-2 text-sm">
                        <li><IwsLink href="/model-training" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowSolutions(false) }}>AI Model Training</IwsLink></li>
                        <li><IwsLink href="/inference" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowSolutions(false) }}>Inference</IwsLink></li>
                        <li><IwsLink href="/rendering" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowSolutions(false) }}>Rendering</IwsLink></li>
                        <li><IwsLink href="/private-cloud" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowSolutions(false) }}>Private Cloud and GPUs Deployment</IwsLink></li>
                        <li><IwsLink href="/networking-hardware" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowSolutions(false) }}>Networking Hardware Solution</IwsLink></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={pricingRef}>
                <button
                  className="text-gray-600 text-sm max-1207:text-xs font-medium hover:text-gray-900 flex items-center"
                  onClick={() => setShowPricing(!showPricing)}
                >
                  Pricing
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showPricing ? 'rotate-180' : ''}`}
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

                {showPricing && (
                  <div className="bg-[#F9F9F9] fixed left-0 right-0 py-6 px-8 mt-[31px] shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <ul className="space-y-2 text-sm">
                        <li>
                          <div>
                            <IwsLink href="/pricing" className="text-sm text-gray-600 hover:text-[#8CC63F] flex items-center" onClick={() => setShowProducts(false)}>
                              GPU Cloud Pricing
                              <svg
                                className="w-4 h-4 ml-1"
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
                            <ul className="pl-4 mt-2 space-y-2">
                              <li><IwsLink href="/pricing#H100" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowPricing(false) }}>NVIDIA HGX H100</IwsLink></li>
                              <li><IwsLink href="/pricing#H200" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowPricing(false) }}>NVIDIA HGX H200</IwsLink></li>
                              <li><IwsLink href="/pricing#other" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowPricing(false) }}>Network Shared Storage</IwsLink></li>
                              <li><IwsLink href="/pricing#other" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowPricing(false) }}>Object Storage</IwsLink></li>
                              <li><IwsLink href="/pricing#other" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowPricing(false) }}>Additional Public IP Address</IwsLink></li>
                            </ul>

                          </div>
                        </li>

                      </ul>

                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={datacenterRef}>
                <button
                  className="text-gray-600 whitespace-nowrap text-sm max-1207:text-xs font-medium hover:text-gray-900 flex items-center"
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
                              Our Datacenter
                              <svg
                                className="w-4 h-4 ml-1"
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
                            <ul className="pl-4 mt-2 space-y-2">
                              <li><IwsLink href="/data-center/iceland#iceland1" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowDataCenter(false) }}>Iceland 1</IwsLink></li>
                              <li><IwsLink href="/data-center/iceland#iceland2" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowDataCenter(false) }}>Iceland 2</IwsLink></li>
                            </ul>
                            <div className='mt-2'>
                              <IwsLink href="/data-center/iceland#future-locations" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowDataCenter(false) }}>Future locations</IwsLink>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={resourcesRef}>
                <button
                  className="text-gray-600 text-sm max-1207:text-xs font-medium hover:text-gray-900 flex items-center"
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
                  <div className="bg-[#F9F9F9] fixed left-0 right-0 py-6 px-8 pl-8 mt-[31px] shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <ul className="space-y-2 text-sm">
                        <li><IwsLink href="/cloud-api" className="text-gray-600 hover:text-gray-900 text-sm">Manage Cloud Via API</IwsLink></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={aboutRef}>
                <button
                  className="text-gray-600 text-sm max-1207:text-xs font-medium hover:text-gray-900 flex items-center"
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
                  <div className="bg-[#F9F9F9] fixed left-0 right-0 py-6 px-8 pl-8 mt-[31px] shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <ul className="space-y-2 text-sm">
                        <li><IwsLink href="/about" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowAbout(false)}>About Us</IwsLink></li>
                        <li><IwsLink href="/about/careers" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowAbout(false)}>Careers</IwsLink></li>
                        <div>
                          <IwsLink href="/about/newsroom" className="text-gray-600 hover:text-[#8CC63F] flex items-center" onClick={() => setShowAbout(false)}>
                            Newsroom
                            <svg
                              className="w-4 h-4 ml-1"
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
                          <ul className="pl-4 mt-2 space-y-2">
                            <li><IwsLink href="/about/newsroom#blog" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowAbout(false)}>Blog</IwsLink></li>
                            <li><IwsLink href="/about/newsroom#events" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => setShowAbout(false)}>Events</IwsLink></li>
                          </ul>
                        </div>
                      </ul>
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
              {/* Heroicon name: menu */}
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
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
              className={`flex items-center block w-full text-left text-gray-600 ${currentRouter === 'home' ? 'bg-gray-200' : ''
                } px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setShowMobileProducts(!showMobileProducts)}
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
                  <button
                    className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 rounded flex justify-between items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowMobileSubMenu(showMobileSubMenu === 'compute' ? null : 'compute');
                    }}
                  >
                    <span>Compute Services</span>
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showMobileSubMenu === 'compute' ? 'rotate-180' : ''}`}
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
                  <ul className={`pl-4 mt-2 space-y-2 ${showMobileSubMenu === 'compute' ? 'block' : 'hidden'}`}>
                    <IwsLink href="/compute-services#hgx-h200" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>NVIDIA HGX H200</IwsLink>
                    <li><IwsLink href="/compute-services#hgx-h100" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>NVIDIA HGX H100</IwsLink></li>
                    <li><IwsLink href="/compute-services#cpu-node" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>CPU Nodes</IwsLink></li>
                    <li><IwsLink href="/compute-services#bare-metal" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Bare Metal GPU Cluster</IwsLink></li>
                  </ul>
                </li>
                <li>
                  <button
                    className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded flex justify-between items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowMobileSubMenu(showMobileSubMenu === 'storage' ? null : 'storage');
                    }}
                  >
                    <span>Storage Services</span>
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showMobileSubMenu === 'storage' ? 'rotate-180' : ''}`}
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
                  <ul className={`pl-4 mt-2 space-y-2 ${showMobileSubMenu === 'storage' ? 'block' : 'hidden'}`}>
                    <li><IwsLink href="/storage-services#local-storage" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Local Storage</IwsLink></li>
                    <li><IwsLink href="/storage-services#shared-storage" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Shared Storage</IwsLink></li>
                    <li><IwsLink href="/storage-services#object-storage" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Object Storage</IwsLink></li>
                  </ul>
                </li>
                <li>
                  <button
                    className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded flex justify-between items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowMobileSubMenu(showMobileSubMenu === 'networking' ? null : 'networking');
                    }}
                  >
                    <span>Networking Services</span>
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showMobileSubMenu === 'networking' ? 'rotate-180' : ''}`}
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
                  <ul className={`pl-4 mt-2 space-y-2 ${showMobileSubMenu === 'networking' ? 'block' : 'hidden'}`}>
                    <li><IwsLink href="/networking-hardware" onClick={closeMobileMenu}>Networking Hardware Solution</IwsLink></li>
                  </ul>
                </li>
                <li>
                  <button
                    className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded flex justify-between items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowMobileSubMenu(showMobileSubMenu === 'platform' ? null : 'platform');
                    }}
                  >
                    <span>Platform</span>
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showMobileSubMenu === 'platform' ? 'rotate-180' : ''}`}
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
                  <ul className={`pl-4 mt-2 space-y-2 ${showMobileSubMenu === 'platform' ? 'block' : 'hidden'}`}>
                    <li><IwsLink href="/platform#dcim-platform" className="text-gray-600 hover:text-gray-900 text-sm" onClick={closeMobileMenu}>Canopy DCIM Platform</IwsLink></li>
                    <li><IwsLink href="/platform#cloud-platform" className="text-gray-600 hover:text-gray-900 text-sm" onClick={closeMobileMenu}>Wave GPU cloud platform</IwsLink></li>
                  </ul>
                </li>
              </ul>
            )}
          </div>

          <div className="relative">
            <button
              className={`flex items-center block w-full text-left text-gray-600 hover:bg-gray-200 ${currentRouter === 'solutions' ? 'bg-gray-200' : ''
                } px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setShowMobileSolutions(!showMobileSolutions)}
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
                <li><IwsLink href="/model-training" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Model Training</IwsLink></li>
                <li><IwsLink href="/inference" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Inference</IwsLink></li>
                <li><IwsLink href="/rendering" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Rendering</IwsLink></li>
                <li><IwsLink href="/private-cloud" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Private Cloud and GPUs Deployment</IwsLink></li>
                <li><IwsLink href="/networking-hardware" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Networking Hardware Solution</IwsLink></li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button
              className={`flex items-center block w-full text-left text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setShowMobilePricing(!showMobilePricing)}
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
                      onClick={(e) => {
                        e.preventDefault();
                        setShowDataCenterSubMenu(!showDataCenterSubMenu)
                      }}
                    >
                      <span>GPU Cloud Pricing</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-200 ${showDataCenterSubMenu ? 'rotate-180' : ''}`}
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
                    {showDataCenterSubMenu && (
                      <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600 ">
                        <li><IwsLink href="/pricing#H100" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>NVIDIA HGX H100</IwsLink></li>
                        <li><IwsLink href="/pricing#H200" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>NVIDIA HGX H200</IwsLink></li>
                        <li><IwsLink href="/pricing#other" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Network Shared Storage</IwsLink></li>
                        <li><IwsLink href="/pricing#other" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Object Storage</IwsLink></li>
                        <li><IwsLink href="/pricing#other" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Additional Public IP Address</IwsLink></li>
                      </ul>
                    )}
                  </div>
                </li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button
              className={`flex items-center block w-full text-left text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setShowMobileDataCenter(!showMobileDataCenter)}
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
                      onClick={(e) => {
                        e.preventDefault();
                        setShowDataCenterSubMenu(!showDataCenterSubMenu)
                      }}
                    >
                      <span>Our Datacenter</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-200 ${showDataCenterSubMenu ? 'rotate-180' : ''}`}
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

                    {showDataCenterSubMenu && (
                      <ul className={`pl-4 mt-2 space-y-2`}>
                        <li><IwsLink href="/data-center/iceland#iceland1" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={() => { setShowDataCenter(false) }}>Iceland 1</IwsLink></li>
                        <li><IwsLink href="/data-center/iceland#iceland2" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={() => { setShowDataCenter(false) }}>Iceland 2</IwsLink></li>
                      </ul>
                    )}
                    <ul className="pl-2 mt-1 py-1 hover:bg-gray-100">
                      <li>
                        <IwsLink href="/data-center/iceland#future-locations" className="text-gray-600 hover:text-gray-900 text-sm" onClick={() => { setShowDataCenter(false) }}>Future locations</IwsLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button
              className={`flex items-center block w-full text-left text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setShowMobileResources(!showMobileResources)}
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
                <li><IwsLink href="/cloud-api" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Manage Cloud Via API</IwsLink></li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button
              className={`flex items-center block w-full text-left text-gray-600 hover:bg-gray-200
              px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setShowMobileAbout(!showMobileAbout)}
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
                    onClick={(e) => {
                      e.preventDefault();
                      setshowAboutSubMenu(!showAboutSubMenu)
                    }}
                  >
                    <span>Newsroom</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-200 ${showAboutSubMenu ? 'rotate-180' : ''}`}
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
                  {showAboutSubMenu && (
                    <ul className={`pl-4 mt-2 space-y-2`}>
                      <li><IwsLink href="/about/newsroom#blog" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Blog</IwsLink></li>
                      <li><IwsLink href="/about/newsroom#events" className="block px-2 py-1 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Events</IwsLink></li>
                    </ul>
                  )}
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
              <Button variant="outline" className="text-gray-600 hover:text-gray-900 w-full sm:w-auto" onClick={() => window.location.href = '/contact'}>

                Contact US
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

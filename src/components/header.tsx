"use client";

import Image from 'next/image'
import IwsLink from './IwsLink'
import { useRouter } from 'next/router'
import { router as routerList } from './../router'
import { useState, useEffect, useRef } from 'react';
import { ModeToggle } from '@/components/mode-toggle'

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


  const menuRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const datacenterRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);


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
    <nav className="bg-white border-y-2 border-gray-200 dark:bg-slate-800 dark:border-gray-600 fixed top-0 left-0 right-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* 左侧 logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <IwsLink href="/" className="flex items-center">
                <Image
                  src="/canopy.png"
                  alt="Canopy Wave Logo"
                  width={50}
                  height={50}
                  priority
                />
                <span className="font-bold text-gray-600 ml-2">Canopy Wave</span>
              </IwsLink>
            </div>
          </div>

          {/* 右侧导航部分 */}
          <div className="hidden md:flex flex-1 justify-between items-center">
            {/* 导航菜单居中 */}
            <div className="flex-1"></div>
              <div className="flex items-center space-x-4 h-16">


                
                <div className="relative" ref={menuRef}>
                  <button
                    className="text-gray-600 text-sm font-medium hover:text-gray-900 flex items-center"
                    onClick={() => setShowProducts(!showProducts)}
                  >
                    Products
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
                  </button>

                  {showProducts && (
                    <div className="fixed left-0 right-0 py-6 mt-8 bg-white shadow-lg border-t border-gray-100 z-50">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-4 gap-8">
                          <div>
                            <h3 className="font-semibold mb-4">
                              <IwsLink href="/compute-services" className="text-gray-900 hover:text-[#8CC63F]">
                                Compute Services
                                <span className="inline-block ml-1">▼</span>
                              </IwsLink>
                            </h3>
                            <ul className="space-y-2 text-sm">
                              <li>
                                <div>
                                  <IwsLink href="/compute-services" className="text-gray-600 hover:text-gray-900">
                                    GPU Cloud on-demand Cluster
                                    <span className="inline-block ml-1">▼</span>
                                  </IwsLink>
                                  <ul className="pl-4 mt-2 space-y-2">
                                    <li><IwsLink href="/compute-services#hgx-h100" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>NVIDIA HGX H100</IwsLink></li>
                                    <li><IwsLink href="/compute-services#hgx-h200" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>NVIDIA HGX H200</IwsLink></li>
                                  </ul>
                                </div>
                              </li>
                              <li><IwsLink href="/compute-services#cpu-node" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>CPU Nodes</IwsLink></li>
                              <li><IwsLink href="/compute-services#gpu-reserve" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>GPU Cloud Reserve Cluster</IwsLink></li>
                              <li><IwsLink href="/compute-services#bare-metal" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>Bare Metal Services</IwsLink></li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-4">
                              <IwsLink href="/storage-services" className="text-gray-900 hover:text-[#8CC63F]">
                                Storage Services
                              </IwsLink>
                            </h3>
                            <ul className="space-y-2 text-sm">
                              <li><IwsLink href="/storage-services#local-storage" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>Local Storage</IwsLink></li>
                              <li><IwsLink href="/storage-services#object-storage" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>Object Storage</IwsLink></li>
                              <li><IwsLink href="/storage-services#cloud-storage" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>Cloud Storage</IwsLink></li>
                              <li><IwsLink href="/storage-services#rdma-storage" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>RDMA Storage</IwsLink></li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-4">
                              <IwsLink href="/networking-services" className="text-gray-900 hover:text-[#8CC63F]">
                                Networking Services
                              </IwsLink>
                            </h3>
                            <ul className="space-y-2 text-sm">
                              <li><IwsLink href="/networking-services#infiniband-networking" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>InfiniBand Networking</IwsLink></li>
                              <li><IwsLink href="/networking-services#private-cloud" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>RoceV2 Networking</IwsLink></li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-4">
                              <IwsLink href="/platform" className="text-gray-900 hover:text-[#8CC63F]">
                                Platform
                              </IwsLink>
                            </h3>
                            <ul className="space-y-2 text-sm">
                              <li><IwsLink href="/platform/dcim-platform" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>Canopy DCIM Platform</IwsLink></li>
                              <li><IwsLink href="/platform/cloud-platform" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>Wave GPU cloud platform</IwsLink></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative" ref={solutionsRef}>
                  <button
                    className="text-gray-600 text-sm font-medium hover:text-gray-900 flex items-center"
                    onClick={() => setShowSolutions(!showSolutions)}
                  >
                    Solutions
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
                  </button>

                  {showSolutions && (
                    <div className="fixed left-0 right-0 py-6 px-8 pl-8 mt-8 bg-white shadow-lg border-t border-gray-100 z-50">
                       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ul className="space-y-2 text-sm">
                          <li><IwsLink href="/model-training" className="text-gray-600 hover:text-gray-900" onClick={() => { setShowSolutions(false) }}>Model Training</IwsLink></li>
                          <li><IwsLink href="/inference" className="text-gray-600 hover:text-gray-900" onClick={() => { setShowSolutions(false) }}>Inference</IwsLink></li>
                          <li><IwsLink href="/rendering" className="text-gray-600 hover:text-gray-900" onClick={() => { setShowSolutions(false) }}>Rendering</IwsLink></li>
                          <li><IwsLink href="/private-cloud" className="text-gray-600 hover:text-gray-900" onClick={() => { setShowSolutions(false) }}>Private Cloud</IwsLink></li>
                          <li><IwsLink href="/gpu-cluster-management" className="text-gray-600 hover:text-gray-900" onClick={() => { setShowSolutions(false) }}>GPUs Cluster bring up and management</IwsLink></li>
                          <li><IwsLink href="/networking-hardware" className="text-gray-600 hover:text-gray-900" onClick={() => { setShowSolutions(false) }}>Networking Hardware Solution</IwsLink></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative" ref={pricingRef}>
                  <button
                    className="text-gray-600 text-sm font-medium hover:text-gray-900 flex items-center"
                    onClick={() => setShowPricing(!showPricing)}
                  >
                    Pricing
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
                  </button>

                  {showPricing && (
                    <div className="fixed left-0 right-0 py-6 px-8 mt-8 bg-white shadow-lg border-t border-gray-100 z-50">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ul className="space-y-2 text-sm">
                          <li><IwsLink href="/pricing" className="text-gray-600 hover:text-gray-900" onClick={() => { setShowPricing(false) }}>NVIDIA HGX H100</IwsLink></li>
                          <li><IwsLink href="/pricing" className="text-gray-600 hover:text-gray-900" onClick={() => { setShowPricing(false) }}>NVIDIA HGX H200</IwsLink></li>
                          <li><IwsLink href="/pricing" className="text-gray-600 hover:text-gray-900" onClick={() => { setShowPricing(false) }}>CPU NODE</IwsLink></li>
                          <li><IwsLink href="/pricing" className="text-gray-600 hover:text-gray-900" onClick={() => { setShowPricing(false) }}>Cloud Storage</IwsLink></li>
                          <li><IwsLink href="/pricing" className="text-gray-600 hover:text-gray-900" onClick={() => { setShowPricing(false) }}>RDMA Storage</IwsLink></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative" ref={datacenterRef}>
                  <button
                    className="text-gray-600 text-sm font-medium hover:text-gray-900 flex items-center"
                    onClick={() => setShowDataCenter(!showDataCenter)}
                  >
                    Data Center
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
                  </button>

                  {showDataCenter && (
                    <div className="fixed left-0 right-0 py-6 px-8 pl-8 mt-8 bg-white shadow-lg border-t border-gray-100 z-50">
                       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ul className="space-y-2 text-sm">
                          <li><IwsLink href="/data-center/US" className="text-gray-600 hover:text-gray-900">US 1</IwsLink></li>
                          <li><IwsLink href="/Canada" className="text-gray-600 hover:text-gray-900">Canada 1</IwsLink></li>
                          <li><IwsLink href="/Iceland1" className="text-gray-600 hover:text-gray-900">Iceland 1</IwsLink></li>
                          <li><IwsLink href="/Iceland2" className="text-gray-600 hover:text-gray-900">Iceland 2</IwsLink></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative" ref={resourcesRef}>
                  <button
                    className="text-gray-600 text-sm font-medium hover:text-gray-900 flex items-center"
                    onClick={() => setShowResources(!showResources)}
                  >
                    Resources
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
                  </button>

                  {showResources && (
                    <div className="fixed left-0 right-0 py-6 px-8 pl-8 mt-8 bg-white shadow-lg border-t border-gray-100 z-50">
                       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ul className="space-y-2 text-sm">
                          <li><IwsLink href="/US" className="text-gray-600 hover:text-gray-900">补充</IwsLink></li>
                          <li><IwsLink href="/US" className="text-gray-600 hover:text-gray-900">补充</IwsLink></li>
                          <li><IwsLink href="/US" className="text-gray-600 hover:text-gray-900">补充</IwsLink></li>
                          <li><IwsLink href="/US" className="text-gray-600 hover:text-gray-900">补充</IwsLink></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative" ref={aboutRef}>
                  <button
                    className="text-gray-600 text-sm font-medium hover:text-gray-900 flex items-center"
                    onClick={() => setShowAbout(!showAbout)}
                  >
                    About
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
                  </button>

                  {showAbout && (
                    <div className="fixed left-0 right-0 py-6 px-8 pl-8 mt-8 bg-white shadow-lg border-t border-gray-100 z-50">
                       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ul className="space-y-2 text-sm">
                          <li><IwsLink href="/about" className="text-gray-600 hover:text-gray-900">About US</IwsLink></li>
                          <li><IwsLink href="/about/careers" className="text-gray-600 hover:text-gray-900">Careers</IwsLink></li>
                          <li><IwsLink href="/about/newsroom" className="text-gray-600 hover:text-gray-900">Newsroom</IwsLink></li>
                          <li><IwsLink href="/blog" className="text-gray-600 hover:text-gray-900">Blog</IwsLink></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            {/* 右侧按钮组 */}
            <div className="flex items-center space-x-4 ml-16">
            <IwsLink
                href="https://cloud.canopywave.io/"
                className="px-4 py-2 text-white bg-[#8CC63F] rounded hover:bg-[#7ab32f] transition-colors text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Canopy Wave Cloud
              </IwsLink>
              <IwsLink
                href="/contact"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Contact US
              </IwsLink>
            </div>
          </div>





          {/* 移动端折叠导航 */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="bg-gray-200 dark:bg-gray-500 hover:dark:bg-gray-500 inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-100 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out"
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
      <div className={`md:hidden ${isOpen ? '' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <IwsLink
            href="/products"
            className={`block text-gray-600 dark:text-gray-100 hover:bg-gray-200 hover:dark:bg-gray-500 ${currentRouter === 'home' ? 'bg-gray-200 dark:text-gray-100 dark:bg-gray-500' : ''
              } px-3 py-2 rounded-md text-base font-medium`}
          >
            Products
          </IwsLink>
          <IwsLink
            href="/solutions"
            className={`block text-gray-600 dark:text-gray-100 hover:bg-gray-200 hover:dark:bg-gray-500 ${currentRouter === 'about' ? 'bg-gray-200 dark:text-gray-100 dark:bg-gray-500' : ''
              } px-3 py-2 rounded-md text-base font-medium`}
          >
            Solutions
          </IwsLink>
          <IwsLink
            href="/pricing"
            className={`block text-gray-600 dark:text-gray-100 hover:bg-gray-200 hover:dark:bg-gray-500 ${currentRouter === 'about' ? 'bg-gray-200 dark:text-gray-100 dark:bg-gray-500' : ''
              } px-3 py-2 rounded-md text-base font-medium`}
          >
            Pricing
          </IwsLink>
          <IwsLink
            href="/datacenter"
            className={`block text-gray-600 dark:text-gray-100 hover:bg-gray-200 hover:dark:bg-gray-500 ${currentRouter === 'about' ? 'bg-gray-200 dark:text-gray-100 dark:bg-gray-500' : ''
              } px-3 py-2 rounded-md text-base font-medium`}
          >
            Data Center
          </IwsLink>
          <IwsLink
            href="/resources"
            className={`block text-gray-600 dark:text-gray-100 hover:bg-gray-200 hover:dark:bg-gray-500 ${currentRouter === 'about' ? 'bg-gray-200 dark:text-gray-100 dark:bg-gray-500' : ''
              } px-3 py-2 rounded-md text-base font-medium`}
          >
            Resources
          </IwsLink>
          <IwsLink
            href="/about"
            className={`block text-gray-600 dark:text-gray-100 hover:bg-gray-200 hover:dark:bg-gray-500 ${currentRouter === 'about' ? 'bg-gray-200 dark:text-gray-100 dark:bg-gray-500' : ''
              } px-3 py-2 rounded-md text-base font-medium`}
          >
            About
          </IwsLink>


          {/* <ModeToggle /> */}
        </div>
      </div>
    </nav>
  )
}

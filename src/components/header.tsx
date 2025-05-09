"use client";

import Image from 'next/image'
import IwsLink from './IwsLink'
import { useRouter } from 'next/router'
import { router as routerList } from './../router'
import { useState, useEffect, useRef } from 'react';

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
    <nav className="bg-white border-y-2 border-gray-200 fixed top-0 left-0 right-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* 左侧 logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <IwsLink href="/" className="flex items-center">
                <Image
                  src="/canopy.svg"
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
                  <div className="fixed left-0 right-0 py-6 mt-8 bg-white shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-4 gap-8">
                        <div>
                          <h3 className="font-semibold mb-4">
                            <IwsLink href="/compute-services" className="text-gray-900 hover:text-[#8CC63F] flex items-center">
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
                                <IwsLink href="/compute-services#gpu-cloud" className="text-gray-600 hover:text-gray-900 flex items-center">
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
                                  <li><IwsLink href="/compute-services#hgx-h200" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>NVIDIA HGX H200</IwsLink></li>
                                  <li><IwsLink href="/compute-services#hgx-h100" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>NVIDIA HGX H100</IwsLink></li>
                                </ul>
                              </div>
                            </li>
                            <li><IwsLink href="/compute-services#cpu-node" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>CPU Nodes</IwsLink></li>
                            <li><IwsLink href="/compute-services#bare-metal" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>Bare Metal GPU Cluster</IwsLink></li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-4">
                            <IwsLink href="/storage-services" className="flex items-center text-gray-900 hover:text-[#8CC63F]">
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
                            <li><IwsLink href="/storage-services#local-storage" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>Local Storage</IwsLink></li>
                            <li><IwsLink href="/storage-services#shared-storage" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>Shared Storage</IwsLink></li>
                            <li><IwsLink href="/storage-services#object-storage" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>Object Storage</IwsLink></li>
                            {/* <li><IwsLink href="/storage-services#cloud-storage" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>Cloud Storage</IwsLink></li>
                            <li><IwsLink href="/storage-services#rdma-storage" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>RDMA Storage</IwsLink></li> */}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-4">
                            <IwsLink href="/networking-services" className="flex items-center text-gray-900 hover:text-[#8CC63F]">
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
                            <li><IwsLink href="/networking-services#infiniband-networking" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>InfiniBand Networking</IwsLink></li>
                            <li><IwsLink href="/networking-services#private-cloud" className="text-gray-600 hover:text-gray-900" onClick={() => setShowProducts(false)}>RoceV2 Networking</IwsLink></li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-4">
                            <IwsLink href="/platform" className="flex items-center text-gray-900 hover:text-[#8CC63F]">
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
                  <div className="fixed left-0 right-0 py-6 px-8 pl-8 mt-8 bg-white shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <ul className="space-y-2 text-sm">
                        {/* <li><IwsLink href="/data-center/US" className="text-gray-600 hover:text-gray-900">US 1</IwsLink></li>
                        <li><IwsLink href="/data-center/canada" className="text-gray-600 hover:text-gray-900">Canada 1</IwsLink></li> */}
                        <li><IwsLink href="/data-center/iceland1" className="text-gray-600 hover:text-gray-900">Iceland 1</IwsLink></li>
                        <li><IwsLink href="/data-center/iceland2" className="text-gray-600 hover:text-gray-900">Iceland 2</IwsLink></li>
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
      <div className={`md:hidden ${isOpen ? '' : 'hidden'}`} id="mobile-menu">
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
                    <li><IwsLink href="/compute-services#hgx-h200" className="block px-2 py-1 hover:bg-gray-100 rounded">NVIDIA HGX H200</IwsLink></li>
                    <li><IwsLink href="/compute-services#hgx-h100" className="block px-2 py-1 hover:bg-gray-100 rounded">NVIDIA HGX H100</IwsLink></li>
                    <li><IwsLink href="/compute-services#cpu-node" className="block px-2 py-1 hover:bg-gray-100 rounded">CPU Nodes</IwsLink></li>
                    <li><IwsLink href="/compute-services#bare-metal" className="block px-2 py-1 hover:bg-gray-100 rounded">Bare Metal GPU Cluster</IwsLink></li>

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
                    <li><IwsLink href="/storage-services#local-storage" className="block px-2 py-1 hover:bg-gray-100 rounded">Local Storage</IwsLink></li>
                    <li><IwsLink href="/storage-services#shared-storage" className="block px-2 py-1 hover:bg-gray-100 rounded">Shared Storage</IwsLink></li>
                    <li><IwsLink href="/storage-services#object-storage" className="block px-2 py-1 hover:bg-gray-100 rounded">Object Storage</IwsLink></li>
                    {/* <li><IwsLink href="/storage-services#cloud-storage" className="block px-2 py-1 hover:bg-gray-100 rounded">Cloud Storage</IwsLink></li>
                    <li><IwsLink href="/storage-services#rdma-storage" className="block px-2 py-1 hover:bg-gray-100 rounded">RDMA Storage</IwsLink></li> */}
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
                    <li><IwsLink href="/gpu-cluster-management">GPUs Cluster bring up and management</IwsLink></li>
                    <li><IwsLink href="/networking-hardware">Networking Hardware Solution</IwsLink></li>
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
                    <li><IwsLink href="/platform/dcim-platform" className="text-gray-600 hover:text-gray-900">Canopy DCIM Platform</IwsLink></li>
                    <li><IwsLink href="/platform/cloud-platform" className="text-gray-600 hover:text-gray-900">Wave GPU cloud platform</IwsLink></li>
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
                <li><IwsLink href="/model-training" className="block px-2 py-1 hover:bg-gray-100 rounded">Model Training</IwsLink></li>
                <li><IwsLink href="/inference" className="block px-2 py-1 hover:bg-gray-100 rounded">Inference</IwsLink></li>
                <li><IwsLink href="/rendering" className="block px-2 py-1 hover:bg-gray-100 rounded">Rendering</IwsLink></li>
                <li><IwsLink href="/private-cloud" className="block px-2 py-1 hover:bg-gray-100 rounded">Private Cloud</IwsLink></li>
                <li><IwsLink href="/gpu-cluster-management" className="block px-2 py-1 hover:bg-gray-100 rounded">GPUs Cluster bring up and management</IwsLink></li>
                <li><IwsLink href="/networking-hardware" className="block px-2 py-1 hover:bg-gray-100 rounded">Networking Hardware Solution</IwsLink></li>
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
              <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600 ">
                <li><IwsLink href="/pricing" className="block px-2 py-1 hover:bg-gray-100 rounded">NVIDIA HGX H100</IwsLink></li>
                <li><IwsLink href="/pricing" className="block px-2 py-1 hover:bg-gray-100 rounded">NVIDIA HGX H200</IwsLink></li>
                <li><IwsLink href="/pricing" className="block px-2 py-1 hover:bg-gray-100 rounded">CPU NODE</IwsLink></li>
                <li><IwsLink href="/pricing" className="block px-2 py-1 hover:bg-gray-100 rounded">Cloud Storage</IwsLink></li>
                <li><IwsLink href="/pricing" className="block px-2 py-1 hover:bg-gray-100 rounded">RDMA Storage</IwsLink></li>
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
              <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600 ">
                {/* <li><IwsLink href="/data-center/US" className="block px-2 py-1 hover:bg-gray-100 rounded">US 1</IwsLink></li>
                <li><IwsLink href="/data-center/canada" className="block px-2 py-1 hover:bg-gray-100 rounded">Canada 1</IwsLink></li> */}
                <li><IwsLink href="/data-center/iceland1" className="block px-2 py-1 hover:bg-gray-100 rounded">Iceland 1</IwsLink></li>
                <li><IwsLink href="/data-center/iceland2" className="block px-2 py-1 hover:bg-gray-100 rounded">Iceland 2</IwsLink></li>
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
                <li><IwsLink href="/about" className="block px-2 py-1 hover:bg-gray-100 rounded">About US</IwsLink></li>
                <li><IwsLink href="/about/careers" className="block px-2 py-1 hover:bg-gray-100 rounded">Careers</IwsLink></li>
                <li><IwsLink href="/about/newsroom" className="block px-2 py-1 hover:bg-gray-100 rounded">Newsroom</IwsLink></li>
                <li><IwsLink href="/blog" className="block px-2 py-1 hover:bg-gray-100 rounded">Blog</IwsLink></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav >
  )
}

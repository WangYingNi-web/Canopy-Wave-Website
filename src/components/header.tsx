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
    <nav className="bg-white  border-y border-gray-200 dark:bg-slate-800 dark:border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* 左侧 logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center pl-8">
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
          {/* 右侧导航 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 h-16">

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
                  <div
                    className="fixed left-0 right-0 py-6 px-8 mt-5 bg-white shadow-lg border-t border-gray-100 z-10"
                  >
                    <div className="grid grid-cols-4 gap-8">
                      <div>
                        <h3 className="font-semibold mb-4">Compute Services
                          <span className="inline-block ml-1">▼</span>
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <div>
                              <IwsLink href="/gpu-cloud-on-demand" className="text-gray-600 hover:text-gray-900 ml-2">
                                GPU Cloud on-demand Cluster
                                <span className="inline-block ml-1">▼</span>
                              </IwsLink>
                              <ul className="pl-4 mt-2 space-y-2">
                                <li><IwsLink href="/nvidia-hgx-h100" className="text-gray-600 hover:text-gray-900">NVIDIA HGX H100</IwsLink></li>
                                <li><IwsLink href="/nvidia-hgx-h200" className="text-gray-600 hover:text-gray-900">NVIDIA HGX H200</IwsLink></li>
                              </ul>
                            </div>
                          </li>
                          <li><IwsLink href="/cpu-nodes" className="text-gray-600 hover:text-gray-900">CPU Nodes</IwsLink></li>
                          <li><IwsLink href="/gpu-cloud-reserve" className="text-gray-600 hover:text-gray-900">GPU Cloud Reserve Cluster</IwsLink></li>
                          <li><IwsLink href="/bare-metal" className="text-gray-600 hover:text-gray-900">Bare Metal Services</IwsLink></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Storage Services</h3>
                        <ul className="space-y-2 text-sm">
                          <li><IwsLink href="/local-storage" className="text-gray-600 hover:text-gray-900">Local Storage</IwsLink></li>
                          <li><IwsLink href="/object-storage" className="text-gray-600 hover:text-gray-900">Object Storage</IwsLink></li>
                          <li><IwsLink href="/cloud-storage" className="text-gray-600 hover:text-gray-900">Cloud Storage</IwsLink></li>
                          <li><IwsLink href="/rdma-storage" className="text-gray-600 hover:text-gray-900">RDMA Storage</IwsLink></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Networking Services</h3>
                        <ul className="space-y-2 text-sm">
                          <li><IwsLink href="/infiniband" className="text-gray-600 hover:text-gray-900">InfiniBand Networking</IwsLink></li>
                          <li><IwsLink href="/rocev2" className="text-gray-600 hover:text-gray-900">RoceV2 Networking</IwsLink></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2 text-sm">
                          <li><IwsLink href="/dcim" className="text-gray-600 hover:text-gray-900">Canopy DCIM Platform</IwsLink></li>
                          <li><IwsLink href="/gpu-platform" className="text-gray-600 hover:text-gray-900">Wave GPU cloud platform</IwsLink></li>
                        </ul>
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
                  <div className="fixed left-0 right-0 py-6 px-8 pl-8 mt-5 bg-white shadow-lg border-t border-gray-100 z-10">
                    <div className="max-w-7xl mx-auto">
                      <ul className="space-y-2 text-sm">
                        <li><IwsLink href="/model-training" className="text-gray-600 hover:text-gray-900">Model Training</IwsLink></li>
                        <li><IwsLink href="/inference" className="text-gray-600 hover:text-gray-900">Inference</IwsLink></li>
                        <li><IwsLink href="/rendering" className="text-gray-600 hover:text-gray-900">Rendering</IwsLink></li>
                        <li><IwsLink href="/private-cloud" className="text-gray-600 hover:text-gray-900">Private Cloud</IwsLink></li>
                        <li><IwsLink href="/gpu-cluster-management" className="text-gray-600 hover:text-gray-900">GPUs Cluster bring up and management</IwsLink></li>
                        <li><IwsLink href="/networking-hardware" className="text-gray-600 hover:text-gray-900">Networking Hardware Solution</IwsLink></li>
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
                  <div className="fixed left-0 right-0 py-6 px-8 mt-5 bg-white shadow-lg border-t border-gray-100 z-10">
                    <div className="max-w-7xl mx-auto">
                      <ul className="space-y-2 text-sm">
                        <li><IwsLink href="/nvidia-hgx-h100" className="text-gray-600 hover:text-gray-900">NVIDIA HGX H100</IwsLink></li>
                        <li><IwsLink href="/nvidia-hgx-h200" className="text-gray-600 hover:text-gray-900">NVIDIA HGX H200</IwsLink></li>
                        <li><IwsLink href="/cpu-node" className="text-gray-600 hover:text-gray-900">CPU NODE</IwsLink></li>
                        <li><IwsLink href="/cloud-storage" className="text-gray-600 hover:text-gray-900">Cloud Storage</IwsLink></li>
                        <li><IwsLink href="/rdma-storage" className="text-gray-600 hover:text-gray-900">RDMA Storage</IwsLink></li>
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
                  <div className="fixed left-0 right-0 py-6 px-8 mt-5 bg-white shadow-lg border-t border-gray-100 z-10">
                    <div className="max-w-7xl mx-auto">
                      <ul className="space-y-2 text-sm">
                        <li><IwsLink href="/US" className="text-gray-600 hover:text-gray-900">US 1</IwsLink></li>
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
                  <div className="fixed left-0 right-0 py-6 px-8 mt-5 bg-white shadow-lg border-t border-gray-100 z-10">
                    <div className="max-w-7xl mx-auto">
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
                  <div className="fixed left-0 right-0 py-6 px-8 mt-5 bg-white shadow-lg border-t border-gray-100 z-10">
                    <div className="max-w-7xl mx-auto">
                      <ul className="space-y-2 text-sm">
                        <li><IwsLink href="/about" className="text-gray-600 hover:text-gray-900">About US</IwsLink></li>
                        <li><IwsLink href="/careers" className="text-gray-600 hover:text-gray-900">Careers</IwsLink></li>
                        <li><IwsLink href="/newsroom" className="text-gray-600 hover:text-gray-900">Newsroom</IwsLink></li>
                        <li><IwsLink href="/blog" className="text-gray-600 hover:text-gray-900">Blog</IwsLink></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/*  */}
              <IwsLink
                href="/cloud"
                className="px-4 py-2 text-white bg-[#8CC63F] rounded hover:bg-[#7ab32f] transition-colors text-sm font-medium"
              >
                Canopy Wave Cloud
              </IwsLink>
              <IwsLink href="/contact-us" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Contact US
              </IwsLink>
              {/* <ModeToggle /> */}
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

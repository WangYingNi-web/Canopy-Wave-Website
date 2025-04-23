"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="max-w-7xl mx-auto px-8 py-8">
                <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/canopy.png"
                            alt="Canopy Wave Logo"
                            width={40}
                            height={40}
                        />
                        <span className="font-bold">CANOPY WAVE</span>
                    </div>

                    <div className="grid grid-cols-4 gap-16">
                        <div>
                            <h3 className="font-semibold mb-4">RESOURCES</h3>
                            <ul className="space-y-2">
                                <li><Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                                <li><Link href="/documents" className="text-gray-600 hover:text-gray-900">Documents(需补充！)</Link></li>
                                <li><Link href="/support" className="text-gray-600 hover:text-gray-900">Support(需补充！)</Link></li>
                                <li><Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQ(需补充！)</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">COMPANY</h3>
                            <ul className="space-y-2">
                                <li><Link href="/about-us" className="text-gray-600 hover:text-gray-900">About us</Link></li>
                                <li><Link href="/career" className="text-gray-600 hover:text-gray-900">Career</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">CONTACT</h3>
                            <ul className="space-y-2">
                                <li><Link href="tel:+17692360886" className="text-gray-600 hover:text-gray-900">+1(769)236-0886</Link></li>
                                <li><Link href="/contact-us" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-8 border-t">
                    <p className="text-sm text-gray-600">© 2024 All rights reserved.</p>
                    <div className="flex items-center space-x-6">
                        <Link href="/terms" className="text-sm text-[#8CC63F] hover:text-[#7ab32f]">Terms of Service</Link>
                        <Link href="/privacy" className="text-sm text-[#8CC63F] hover:text-[#7ab32f]">Privacy Policy</Link>
                    </div>
                    {/* <div className="flex items-center space-x-4">
                            <Link href="https://twitter.com/canopywave" className="text-gray-600 hover:text-gray-900">
                                <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
                            </Link>
                            <Link href="https://github.com/canopywave" className="text-gray-600 hover:text-gray-900">
                                <Image src="/github.svg" alt="GitHub" width={20} height={20} />
                            </Link>
                            <Link href="https://linkedin.com/company/canopywave" className="text-gray-600 hover:text-gray-900">
                                <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                            </Link>
                        </div> */}
                </div>
            </div>
        </footer>
    )
}

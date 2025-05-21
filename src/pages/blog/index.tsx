"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import SlideUp from '@/components/slide';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Joint Blog - Accelerate Enterprise AI",
      description: "by James Liao, CTO of Canopy Wave, and Severi Tikkala, CTO of ConfidentialMind",
      date: "May 20, 2025"
    },
    // {
    //   id: 2,
    //   title: "INSTANT GPU CLUSTER FOR ENTERPRISE AI",
    //   description: "Instant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AI",
    //   date: "April 2, 2023"
    // },
  ];

  return (
    <main className="min-h-screen flex flex-col text-gray-600 bg-[#F9F9F9]">
      <Header />
      <div className=" flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        <SlideUp>
          <h1 className="text-4xl sm:text-5xl font-bold mb-16">Blog</h1>
        </SlideUp>
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 sm:gap-20 md:gap-20">
          <div className="w-full md:w-[650px]">
            <SlideUp>
              <div className="mt-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="border-b pb-20">
                    <h2 className="text-2xl font-bold mb-12">{post.title}</h2>
                    <p className="text-gray-600 mb-12">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-[#8CC63F] hover:text-[#7ab32f]"
                      >
                        Read more →
                      </Link>
                      <span className="text-gray-400">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SlideUp>

          </div>
          <div className="w-full md:w-[580px]">
            <img
              src="/blog.svg"
              alt="Blog"
              className="w-full h-auto"
            />
          </div>
        </div>
        <section className="bg-[#8CC63F] rounded-lg shadow-lg p-20 text-center mt-28 relative">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Explore Our AI Solutions</h2>
              <Button
                className="bg-white text-[#8CC63F] hover:bg-gray-100 text-lg px-8 py-3 mt-4"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
            <div className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <Image
                src="/boxes.svg"
                alt="Boxes illustration"
                width={300}
                height={200}
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
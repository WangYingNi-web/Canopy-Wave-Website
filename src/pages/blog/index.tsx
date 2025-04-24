"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

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
      title: "INSTANT GPU CLUSTER FOR ENTERPRISE AI",
      description: "Instant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AI",
      date: "April 2, 2023"
    },
    {
      id: 2,
      title: "INSTANT GPU CLUSTER FOR ENTERPRISE AI",
      description: "Instant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AI",
      date: "April 2, 2023"
    },
    {
      id: 3,
      title: "INSTANT GPU CLUSTER FOR ENTERPRISE AI",
      description: "Instant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AI",
      date: "April 2, 2023"
    },
    {
      id: 4,
      title: "INSTANT GPU CLUSTER FOR ENTERPRISE AI",
      description: "Instant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AI",
      date: "April 2, 2023"
    },
    {
      id: 5,
      title: "INSTANT GPU CLUSTER FOR ENTERPRISE AI",
      description: "Instant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AI",
      date: "April 2, 2023"
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-8">NEWS/EVENTS</h1>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col md:flex-row gap-8 border-b pb-8">
              <div className="w-full md:w-2/3">
                <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
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
              <div className="w-full md:w-1/3">
                <div className="bg-[#8CC63F] p-8 text-white">
                  <h3 className="text-lg font-semibold mb-4">
                    INSTANT GPU CLUSTER<br />
                    FOR ENTERPRISE AI
                  </h3>
                  <p className="mb-4">READY TO GET STARTED?</p>
                  <Link 
                    href="/contact-us" 
                    className="inline-block border-2 border-white px-6 py-2 hover:bg-white hover:text-[#8CC63F] transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

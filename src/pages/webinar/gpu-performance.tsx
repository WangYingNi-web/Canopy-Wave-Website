import React from 'react'
import Head from 'next/head'

const GPUPerformanceWebinar = () => {
  return (
    <>
      <Head>
        <title>Strategies for Maximizing GPU Performance - CoreWeave Webinar</title>
        <meta name="description" content="Watch our on-demand webinar about strategies for maximizing GPU performance and how CoreWeave's stack stays AI-first from all angles." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <div className="bg-black py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-6">
              <img src="/canopy.svg" alt="CoreWeave" className="h-10" />
              <span className="text-white text-lg font-semibold ml-2">Canopy Wave</span>
            </div>

            <div className="mb-4">
              <span className="text-sm text-gray-400 uppercase tracking-wide">On-Demand Webinar</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Rise of Enterprise AI: Trends in Inferencing and GPU Resource Planning
            </h1>

            <p className="text-lg text-gray-300 mb-8">
              How CanopyWave's stack stays AI-first from all angles
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/_B4kWXOkYA8?start=3&rel=0&modestbranding=1&showinfo=0"
                  title="GPU Performance Strategies Webinar"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-white">We hope you enjoy the session!</h3>
                <div className="mb-6">
                  <p className="text-gray-300 mb-4">Discover more:</p>

                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-300">
                       Learn how Canopy Wave helps organizations secure AI-driven innovation by providing private cloud services and proprietary AI models to protect confidential information while optimizing security and efficiency.
                      </span>
                    </li>

                    {/* <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        Achieve AI Infrastructure Goodput of up to 96% with{' '}
                        <a href="#" className="text-blue-400 hover:underline">
                          3 Key Strategies
                        </a>
                      </span>
                    </li> */}

                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-300">
                        <a href="/contact" className="text-blue-400 hover:underline">
                          Connect with our team
                        </a>{' '}
                        to learn more.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GPUPerformanceWebinar
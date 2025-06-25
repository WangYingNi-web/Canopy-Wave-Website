import Header from './../components/header'
import Footer from './../components/footer'
import IwsLink from '@/components/IwsLink'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F7F4]">
      <Header />
      <div className="min-h-[calc(100vh)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center py-16">
          <h1 className="text-6xl font-bold text-gray-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-600 mb-6">Page Not Found</h2>
          <div className="flex flex-col sm:flex-row gap-4">
          <IwsLink 
            href="/"
            className="bg-[#8CC63F] text-sm text-white px-6 py-2 rounded-lg hover:bg-[#80B224] transition-all duration-300"
          >
            Back Home
          </IwsLink>
          <IwsLink 
            href="/contact"
            className="bg-[#8CC63F] text-sm text-white px-6 py-2 rounded-lg hover:bg-[#80B224] transition-all duration-300"
          >
            Contact Us
          </IwsLink>
          </div>
          
        </div>
      </div>
      <Footer />
    </main>
  )
}
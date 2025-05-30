import Header from './../components/header'
import Footer from './../components/footer'
import IwsLink from '@/components/IwsLink'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F7F4]">
      <Header />
      <div className="min-h-[calc(100vh)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center py-16">
          <h1 className="text-7xl font-bold text-[#8CC63F] mb-4">404</h1>
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <IwsLink 
            href="/"
            className="bg-[#8CC63F] text-white px-8 py-3 rounded-lg hover:bg-[#80B224] transition-all duration-300"
          >
            Home
          </IwsLink>
        </div>
      </div>
      <Footer />
    </main>
  )
}
import TutorialLayout5 from '@/components/tutorials/TutorialLayout5'
import SEOHead from '@/components/SEOHead'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function StorageWorkflowsTutorial() {
    return (
        <>
            <Header />
            <SEOHead
                title="Canopy Wave - How to Choose the Right Storage for Your AI Workflows"
                description="Learn how to select the optimal storage architecture for AI model training, inference, and data processing workflows."
            />
            <main className="min-h-screen bg-[#F9F9F9] text-gray-800">
                <TutorialLayout5 />
            </main>
            <Footer />
        </>
    )
}
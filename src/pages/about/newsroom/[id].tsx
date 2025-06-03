import { useRouter } from 'next/router';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';

export default function NewsroomDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="min-h-screen bg-[#F9F9F9] text-gray-600 relative">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="bg-[#F9F9F9] rounded-lg shadow-xl overflow-hidden my-8">
          <div className="p-8">
            <SlideUp>
            <h2 className="text-3xl font-black mb-6 text-center">Canopy Wave and ConfidentialMind Join Forces to Accelerate Enterprise AI Adoption</h2>
            </SlideUp>
            <p className="text-gray-700 mb-6 leading-relaxed">Santa Clara, United States and Espoo, Finland, April 1, 2025 – Canopy Wave is excited to announce a strategic partnership with ConfidentialMind to revolutionize AI adoption within enterprises and nation states. This collaboration brings together Canopy Wave’s cutting-edge instant GPU clusters and ConfidentialMind’s deep AI expertise to provide businesses with a seamless, turn-key solution for deploying AI applications</p>
            <h3 className="text-2xl font-bold mb-4">Unlocking Instant Cloud AI Infrastructure</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">Canopy Wave offers an on-demand, high-performance GPU cloud that scales dynamically, enabling enterprises to access anywhere from as few as 2 H100 GPUs to thousands of H100/H200 GPUs. This flexibility ensures that businesses of all sizes can leverage the power of AI without the burden of procuring and managing their own hardware. Canopy Wave's instant GPU cluster enables enterprises and ISVs to instantly release AI applications on the GPU without the long lead time of procurement, construction, and stack tuning. Canopy Wave provides a full stack of AI drivers with Rail-optimized infrastructure.</p>
            <h3 className="text-2xl font-bold mb-4">Enterprise AI software infrastructure</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">To simplify AI adoption, ConfidentialMind provides a Kubernetes-based generative AI software infrastructure cluster on top of Canopy Wave’s GPU cloud, allowing enterprises to effortlessly run large-scale inference workloads. The platform removes all the complexities associated with Kubernetes so software developers can easily deploy AI systems such as RAG, semantic search, and AI agents without any prior experience. With one-click deployment of large language models, databases, and APIs, as well as support for leading open-source AI models like Llama and DeepSeek, enterprises and nation-states can quickly build, manage and scale their AI initiatives without any infrastructure setup complexities.</p>
            <h3 className="text-2xl font-bold mb-4">Leadership Quotes</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">“We often see that companies pushing the boundaries of AI are limited in maximizing their results due to hardware constraints. By combining our cutting-edge cloud GPU infrastructure powered by the H100 and H200 and our innovative approach to AI infrastructure management with ConfidentialMind’s secure AI platform, we will deliver a highly reliable, scalable, and cost-efficient cloud-based AI solution for enterprises worldwide.” Hai Vo-Dinh, Sr. Director of Product, Canopy Wave.</p>
            <p className="text-gray-700 mb-6 leading-relaxed">“A major barrier to developing and deploying generative AI at enterprises is often the high cost of procuring the GPU compute, developing the secure infrastructure required to run generative AI systems internally or complexities in integrating AI platforms with existing infrastructure. Our partnership with Canopy Wave removes all those challenges, and because we provide the entire AI technology stack – hardware and software – we can offer the complete package at very attractive prices.” Severi Tikkala, CTO & Co-founder, ConfidentialMind.</p>
            <h3 className="text-2xl font-bold mb-4">About Canopy Wave</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">Canopy Wave is the next-generation cloud GPU cluster and bare metal on-demand provider, trusted by leading industry players to develop and scale AI deployments using their private GPU cloud. Their solution allows enterprises to launch high-performance Nvidia H100 and H200 GPUs instantly. Their flexible pricing allows customers to pay only for the resources they use and at wholesale prices. Their optimized, cutting-edge infrastructure management system further enhances GPU performance and makes resource usage highly reliable.</p>
            <h3 className="text-2xl font-bold mb-4">About ConfidentialMind</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">ConfidentialMind is an award-winning Finnish generative AI software infrastructure provider that makes deploying AI systems and generative AI applications easy on private cloud, on-premises, VPC, or bare metal servers. Their focus is on data security, cost efficiency, and reducing complexities associated with AI deployments to make AI adoption possible in the finance, healthcare, manufacturing, government, and technology sectors. Their AI platform enhances this transformation, empowering enterprises to manage AI workloads confidently while ensuring their sensitive data is secure and compliance with regulatory standards is met without any performance trade-offs.</p>
            <p className="text-gray-700 mb-6 leading-relaxed">This partnership between Canopy Wave and ConfidentialMind paves the way for enterprises to accelerate their AI journey with instant access to powerful compute resources and highly secure, cost-efficient AI infrastructure. Stay tuned for more updates on how this collaboration is transforming AI infrastructure and enterprise AI innovation.</p>
          </div>
        </div>
       
       
      </div>

      <div className="bg-[#F5F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
          <h3 className="text-l sm:text-2xl font-bold mb-4 text-center">For Business Matters</h3>
          <p className="text-gray-800 mb-4 text-center">Hai Vo-Dinh<br />Senior Director of Product<br />Canopy Wave</p>
          <p className="text-gray-800 mb-4 text-center">Email: hai @ canopywave.com</p>
          <p className="text-gray-800 mb-4 text-center">Website: <a href="https://canopywave.com/" className="text-[#8CC63F]" target="_blank">canopywave.com</a></p>
          <p className="text-gray-800 mb-4 text-center">Markku Räsänen<br />CEO & Co-founder<br />Confidentialmind Oy</p>
          <p className="text-gray-800 mb-4 text-center">Email: markku @ confidentialmind.com</p>
          <p className="text-gray-800 mb-4 text-center">Phone: +358 50 302 6510</p>
          <p className="text-gray-800 mb-4 text-center">Website: <a href="http://www.confidentialmind.com" className="text-[#8CC63F]" target="_blank">confidentialmind.com</a></p>
          <h3 className="text-l sm:text-2xl font-bold mb-4 text-center text-[#8CC63F]">For Media and Generic Inquiries</h3>
          <p className="text-gray-800 mb-4 text-center">Wendy Li<br />Marketing Director</p>
          <p className="text-gray-800 mb-4 text-center">Email: wendy@canopywave.com</p>
          <p className="text-gray-800 text-center">Website: <a href="http://www.canopywave.com" className="text-[#8CC63F]" target="_blank">canopywave.com</a></p>
        </div>
        </div>
      <Footer />
    </main>
  );
}
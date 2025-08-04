import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import Link from 'next/link';
import { useScrollToHash } from '@/hooks/useScrollToHash';


export default function CaseStudyPage() {
    useScrollToHash();
    const [activeSection, setActiveSection] = useState('introduction');
    const [canScrollContent, setCanScrollContent] = useState(false);
    const [sidebarPosition, setSidebarPosition] = useState('sticky'); // 新增状态
    const [sections, setSections] = useState<Record<string, boolean>>({
        'api-key': true,
        'api-call': false,
        'api-endpoints': false
    });

    const toggleSection = (section: string) => {
        setSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const navigationItems = [
        { id: 'executive-summary', label: 'Executive Summary' },
        { id: 'company-background', label: 'Company Background' },
        { id: 'challenges-faced', label: 'Challenges Faced' },
        { id: 'solution', label: 'Solution' },
        { id: 'results', label: 'Results and Benefits' },
        { id: 'future', label: 'Future Outlook' }
    ];

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            // 获取元素相对于页面顶部的位置
            const elementRect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // 计算目标滚动位置，减去一些偏移量以确保章节标题可见
            const targetScrollTop = scrollTop + elementRect.top - 100; // 100px 偏移量
            
            // 平滑滚动到目标位置
            window.scrollTo({
                top: targetScrollTop,
                behavior: 'smooth'
            });
        }
    };
    // 添加滚动监听，实现自动高亮当前章节
    useEffect(() => {
        // 页面滚动处理函数 - 控制右侧内容是否可滚动
        const handlePageScroll = () => {
            const scrollY = window.scrollY;
            // console.log('当前页面滚动高度:', scrollY);
            setCanScrollContent(scrollY >= 490 && scrollY <= 650);

            // 获取主内容区域底部位置
            const mainContent = document.querySelector('.max-w-7xl.mx-auto') as HTMLElement;
            if (mainContent) {
                const mainContentRect = mainContent.getBoundingClientRect();
                const mainContentBottom = mainContentRect.bottom + scrollY;
                const windowBottom = scrollY + window.innerHeight;

                // 计算距离主内容区域底部的距离
                const distanceToBottom = mainContentBottom - windowBottom;

                // 当接近主内容区域底部时（距离小于300px）
                if (distanceToBottom < 300 && scrollY >= 3520) {
                    // 使用固定定位但调整位置
                    setSidebarPosition('fixed-bottom');
                }
                // 当在页面中间区域时
                else if (scrollY >= 560) {
                    setSidebarPosition('fixed');
                }
                // 在页面顶部时
                else {
                    setSidebarPosition('sticky');
                }
            }
        };

        // 右侧容器滚动处理函数 - 控制章节高亮（修改后的版本）
        // 右侧容器滚动处理函数 - 控制章节高亮（修复类型错误）
        const handleContentScroll = () => {
            // 不再依赖 content-container，直接基于页面滚动计算章节位置
            const sections = navigationItems.map(item => {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return {
                        id: item.id,
                        top: rect.top,
                        element
                    };
                }
                return null;
            }).filter((section): section is { id: string; top: number; element: HTMLElement } => section !== null);

            // 找到当前在视口中最靠近顶部的章节
            let currentSection: string | null = null;
            const viewportTop = 120; // 考虑导航栏高度的偏移

            for (const section of sections) {
                if (section.top <= viewportTop) {
                    currentSection = section.id;
                } else {
                    break;
                }
            }

            // 如果找到了章节且与当前不同，则更新
            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        // 设置事件监听器的函数（修改后的版本）
        const setupContentScrollListener = () => {
            // 直接在 window 上监听滚动，不再寻找 content-container
            window.addEventListener('scroll', handleContentScroll, { passive: true });
            // 初始化时调用一次，设置初始高亮状态
            setTimeout(() => {
                handleContentScroll();
            }, 100);
            return true;
        };

        // 监听页面滚动
        window.addEventListener('scroll', handlePageScroll);

        // 设置章节高亮监听器
        setupContentScrollListener();

        return () => {
            window.removeEventListener('scroll', handlePageScroll);
            // 移除章节高亮的滚动监听器
            window.removeEventListener('scroll', handleContentScroll);
        };
    }, [navigationItems, activeSection]);

    return (
        <main className="min-h-screen bg-[#F9F9F9] text-gray-800 relative overflow-x-hidden">
            <Head>
                <title>Canopy Wave - Accelerating Protein Engineering with Canopy Wave's GPUaaS</title>
            </Head>
            <Header />

            {/* Hero Section */}
            <div className="w-full h-[500px] relative mt-[84px]">
                <Image
                    src="/cloud/banner.png"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-4xl sm:text-5xl font-black text-gray-600 text-center">
                                Accelerating Protein Engineering with Canopy Wave's GPUaaS
                            </h1>
                            <p className="text-gray-600 text-xl mt-8 text-center">FoundryBioSciences Case Study</p>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-16 mb-12">
                <div className="flex flex-col lg:flex-row gap-8 relative">
                    {/* Left Sidebar Navigation - 相对于父元素定位 */}
                    <div className="lg:w-72 lg:flex-shrink-0 mb-8 lg:mb-0">
                        <div className={`lg:w-72 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto transition-all duration-300 ${sidebarPosition === 'fixed'
                            ? 'lg:fixed lg:top-24'
                            : sidebarPosition === 'fixed-bottom'
                                ? 'lg:fixed lg:top-[calc(100vh-826px)]' // 动态计算顶部位置
                                : 'lg:sticky lg:top-24'
                            }`}>
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-100">Table of Contents</h3>
                                <nav className="space-y-1">
                                    {navigationItems.map((item, index) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-all duration-200 flex items-center group ${activeSection === item.id
                                                ? 'bg-green-50 text-[#80B224] font-medium border-l-3 border-[#80B224] pl-4'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:pl-4'
                                                }`}
                                        >
                                            {/* <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 text-xs transition-all ${activeSection === item.id
                                                ? 'border-[#80B224] bg-[#80B224] text-white'
                                                : 'border-gray-300 text-gray-400 group-hover:border-gray-400'
                                                }`}>
                                                {index + 1}
                                            </span> */}
                                            <span className="flex-1">{item.label}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex-1 min-w-0">
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-8">
                            <h1 className="text-3xl sm:text-4xl font-black mb-8">Accelerating Protein Engineering with Canopy Wave's GPUaaS</h1>

                            {/* Executive Summary Section */}
                            <section id="executive-summary" className="mb-12">
                                <h2 className="text-xl font-bold mb-4">Executive Summary</h2>
                                <p className="text-gray-600">
                                    Foundry BioSciences, a startup working at the frontier of technology to increase
                                    longevity and elevate quality of life is leveraging AI, specifically protein language
                                    models (LLMs), to massively accelerate their research and development in protein
                                    evolution. Searching for cost-effective, stable, and high-performance GPU
                                    resources, they turned to Canopy Wave's GPU-as-a-Service (GPUaaS) platform. By
                                    utilizing Canopy Wave's 16xH100 GPU instances, Foundry BioSciences reduced
                                    training times, minimized operational waste, and benefited from superior support—
                                    outperforming competitors like AWS and Google in stability and responsiveness.
                                    This case study highlights how Canopy Wave's robust and high-performance
                                    GPUaaS infrastructure empowered Foundry BioSciences to scale their protein
                                    engineering workflows efficiently.
                                </p>
                            </section>

                            {/* Company Background Section */}
                            <section id="company-background" className="mb-12">
                                <h2 className="text-xl font-bold mb-4">Company Background</h2>
                                <div className="prose max-w-none">
                                    <p className="text-gray-600 mb-4">
                                        FoundryBioSciences is at the forefront of using AI to accelerate research in protein
                                        engineering, training PLMs to work with protein sequences, which is effectively a
                                        "special language." With access to approximately 10 million known protein
                                        sequences from public databases like the Protein Data Bank (PDB), the company
                                        trains models to infer mutations for function improvement. Similar to many other
                                        startups actively pursuing protein-focused applications of AI — Foundry
                                        BioSciences operates with lean resources, and therefore they are always searching
                                        for the most cost efficient means to deploy limit funding for R&D. The working
                                        datasets can reach 40TB, requiring powerful yet affordable compute infrastructure,
                                        along with cost-effective high-speed storage.
                                    </p>
                                    <p className="text-gray-600">
                                        Key challenges in this domain include how to efficient using GPU resources for
                                        training/fine-tuning/inferencing smaller-scale protein language models compared
                                        to much larger generic LLMs. The models used for protein engineering offers faster
                                        iteration cycles but demands reliable GPU access without interruptions.
                                    </p>
                                </div>
                            </section>

                            {/* Challenges Faced Section */}
                            <section id="challenges-faced" className="mb-12">
                                <h2 className="text-xl font-bold mb-4">Challenges Faced</h2>
                                <div className="prose max-w-none">
                                    <p className="text-gray-600 mb-4">
                                        Before partnering with Canopy Wave, Foundry BioSciences encountered several
                                        hurdles typical in the BioAI space:
                                    </p>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">1. High Costs and Inefficiencies:</h3>
                                            <p className="text-gray-600">
                                                As a cost-sensitive startup, they prioritized low GPU compute and storage pricing
                                                (e.g., per-hour H100 rates and SSD storage costs). Foundry BioSciences often need
                                                16xH100 machines but hyperscaler such as AWS only offer 8xH100 machine, leading
                                                to less efficient GPU utilization.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">2. Environment Setup and Stability:</h3>
                                            <p className="text-gray-600">
                                                Preparing VM images with Bio-specific libraries (e.g., Biopython) and AI tools like
                                                PyTorch took significant time. Frequent platform interruptions risked disrupting long
                                                training jobs, and simple Kubernetes (K8s) setups on single VMs lacked
                                                pre-configured templates.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">3. Performance and Scalability Gaps:</h3>
                                            <p className="text-gray-600">
                                                Comparisons with AWS (8x A100 instances, much slower) and Google (8x H100,
                                                comparable performance but less stable) highlighted the need for better support and
                                                intuitive tools to scale to 32 GPUs for parallel training.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">4. Support Deficiencies:</h3>
                                            <p className="text-gray-600">
                                                Without dedicated guidance on resource optimization or technical troubleshooting,
                                                similar to AWS's post-sales support, innovation was hampered.
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mt-6">
                                        These issues are common to many other startups in the field: GPUaaS infrastructure
                                        limitations from the hyperscaler leads to inefficient use of capital for R&D, impeding
                                        progress.
                                    </p>
                                </div>
                            </section>

                            {/* Solution: Canopy Wave's GPUaaS Platform Section */}
                            <section id="solution" className="mb-12">
                                <h2 className="text-xl font-bold mb-6">Solution: Canopy Wave's GPUaaS Platform</h2>
                                <div className="prose max-w-none">
                                    <p className="text-gray-600 mb-6">
                                        Canopy Wave provided a tailored GPUaaS solution that addressed Foundry
                                        BioSciences' needs through its user-friendly interface, flexible machine size scaling
                                        and high-performance infrastructure. Key features implemented include:
                                    </p>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">• High-Performance GPU Instances:</h3>
                                            <p className="text-gray-600">
                                                Foundry BioSciences deployed 4x to 8x H100 VM instances. This setup matched
                                                their requirements well — using smaller language models optimized for protein
                                                engineering — delivering training completion in two days on 8 GPUs.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">• Cost-Optimization Tools:</h3>
                                            <p className="text-gray-600">
                                                With the platform's intuitive snapshot functionality admins could create and save
                                                snapshots of machine images with pre-installed libraries frequently used in protein
                                                work for later rapid re-deployment, reducing setup time.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">• Efficient Data Management:</h3>
                                            <p className="text-gray-600">
                                                By leveraging S3-compatible storage for data transfers, users can accelerate
                                                onboarding of large datasets.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">• Stability and Support Excellence:</h3>
                                            <p className="text-gray-600">
                                                The platform's reliable environment prevented interruptions, and dedicated support
                                                teams offered guidance on resource allocation, technical optimization, and best
                                                practices—surpassing AWS and Google in responsiveness.
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mt-6">
                                        From a product design perspective, Canopy Wave's SaaS GUI emphasized intuitive
                                        controls: a dashboard for real-time usage monitoring, one-click snapshot/resume
                                        buttons, and customizable templates in the VM creation wizard. Performance
                                        metrics focused on training time, with visual charts for quick insights, ensuring
                                        admins and users could manage clusters effortlessly.
                                    </p>
                                </div>
                            </section>

                            {/* Results and Benefits Section */}
                            <section id="results" className="mb-12">
                                <h2 className="text-xl font-bold mb-6">Results and Benefits</h2>
                                <div className="prose max-w-none">
                                    <p className="text-gray-600 mb-6">
                                        The partnership yielded measurable improvements:
                                    </p>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">• Performance Gains:</h3>
                                            <p className="text-gray-600">
                                                Canopy Wave's 8x H100 clusters delivered up to 4× faster training compared to
                                                AWS's 8x A100 40GB instances and offered greater stability and responsiveness
                                                than Google's 8x H100 setup, enabling parallel runs on 8+8 GPUs. Future scaling
                                                to 32 GPUs became feasible with enhanced start/stop features.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">• Cost Savings:</h3>
                                            <p className="text-gray-600">
                                                Reduced idle time and optimized data transfers lowered overall expenses, aligning
                                                with FoundryBioSciences' focus on affordable per-hour GPU and storage pricing.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">• Operational Efficiency:</h3>
                                            <p className="text-gray-600">
                                                Image preparation time dropped significantly via templates and snapshots,
                                                allowing focus on innovation rather than setup.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">• Enhanced Stability and Support:</h3>
                                            <p className="text-gray-600">
                                                No disruptions to long jobs, and proactive support accelerated problem-solving,
                                                fostering a collaborative relationship.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <h3 className="text-lg font-semibold mb-4">Quantitative highlights:</h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                                            <li>Training time: 2 days per model on 8x H100 GPUs.</li>
                                            <li>Dataset handling: 40TB processed without GPU bottlenecks.</li>
                                            <li>Scalability: Potential for 4x faster training with 32 GPUs.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Future Outlook Section */}
                            <section id="future" className="mb-28">
                                <h2 className="text-xl font-bold mb-6">Future Outlook</h2>
                                <div className="prose max-w-none">
                                    <p className="text-gray-600 mb-6">
                                        Looking ahead, FoundryBioSciences plans to expand GPU usage for more complex
                                        models, potentially integrating with emerging BioAI tools. Canopy Wave is
                                        committed to evolving its SaaS platform with features like AI-driven autoscaling,
                                        advanced analytics dashboards for training performance, and deeper integrations
                                        for conferences like MIPS. This collaboration exemplifies how targeted GPUaaS
                                        solutions can propel startups in niche fields like computational biology toward
                                        faster discoveries in medicine and vaccines.
                                    </p>
                                    <p className="text-gray-600">
                                        For more information on how Canopy Wave can support your BioAI workloads,{' '}
                                        <a href="https://cloud.canopywave.io/" className="text-[#80B224] hover:text-[#6b9a1f] underline" target="_blank" rel="noopener noreferrer">
                                            go to Canopy Wave Cloud
                                        </a>{' '}
                                        or <Link href="/contact" className="text-[#80B224] hover:text-[#6b9a1f] underline">contact our sales team</Link>.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        // 禁用自动转义
        disableOptimizedLoading: true,
    },
    images: {
        // 禁用图片优化警告
        // unoptimized: false,
        unoptimized: true,
        // 或者使用以下配置来忽略特定警告
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        // 禁用图片尺寸警告
        minimumCacheTTL: 0,
    },
    // 添加301重定向配置
    async redirects() {
    return [
        {
            source: '/blog/how-to-choose-the-right-storage-for-your-ai-workflows',
            destination: '/resources/tutorials/how-to-choose-the-right-storage-for-your-ai-workflows',
            permanent: true,
            statusCode: 301
        },
        {
            source: '/blog/gpu%3A-the-core-engine-of-a-new-era-in-computing',
            destination: '/blog/gpu-the-core-engine-of-a-new-era-in-computing',
            permanent: true,
            statusCode: 301
        },
        {
            source: '/blog/ai%3A-revolutionizing-animal-health-monitoring',
            destination: '/blog/ai-revolutionizing-animal-health-monitoring',
            permanent: true,
            statusCode: 301
        },
        {
            source: '/blog/gpu\\:-the-core-engine-of-a-new-era-in-computing',
            destination: '/blog/gpu-the-core-engine-of-a-new-era-in-computing',
            permanent: true,
            statusCode: 301
        },
        {
            source: '/blog/ai\\:-revolutionizing-animal-health-monitoring',
            destination: '/blog/ai-revolutionizing-animal-health-monitoring',
            permanent: true,
            statusCode: 301
        },
        // 新增重定向：/about-us -> /about
        {
            source: '/about-us',
            destination: '/about',
            permanent: true,
            statusCode: 301
        },
        // 新增重定向：/events/:title -> /
        {
            source: '/events/:title',
            destination: '/',
            permanent: true,
            statusCode: 301
        },
        // 新增重定向：/blog/lora-vs.-rag:-key-comparisons-and-use-cases -> /blog/lora-vs-rag-key-comparisons-and-use-cases
        {
            source: '/blog/lora-vs.-rag\\:-key-comparisons-and-use-cases',
            destination: '/blog/lora-vs-rag-key-comparisons-and-use-cases',
            permanent: true,
            statusCode: 301
        },
        // 新增重定向：/blog/cost-breakdown:-32-unit-gb200-gpu-cluster -> /blog/cost-breakdown-32-unit-gb200-gpu-cluster
        {
            source: '/blog/cost-breakdown\\:-32-unit-gb200-gpu-cluster',
            destination: '/blog/cost-breakdown-32-unit-gb200-gpu-cluster',
            permanent: true,
            statusCode: 301
        },
        // 新增重定向：/blog/nvlink-5.0-is-a-game-changer-for-ai-agent-development -> /blog/nvlink-5-0-is-a-game-changer-for-ai-agent-development
        {
            source: '/blog/nvlink-5.0-is-a-game-changer-for-ai-agent-development',
            destination: '/blog/nvlink-5-0-is-a-game-changer-for-ai-agent-development',
            permanent: true,
            statusCode: 301
        },
        // 新增重定向：/blog/gpu-virtualization:-unlocking-the-intelligent-future-of-compute-sharing -> /blog/gpu-virtualization-unlocking-the-intelligent-future-of-compute-sharing
        {
            source: '/blog/gpu-virtualization\\:-unlocking-the-intelligent-future-of-compute-sharing',
            destination: '/blog/gpu-virtualization-unlocking-the-intelligent-future-of-compute-sharing',
            permanent: true,
            statusCode: 301
        },
        // 新增重定向：/blog/humanity& -> /
        {
            source: '/blog/humanity&',
            destination: '/',
            permanent: true,
            statusCode: 301
        },
        // 新增重定向：/blog/ai& -> /
        {
            source: '/blog/ai&',
            destination: '/',
            permanent: true,
            statusCode: 301
        },
        // 全站 www 子域重定向到非 www 主域
        {
            source: '/:path*',
            has: [
                { type: 'host', value: 'www.canopywave.com' },
            ],
            destination: 'https://canopywave.com/:path*',
            permanent: true,
            basePath: false
        }
    ]
}
}

module.exports = nextConfig
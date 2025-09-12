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
    ]
}
}

module.exports = nextConfig
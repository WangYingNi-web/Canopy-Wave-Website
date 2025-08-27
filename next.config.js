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
            // TutorialLayout5 存储教程的301重定向
            {
                source: '/resources/tutorials/how-to-choose-the-right-storage-for-your-ai-workflows',
                destination: '/resources/tutorials/storage-guide',
                permanent: true, // 301重定向
            },
            // {
            //     source: '/storage-tutorial',
            //     destination: '/resources/tutorials/how-to-choose-the-right-storage-for-your-ai-workflows',
            //     permanent: true,
            // },
            // {
            //     source: '/ai-storage-guide',
            //     destination: '/resources/tutorials/how-to-choose-the-right-storage-for-your-ai-workflows',
            //     permanent: true,
            // },
            // // 如果有其他可能的旧路径，也可以添加
            // {
            //     source: '/blog/how-to-choose-the-right-storage-for-your-ai-workflows',
            //     destination: '/resources/tutorials/how-to-choose-the-right-storage-for-your-ai-workflows',
            //     permanent: true,
            // },
        ]
    },
}

module.exports = nextConfig
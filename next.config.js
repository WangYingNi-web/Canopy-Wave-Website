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
        unoptimized: true,
        // 或者使用以下配置来忽略特定警告
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        // 禁用图片尺寸警告
        minimumCacheTTL: 0,
    }
}

module.exports = nextConfig

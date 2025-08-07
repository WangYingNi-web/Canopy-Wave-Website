import React from 'react'
import Image from 'next/image'
import IwsLink from './IwsLink'
import { useRouter } from 'next/router'

interface SocialMediaLinksProps {
    className?: string
    title?: string
    description?: string
    imageUrl?: string
    vertical?: boolean // 新增垂直布局选项
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ 
    className = "", 
    title = "CanopyWave - AI Cloud Computing Solutions",
    description = "Discover powerful AI cloud computing solutions with CanopyWave. High-performance GPU clusters, scalable infrastructure, and expert support.",
    imageUrl = "/canopy.png",
    vertical = false
}) => {
    const router = useRouter()
    
    // 获取当前页面的完整URL
    const getCurrentUrl = () => {
        if (typeof window !== 'undefined') {
            return window.location.href
        }
        return 'https://canopywave.com' + router.asPath
    }
    
    // 生成LinkedIn分享链接
    const getLinkedInShareUrl = () => {
        const url = encodeURIComponent(getCurrentUrl())
        return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    }
    
    // 生成Twitter分享链接
    const getTwitterShareUrl = () => {
        const url = encodeURIComponent(getCurrentUrl())
        const text = encodeURIComponent(`${title} - ${description}`)
        return `https://twitter.com/intent/tweet?url=${url}&text=${text}&via=canopywave_cw`
    }
    
    // 生成YouTube分享链接
    const getYouTubeUrl = () => {
        return "https://www.youtube.com/@CanopyWave-CW"
    }

    const containerClass = vertical 
        ? `flex flex-col space-y-4 ${className}` 
        : `flex space-x-4 ${className}`

    return (
        <div className={containerClass}>
            <IwsLink 
                href={getLinkedInShareUrl()} 
                className="hover:opacity-80 transition-opacity" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <Image
                    src="/footer/linkedin.svg"
                    alt="Share on LinkedIn"
                    width={36}
                    height={36}
                />
            </IwsLink>
            <IwsLink 
                href={getTwitterShareUrl()} 
                className="hover:opacity-80 transition-opacity" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <Image
                    src="/footer/twitter.svg"
                    alt="Share on Twitter"
                    width={36}
                    height={36}
                />
            </IwsLink>
            <IwsLink 
                href={getYouTubeUrl()} 
                className="hover:opacity-80 transition-opacity" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <Image
                    src="/footer/youtube.svg"
                    alt="Visit YouTube Channel"
                    width={36}
                    height={36}
                />
            </IwsLink>
        </div>
    )
}

export default SocialMediaLinks
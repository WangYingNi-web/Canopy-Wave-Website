import React from 'react'
import Image from 'next/image'
import IwsLink from './IwsLink'
import { useRouter } from 'next/router'

interface SocialMediaLinksProps {
    className?: string
    vertical?: boolean // 新增垂直布局选项
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
    className = "",
    vertical = false
}) => {
    const router = useRouter()


    const containerClass = vertical
        ? `flex flex-col space-y-4 ${className}`
        : `flex space-x-4 ${className}`

    return (
        <div className={containerClass}>
            <IwsLink href="https://www.linkedin.com/company/canopywave/" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/footer/linkedin.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                />
            </IwsLink>
            <IwsLink href="https://x.com/canopywave_cw?s=21" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/footer/twitter.svg"
                    alt="Twitter"
                    width={32}
                    height={32}
                />
            </IwsLink>
            <IwsLink href="https://www.youtube.com/@CanopyWave-CW" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/footer/youtube.svg"
                    alt="Youtube"
                    width={32}
                    height={32}
                />
            </IwsLink>
        </div>
    )
}

export default SocialMediaLinks
import React from 'react'
import ImageModal from './ImageModal'
import { useState, useEffect } from 'react'

interface ClickableImageProps {
    src: string
    alt: string
    className?: string
    showZoomIcon?: boolean
}

const ClickableImage: React.FC<ClickableImageProps> = ({
    src,
    alt,
    className = '',
    showZoomIcon = true
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleImageClick = (e: React.MouseEvent) => {
        setIsModalOpen(true);
        console.log('isModalOpen状态:', isModalOpen);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false)
        console.log('Modal state22222:', isModalOpen);
    }

    useEffect(() => {
        console.log('Modal state changed:', isModalOpen);
    }, [isModalOpen]);

    return (
        <>
            <div className="relative group cursor-pointer inline-block" onClick={handleImageClick}>
                <img
                    src={src}
                    alt={alt}
                    className={`transition-all duration-200 hover:opacity-90 ${className}`}
                />
                {/* 悬停时显示放大图标 */}
                {showZoomIcon && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black bg-opacity-20 rounded-lg">
                        <div className="bg-white bg-opacity-90 rounded-full p-2">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
            <ImageModal
                src={src}
                alt={alt}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    )
}

export default ClickableImage
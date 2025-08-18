import React from 'react'
import { createPortal } from 'react-dom'
import { useEffect, useState } from "react";

interface ImageModalProps {
    src: string
    alt: string
    isOpen: boolean
    onClose: () => void
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, isOpen, onClose }) => {
    const [mounted, setMounted] = useState(false)
    const [scale, setScale] = useState(1);
    const handleWheel = (e: React.WheelEvent<HTMLImageElement>) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            setScale(prev => Math.min(prev + 0.1, 3)); // 最大放大3倍
        } else {
            setScale(prev => Math.max(prev - 0.1, 0.5)); // 最小缩小到0.5倍
        }
    };
    const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 3));
    const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));
    useEffect(() => {
        console.log('ImageModal isOpen:', isOpen);
    }, [isOpen]);
    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen, onClose])

    if (!mounted || !isOpen) return null


    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            onClick={onClose}
        >
            {/* 关闭按钮 */}
            <button
                onClick={onClose}
                className="absolute top-2 right-2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-black rounded-full p-2 transition-all duration-200"
                aria-label="close image"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="relative max-w-[80vw] max-h-[80vh] flex items-center justify-center">
                {/* 图片 */}
                <img
                    src={src}
                    alt={alt}
                    onWheel={handleWheel}
                    style={{ transform: `scale(${scale})`, transition: 'transform 0.2s' }}
                    className="max-w-[80vw] max-h-[80vh] object-contain"
                />
                {/* 添加缩放按钮 */}
                {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    <button onClick={handleZoomOut} className="bg-white px-2 py-1 rounded shadow">缩小</button>
                    <button onClick={handleZoomIn} className="bg-white px-2 py-1 rounded shadow">放大</button>
                </div> */}
                {/* 图片描述 */}
                {/* {alt && (
                    <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded text-center">
                        {alt}
                    </div>
                )} */}
            </div>
        </div>,
        document.body
    )

}

export default ImageModal
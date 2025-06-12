"use client";

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface PartnerLogo {
  id: number;
  width: number;
  height: number;
}

interface PartnerCarouselProps {
  logos: PartnerLogo[];
}

export default function PartnerCarousel({ logos }: PartnerCarouselProps) {
  return (
    <div className="bg-gray-50 py-4 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            duration: 20000, // 减少动画持续时间
          }}
          plugins={[
            Autoplay({
              delay: 0, // 设置为0，无停顿
              stopOnInteraction: false, // 不因用户交互而停止
              stopOnMouseEnter: false, // 鼠标悬停时不停止
              playOnInit: true, // 初始化时立即开始播放
            }),
          ]}
          className="w-full overflow-visible"
        >
          <CarouselContent className="-ml-12 flex animate-scroll">
            {/* 复制一遍logos数组以确保无缝循环 */}
            {[...logos, ...logos].map((logo, index) => (
              <CarouselItem key={`${logo.id}-${index}`} className="pl-12 basis-1/2 sm:basis-1/3 md:basis-1/6 flex-shrink-0">
                <div className="flex justify-center items-center w-full h-full px-4">
                  <Image
                    src={`/brand/${logo.id}.svg`}
                    alt={`Partner ${logo.id}`}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
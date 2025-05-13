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
    <div className="bg-gray-50 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full overflow-visible"
        >
          <CarouselContent className="-ml-12">
            {logos.map((logo) => (
              <CarouselItem key={logo.id} className="pl-12 basis-1/2 sm:basis-1/3 md:basis-1/6">
                <div className="flex justify-center items-center w-full h-full px-4">
                  <Image
                    src={`/brand/${logo.id}.svg`}
                    alt={`Partner ${logo.id}`}
                    width={logo.width}
                    height={logo.height}
                    className="w-full h-auto object-contain"
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
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
    <div className="bg-gray-50 py-4 pl-24 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
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
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {logos.map((logo) => (
              <CarouselItem key={logo.id} className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/6">
                <Image
                  src={`/brand/${logo.id}.svg`}
                  alt={`Partner ${logo.id}`}
                  width={logo.width}
                  height={logo.height}
                  className="mx-auto"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
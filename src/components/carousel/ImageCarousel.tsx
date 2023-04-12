import type { ProfileImages } from "@prisma/client";
import React, { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: ProfileImages[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          src={`/usersImages/${images[currentIndex]?.image ?? ""}`}
          alt="carousel"
          width={500}
          height={500}
        />
      </div>
      <div className="mt-4 flex justify-center">
        {images.map((image, index) => (
          <Image
            key={index}
            src={`/usersImages/${image.image}`}
            alt="thumbnail"
            width={100}
            height={100}
            onClick={() => handleImageClick(index)}
            className="mx-2 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

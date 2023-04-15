import type { ProfileImages } from "@prisma/client";
import React, { useState } from "react";
import Image from "next/image";
import { buildImagePath } from "../utils/images";

interface ImageCarouselProps {
  images: ProfileImages[];
  imageRoot: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  imageRoot,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          src={buildImagePath(images[currentIndex]?.image ?? "", imageRoot)}
          alt="carousel"
          width={500}
          height={500}
          className="h-100 w-full object-cover"
        />
        <p>{images[currentIndex]?.imageDesc ?? ""}</p>
      </div>
      <div className="mt-4 flex justify-center">
        {images.map((image, index) => (
          <Image
            key={index}
            src={buildImagePath(image.image, imageRoot)}
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

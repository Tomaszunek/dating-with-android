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

  const handleImageArrowsClick = (indexChange: number) => () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + indexChange;
      if (newIndex >= images.length) return 0;
      if (newIndex < 0) return images.length - 1;
      return newIndex;
    });
  };

  return (
    <div className="flex flex-col">
      <div>
        <Image
          src={buildImagePath(images[currentIndex]?.image ?? "", imageRoot)}
          alt="carousel"
          width={600}
          height={600}
          className="h-100 w-full rounded-full object-cover"
        />
      </div>
      <div className="flex w-full justify-between">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-200 text-4xl font-bold text-pink-600"
          onClick={handleImageArrowsClick(-1)}
        >
          {"<"}
        </button>
        <div className="mt-4 flex items-center justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              className={`mx-3 h-5 w-5 justify-center rounded-full bg-pink-500 ${
                currentIndex === index ? "h-7 w-7 bg-pink-700" : ""
              } `}
              onClick={() => handleImageClick(index)}
            ></button>
          ))}
        </div>
        <div className="flex">
          <button
            type="button"
            className="mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-slate-200 text-4xl font-bold text-pink-600"
          >
            {"f"}
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-200 text-4xl font-bold text-pink-600"
            onClick={handleImageArrowsClick(1)}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

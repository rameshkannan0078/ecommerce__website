import React, { useState } from "react";

const CnSlider = ({ slideList }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slideList.length);
  };

  const prevSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + slideList.length) % slideList.length
    );
  };

  return (
    <div className="relative overflow">
      <div className="mySlides">
        <img
          src={slideList[slideIndex]}
          alt={`Slide ${slideIndex + 1}`}
          className="w-full"
        />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center p-4">
        <div
          className="prev text-4xl cursor-pointer"
          onClick={prevSlide}
        >
          ❮
        </div>
        <div
          className="next text-4xl cursor-pointer"
          onClick={nextSlide}
        >
          ❯
        </div>
      </div>
    </div>
  );
};

export default CnSlider;

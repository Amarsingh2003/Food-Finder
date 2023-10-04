import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "https://assets.cntraveller.in/photos/64a54ad70d528c30692aa880/16:9/w_1920,h_1080,c_limit/Title%20Page.png",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/1200px-Supreme_pizza.jpg",
    },
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlider = currentIndex === 0;
    const newIndex = isFirstSlider ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlider = () => {
    const isFirstSlider = currentIndex === sliders.length - 1;
    const newIndex = isFirstSlider ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const moveToNextSlide = (sliderIndex) => {
    setCurrentIndex(sliderIndex);
  };

  return (
    <div className="  max-w-[100%] h-[400px] w-full py-4 px-4 relative group ">
      <div
        className=" w-full h-full rounded-2xl bg-center bg-cover duration-500 "
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div className=" hidden group-hover:block absolute top-[45%] -translate-x-0  translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div className="hidden group-hover:block absolute top-[45%] -translate-x-0  translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className="flex top-4 justify-center py-2 ">
        {sliders.map((sliderItems, sliderIndex) => (
          <div
            key={sliderIndex}
            onClick={() => {
              moveToNextSlide(sliderIndex);
            }}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

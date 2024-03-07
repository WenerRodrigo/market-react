import { useState, useEffect } from "react";
import banner from "../../assets/banner.webp";
import banner_promo from "../../assets/banner_promo.webp";
import { GrNext, GrPrevious } from "react-icons/gr";

const Banner = () => {
  const images = [banner, banner_promo];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative">
      <img
        className="w-full h-auto"
        src={images[currentImageIndex]}
        alt={`Banner ${currentImageIndex}`}
      />
      <div
        className="absolute top-0 left-0 w-1/12 h-full flex items-center justify-center cursor-pointer text-black text-2xl"
        onClick={prevImage}
      >
        <GrPrevious className="text-gray-500"/>
      </div>
      <div
        className="absolute top-0 right-0 w-1/12 h-full flex items-center justify-center cursor-pointer text-black text-2xl"
        onClick={nextImage}
      >
        <GrNext className="text-gray-500"/>
      </div>
    </div>
  );
};

export default Banner;

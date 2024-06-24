import React, { useState } from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./CarCarousal.css";
import CarCarosualModal from "./CarCarosualModal";

const CarCarousal = ({ car }) => {
  const [modalImage, setModalImage] = useState(null);
  const [isDetailOpen, setDetailOpen] = useState(false);

  const handleOpenDetails = (image) => {
    setModalImage(image);
    setDetailOpen(true);
  };
  const handleCloseDetails = () => {
    setDetailOpen(false);
    setModalImage(null);
  };

  if (!car || !car?.Images || car?.Images?.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className="car-carousel">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 3000 }} // Autoplay configuration
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {car?.Images?.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img
              src={image?.url}
              alt={`Car image ${index + 1}`}
              className="carousel-image cursor-pointer"
              onClick={() => handleOpenDetails(image?.url)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <CarCarosualModal
        car={car}
        modalImage={modalImage}
        isOpen={isDetailOpen}
        handleCloseDetails={handleCloseDetails}
      />
    </div>
  );
};

export default CarCarousal;

import { useRef, useState } from "react";
import Container from "../../Components/Shared/Container";
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
import CarCarosualModal from "./CarCarosualModal";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { PiEngineFill } from "react-icons/pi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCarOn } from "react-icons/fa6";

const CarDetailsBanner = ({ car }) => {
  console.log(car);

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

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!car || !car?.Images || car?.Images?.length === 0) {
    return <p>No images available</p>;
  }
  return (
    <>
      <div className="mt-12">
        <Container>
          <div className="bg-gradient-to-tl from-black via-slate-700 to-blue-950 px-3 lg:px-12 py-6  lg:py-12 rounded-3xl">
            <div>
              <h1 className="text-2xl lg:text-5xl font-semibold mb-1">
                {car?.CarModel}
              </h1>
              <p className="font-bold lg:text-2xl">{car?.CarCondition}</p>
              <p>$ {car?.CarPriceNew}</p>
            </div>
            {/* car carousal */}
            <div className="mt-12 lg:mt-0">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                autoplay={{ delay: 3000 }} // Autoplay configuration
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
              >
                {car?.Images?.map((image, index) => (
                  <SwiperSlide key={index} className="">
                    <div className="flex items-center justify-center lg:mb-16">
                      <img
                        src={image?.url}
                        alt={`Car image ${index + 1}`}
                        className="cursor-pointer lg:w-[480px]"
                        onClick={() => handleOpenDetails(image?.url)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                ref={prevRef}
                className="absolute text-3xl top-3/4 md:top-1/3 lg:top-2/4 transform -translate-y-1/2 left-0 z-10 p-2 rounded-full cursor-pointer"
              >
                <FaArrowCircleLeft />
              </div>
              <div
                ref={nextRef}
                className="absolute text-3xl top-3/4 md:top-1/3 lg:top-2/4 transform -translate-y-1/2 right-0 z-10 p-2 rounded-full cursor-pointer"
              >
                <FaArrowCircleRight />
              </div>
            </div>
          </div>

          {/* 2nd part */}
          <section className="hidden lg:block ">
            <div className="flex items-center justify-between ml-24 mr-24 px-28 py-8 rounded-3xl -mt-20  bg-gradient-to-tl from-black via-slate-700 to-blue-800">
              <div className="">
                <div className="text-center">
                  <span className="block">
                    <FaCarOn className="text-5xl mx-auto hover:text-slate-400" />
                  </span>
                  <div>
                    <h1 className="text-2xl text-blue-400 font-bold">
                      Category
                    </h1>
                    <p className="text-[16px]  mt-4">{car?.Category}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="block">
                    <BsFillFuelPumpFill className="text-5xl mx-auto hover:text-slate-400" />
                  </span>
                  <div>
                    <h1 className="text-2xl text-blue-400 font-bold">
                      {" "}
                      Fuel Capacity
                    </h1>
                    <p className="text-[16px]  mt-4">{car?.FuelCapacity}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="block">
                    <IoIosSpeedometer className="text-5xl mx-auto hover:text-slate-400" />
                  </span>
                  <div>
                    <h1 className="text-2xl text-blue-400 font-bold">
                      Top Speed
                    </h1>
                    <p className="text-[16px]  mt-4">{car?.TopSpeed} KM/h</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="block">
                    <PiEngineFill className="text-5xl mx-auto hover:text-slate-400" />
                  </span>
                  <div>
                    <h1 className="text-2xl text-blue-400 font-bold">
                      Engine Type
                    </h1>
                    <p className="text-[16px]  mt-4">{car?.Engine}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 2nd part */}
        </Container>
      </div>
      <CarCarosualModal
        car={car}
        modalImage={modalImage}
        isOpen={isDetailOpen}
        handleCloseDetails={handleCloseDetails}
      />
    </>
  );
};

export default CarDetailsBanner;

import { useState } from "react";
import Login from "../../Login/Login";
import { PiSignInDuotone } from "react-icons/pi";
import { PiPlayCircleFill } from "react-icons/pi";
import BannerVideoModal from "./BannerVideoModal";

const Banner = () => {
  // ----------------------------------------------------------------

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };
  const openVideoModal = () => {
    setIsVideoOpen(true);
  };
  const closeVideoModal = () => {
    setIsVideoOpen(false);
  };

  // ----------------------------------------------------------------

  return (
    <>
      <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-screen">
        <img
          className="absolute w-full h-full object-cover object-center opacity-70"
          src="https://i.ibb.co/dr5mkNf/3647-01.jpg"
          alt="Banner"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center bg-slate-950 bg-opacity-40">
          <div className="text-white max-w-4xl">
            <h1 className="text-2xl lg:text-7xl font-semibold">
              Imagine your possibilities
            </h1>
            <p className="text-[12px] text-slate-300 lg:text-[18px] mt-8 lg:mt-14">
              Add your car. Track its value. Or Buy Brand New Car. Add your car
              to Your Garage to track its market value and cash in when the time
              is right to sell.
            </p>
            <div className="flex items-center gap-4 mt-6 justify-center">
              <button
                onClick={openLoginModal}
                className="border-2 px-4 py-1 rounded-full bg-white hover:bg-slate-400 hover:text-white text-slate-700 font-semibold"
              >
                <span className="flex items-center gap-2 hover:animate-pulse">
                  Start Now <PiSignInDuotone />
                </span>
              </button>
              <button
                onClick={openVideoModal}
                className="border-2 px-4 py-1 rounded-full font-semibold"
              >
                <span className="flex items-center gap-2 hover:animate-bounce">
                  Watch Now <PiPlayCircleFill />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Login
        isLoginOpen={isLoginOpen}
        openLoginModal={openLoginModal}
        closeLoginModal={closeLoginModal}
      />

      <BannerVideoModal
        isVideoOpen={isVideoOpen}
        openVideoModal={openVideoModal}
        closeVideoModal={closeVideoModal}
      />
    </>
  );
};

export default Banner;

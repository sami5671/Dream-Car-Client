import { useState } from "react";
import Login from "../../Login/Login";
import { PiSignInDuotone } from "react-icons/pi";
import { PiPlayCircleFill } from "react-icons/pi";
import BannerVideoModal from "./BannerVideoModal";

const Banner = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openVideoModal = () => setIsVideoOpen(true);
  const closeVideoModal = () => setIsVideoOpen(false);

  return (
    <>
      <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-screen flex items-center">
        <img
          className="absolute w-full h-full object-cover object-center opacity-95"
          src="https://i.ibb.co/dr5mkNf/3647-01.jpg"
          alt="Banner"
        />
        <div className="absolute bg-slate-950 bg-opacity-40 w-full h-full flex flex-col justify-center items-center text-center p-4 lg:p-16">
          <div className="text-white mt-12">
            <h1 className="text-2xl lg:text-7xl font-semibold">
              Imagine your possibilities
            </h1>
            <p className="text-sm lg:text-lg lg:w-1/2 mt-4 mx-auto">
              Add your car. Track its value. Or Buy Brand New Car. Add your car
              to Your Garage to track its market value and cash in when the time
              is right to sell.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <button
                onClick={openLoginModal}
                className="border-2 px-6 py-2 rounded-full bg-white hover:bg-slate-400 hover:text-white text-slate-700 font-semibold transition-all"
              >
                <span className="flex items-center gap-2">
                  Start Now <PiSignInDuotone />
                </span>
              </button>

              <button
                onClick={openVideoModal}
                className="border-2 px-6 py-2 rounded-full text-white hover:bg-slate-700 font-semibold transition-all"
              >
                <span className="flex items-center gap-2">
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

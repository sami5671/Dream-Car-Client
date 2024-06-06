import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerCarousalContainer from "./BannerCarousalContainer";
import Container from "../../../Components/Shared/Container";
import { useState } from "react";
import Login from "../../Login/Login";

const Banner = () => {
  // ----------------------------------------------------------------

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };
  // ----------------------------------------------------------------

  const banners = [
    {
      image: "https://i.ibb.co/Twym7fs/roseroyal-removebg-preview.png",
      title: "Imagine the Possibilities",
    },
    {
      image: "https://i.ibb.co/Z2vqNTn/Suv1-removebg-preview.png",
      title: "Imagine the Possibilities",
    },
    {
      image: "https://i.ibb.co/5GXWv0s/lambo1-removebg-preview.png",
      title: "Imagine the Possibilities",
    },
    {
      image: "https://i.ibb.co/WtNF4Z3/pickup1-removebg-preview.png",
      title: "Imagine the Possibilities",
    },
  ];
  // ----------------------------------------------------------------
  return (
    <>
      <Container>
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div className="mt-16 lg:w-1/2">
            <h1 className="text-3xl lg:text-5xl font-bold mt-6 lg:mt-0">
              Imagine Your Possibilities
            </h1>
            <h3 className="lg:text-[16px] font-semibold mt-5 lg:mt-4 text-slate-500 w-[490px]">
              Add your car. Track its value.Or Buy Brand New Car Add your car to
              Your Garage to track its market value and cash in when the time is
              right to sell.
            </h3>

            <button className="px-5 py-2 font-bold rounded-full mt-12 lg:mt-28 bg-purple-600 text-white border-2 hover:text-purple-700 hover:bg-slate-200 hover:border-purple-600 hover:border-dotted">
              Get Started
            </button>
            <p className="mt-1 ml-1 text-slate-600">
              Already have an account?
              <span
                onClick={openLoginModal}
                className="font-bold underline cursor-pointer hover:decoration-white"
              >
                Sign in
              </span>
            </p>
          </div>

          <div className="lg:w-[620px] lg:mt-24">
            <Carousel
              autoPlay={true}
              stopOnHover={true}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              showArrows={false}
              showIndicators={false}
              transitionTime={500}
            >
              {banners.map((banner, index) => (
                <BannerCarousalContainer key={index} image={banner.image} />
              ))}
            </Carousel>
          </div>
        </div>

        <Login
          isLoginOpen={isLoginOpen}
          openLoginModal={openLoginModal}
          closeLoginModal={closeLoginModal}
        />
      </Container>
    </>
  );
};

export default Banner;

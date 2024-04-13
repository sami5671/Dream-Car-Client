import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerCarousalContainer from "./BannerCarousalContainer";
import Container from "../../../Components/Shared/Container";

const Banner = () => {
  // ----------------------------------------------------------------
  const banners = [
    {
      image: "https://i.ibb.co/Twym7fs/roseroyal-removebg-preview.png",
      title: "Imagine the Possibilities",
    },
    {
      image: "https://i.ibb.co/WtNF4Z3/pickup1-removebg-preview.png",
      title: "Imagine the Possibilities",
    },
    {
      image: "https://i.ibb.co/CJyvv70/suvvv-removebg-preview.png",
      title: "Imagine the Possibilities",
    },
    {
      image: "https://i.ibb.co/mczZL8X/tesla1-removebg-preview.png",
      title: "Imagine the Possibilities",
    },
  ];
  // ----------------------------------------------------------------
  return (
    <>
      <Container>
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div className="lg:w-[480px]">
            <h1 className="text-3xl lg:text-5xl font-bold mt-6 lg:mt-0">
              Imagine Your Possibilities
            </h1>
            <h3 className="text-2xl lg:text-3xl font-semibold mt-5 lg:mt-12">
              Add your car. Track its value. <br /> Or Buy Brand New Car
            </h3>
            <p className="mt-5 text-slate-800">
              Add your car to Your Garage to track its market value and cash in
              when the time is right to sell.
            </p>
            <button className="mt-2 lg:mt-8 lg:text-xl bg-purple-600 px-5 py-2 rounded-full font-bold text-white border-2 hover:text-purple-700 hover:bg-slate-200 hover:border-purple-600 hover:border-dotted">
              Get Started
            </button>
            <p className="mt-1 ml-1">
              Already have an account?
              <span className="font-bold underline cursor-pointer hover:decoration-white">
                Sign in
              </span>
            </p>
          </div>

          <div className="lg:w-[550px]">
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
      </Container>
    </>
  );
};

export default Banner;

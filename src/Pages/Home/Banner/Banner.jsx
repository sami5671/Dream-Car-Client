import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerCarousalContainer from "./BannerCarousalContainer";
import Container from "../../../Components/Shared/Container";

const Banner = () => {
  // ----------------------------------------------------------------
  const banners = [
    {
      image: "https://i.ibb.co/HLyGtXq/banner1.jpg",
      title: "Imagine the Possibilities",
    },
    {
      image:
        "https://i.ibb.co/rf7f2RL/ladimir-ladroid-2vtm-KYms-W4-unsplash.jpg",
      title: "Imagine the Possibilities",
    },
    {
      image: "https://i.ibb.co/vJKybz4/hakon-sataoen-qyfco1nf-Mtg-unsplash.jpg",
      title: "Imagine the Possibilities",
    },
    {
      image: "https://i.ibb.co/HYY80bP/thomas-haas-S5o-y8-XM7y-I-unsplash.jpg",
      title: "Imagine the Possibilities",
    },
  ];
  // ----------------------------------------------------------------
  return (
    <>
      <Carousel
        autoPlay={false}
        stopOnHover={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        transitionTime={2000}
      >
        {banners.map((banner, index) => (
          <BannerCarousalContainer
            key={index}
            image={banner.image}
            title={banner.title}
          />
        ))}
      </Carousel>
    </>
  );
};

export default Banner;

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const CarCarousal = ({ car }) => {
  // =================================================================
  console.log(car);

  // =================================================================
  return (
    <>
      <Carousel showStatus={false} thumbWidth={80} showArrows={false}>
        <div>
          <img src={car?.Images?.[0]?.url} />
        </div>
        <div>
          <img src={car?.Images?.[1]?.url} />
        </div>
        <div>
          <img src={car?.Images?.[2]?.url} />
        </div>
        <div>
          <img src={car?.Images?.[3]?.url} />
        </div>
      </Carousel>
    </>
  );
};

export default CarCarousal;

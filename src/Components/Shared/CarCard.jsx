import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  // console.log(car);

  return (
    <>
      <div className="border-2  px-2 hover:shadow-xl cursor-pointer">
        <Link to={`/carDetailsPage/${car?._id}`}>
          <div>
            <img
              src={car?.Images?.[3]}
              className="w-[250px] h-[150px] group-hover:scale-110 transition object-cover "
              alt="Img"
            />
          </div>
          <div className="w-full h-[50px]">
            <h1 className="text-xl font-bold text-slate-700">
              {car?.CarModel}
            </h1>
          </div>
          <div className="w-full h-[10px] mt-8">
            <p className=" bg-slate-400  px-2 w-fit mt-2 text-white font-bold rounded-md">
              ${car.CarPriceNew}
            </p>
          </div>
          <div className="mt-8 py-2">
            <p className="text-purple-600 font-semibold">Shop Now</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CarCard;

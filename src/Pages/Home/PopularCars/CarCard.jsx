import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  // console.log(car);
  return (
    <>
      <div className="border-2 hover:shadow-xl cursor-pointer">
        <div>
          <img
            src={car?.Img}
            className="w-[250px] h-[150px] group-hover:scale-110 transition object-cover "
            alt="Img"
          />
          <h1 className="p-2 text-xl font-bold text-slate-700">{car?.Model}</h1>
        </div>

        <div className="mt-10 p-2">
          <p className="text-purple-600 font-semibold">Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default CarCard;

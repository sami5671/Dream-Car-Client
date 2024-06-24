const CarDetailsBanner = ({ car }) => {
  console.log(car);
  return (
    <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-screen flex items-center">
      <img
        className="absolute w-full h-full object-cover object-center opacity-90"
        src="https://i.ibb.co/hKGs491/forest.jpg"
        alt="Banner"
      />
      <div className="absolute bg-slate-950 bg-opacity-50 w-full h-full flex flex-col lg:flex-row items-center justify-between p-4 lg:p-16">
        <div className="text-white flex-1">
          <h2 className="text-2xl lg:text-7xl font-bold mb-4 lg:mb-10">
            {car?.CarModel}
          </h2>
          <p className="text-lg lg:text-2xl mb-4 font-semibold">
            {car?.CarCondition}
          </p>
          <span className="text-lg lg:text-2xl bg-white text-black px-2 py-1 rounded-full shadow-2xl shadow-white">
            ${car?.CarPriceNew} USD
          </span>
        </div>
        <div className="flex-1 lg:mt-72">
          {car?.Images && car.Images.length > 0 && (
            <img
              className="rounded-lg w-[220px] h-[170px] lg:w-[500px] lg:h-[350px]"
              src={car.Images[2].url}
              alt={car.CarModel}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CarDetailsBanner;

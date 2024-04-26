import { useEffect, useState } from "react";
import EmptyData from "../../Components/EmptyData/EmptyData";
import CarCard from "../../Components/Shared/CarCard";
import Container from "../../Components/Shared/Container";
import { getAllCars } from "../../api/Cars";
import Logo from "../../Components/Shared/Logo";
import "./CarSortInput.css";
import { FaCar } from "react-icons/fa6";
import Pagination from "../../Components/Pagination/Pagination";

const CarCollection = () => {
  const [cars, setCars] = useState([]);
  const [filterAllCar, setFilterAllCar] = useState(false);
  const [filterBrandNew, setFilterBrandNew] = useState(false);
  const [filterUsed, setFilterUsed] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(400000);
  const [speed, setSpeed] = useState(560);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "filterAllCar":
        setFilterAllCar(value);
        setFilterBrandNew(false);
        setFilterUsed(false);
        break;
      case "filterUsed":
        setFilterUsed(value);
        setFilterAllCar(false);
        setFilterBrandNew(false);
        break;
      case "filterBrandNew":
        setFilterBrandNew(value);
        setFilterAllCar(false);
        setFilterUsed(false);
        break;
      case "selectedColor":
        setSelectedColor(value);
        break;
      case "minPrice":
        setMinPrice(parseInt(value));
        break;
      case "maxPrice":
        setMaxPrice(parseInt(value));
        break;
      case "speed":
        setSpeed(parseInt(value));
        break;
      case "searchQuery":
        setSearchQuery(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getAllCars().then((data) => {
      setCars(data);
      setFilterAllCar(data);
    });
  }, []);

  // console.log(cars);
  const filteredCars = cars.filter((car) => {
    const isUsedMatch = !filterUsed || car.CarCondition === "Used";
    const isBrandNewMatch = !filterBrandNew || car.CarCondition === "Brand New";
    const isColorMatch = !selectedColor || car.ExteriorColor === selectedColor;
    const isPriceMatch =
      car.CarPriceNew >= minPrice && car.CarPriceNew <= maxPrice;
    const isSpeedMatch = speed && car.TopSpeed <= speed;
    const isSearchMatch =
      car.Category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.CarModel.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      isUsedMatch &&
      isBrandNewMatch &&
      isColorMatch &&
      isPriceMatch &&
      isSpeedMatch &&
      isSearchMatch
    );
  });

  // ============================Pagination=====================================
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(6);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCars.length / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  // =================================================================

  return (
    <Container>
      <div className="flex flex-col  lg:flex-row gap-4">
        {/* Sorting form */}
        <div className="lg:w-[500px] lg:h-[600px] shadow-xl bg-gray-100 rounded-xl p-4">
          <div className="flex flex-col justify-center items-center">
            <p>
              <Logo />
            </p>
            <h2 className="font-semibold text-purple-800">Filter Cars</h2>
          </div>
          <div className="mb-2 mt-12">
            <label htmlFor="filterUsed" className="font-bold text-xl">
              Condition:
            </label>
            <div className="flex items-center mt-2">
              <div>
                <input
                  type="radio"
                  id="filterAllCar"
                  name="filterAllCar"
                  checked={filterAllCar}
                  onChange={handleFilterChange}
                  className="cursor-pointer"
                />
                <span className="ml-2">All</span>
              </div>
              <div className="ml-6">
                <input
                  type="radio"
                  id="filterUsed"
                  name="filterUsed"
                  checked={filterUsed}
                  onChange={handleFilterChange}
                  className="cursor-pointer"
                />
                <span className="ml-2">Used</span>
              </div>
              <div className="ml-6">
                <input
                  type="radio"
                  id="filterBrandNew"
                  name="filterBrandNew"
                  checked={filterBrandNew}
                  onChange={handleFilterChange}
                  className="cursor-pointer"
                />
                <span className="ml-2">Brand New</span>
              </div>
            </div>
          </div>
          <div className="mb-2 mt-6">
            <label htmlFor="selectedColor" className="font-bold text-xl">
              Color:
            </label>
            <select
              id="selectedColor"
              name="selectedColor"
              value={selectedColor}
              onChange={handleFilterChange}
              className="border rounded py-1 px-2 ml-2"
            >
              <option value="">
                <span className="font-semibold">All Colors </span>
              </option>
              <option value="Black" className="bg-black text-white ">
                Black
              </option>
              <option value="White" className="bg-white text-black ">
                White
              </option>
              <option value="Green" className="bg-green-500 text-white ">
                Green
              </option>
              <option value="Red" className="bg-red-500 text-white">
                Red
              </option>
              <option value="Blue" className="bg-blue-500 text-white">
                Blue
              </option>
              <option value="Orange" className="bg-orange-500 text-white">
                Orange
              </option>
              <option value="Gray" className="bg-gray-500 text-white">
                Gray
              </option>
            </select>
          </div>
          <div className="mb-2 mt-6">
            <label htmlFor="priceRange" className="font-bold text-xl">
              Price Range:
            </label>
            <p className="mt-3 font-semibold">Min: ${minPrice}</p>
            <input
              type="range"
              id="minPrice"
              name="minPrice"
              min="0"
              max="500000"
              value={minPrice}
              onChange={handleFilterChange}
              className="w-full range-slider"
              style={{ "--tw-thumb-bg": "#8a2be2" }}
            />
            <p className="mt-3 font-semibold">Max: ${maxPrice}</p>
            <input
              type="range"
              id="maxPrice"
              name="maxPrice"
              min="0"
              max="400000"
              value={maxPrice}
              onChange={handleFilterChange}
              className="w-full range-slider"
              style={{ "--tw-thumb-bg": "#8a2be2" }}
            />
          </div>
          <div className="mb-2 mt-6">
            <h1 className="text-xl font-bold">Top Speed:</h1>
            <p className="mt-3 font-semibold">Speed: {speed} km/h</p>
            <input
              type="range"
              id="speed"
              name="speed"
              min="0"
              max="1000"
              value={speed}
              onChange={handleFilterChange}
              className="w-full range-slider"
              style={{ "--tw-thumb-bg": "#8a2be2" }}
            />
          </div>
        </div>
        {/* Sorting form */}
        {/* Car show */}
        <div className="w-full">
          <div className="mb-8">
            <label htmlFor="searchQuery" className="font-bold text-xl">
              Search Car:
            </label>
            <input
              type="text"
              id="searchQuery"
              name="searchQuery"
              placeholder="Model || Category"
              value={searchQuery}
              onChange={handleFilterChange}
              className="border rounded py-1 px-2 lg:ml-2"
            />
            <p className="absolute -mt-6 ml-44 lg:ml-72">
              <FaCar className="text-gray-500" />
            </p>
          </div>
          {currentCars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-6 gap-3">
              {currentCars.map((car) => (
                <CarCard key={car._id} car={car} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
              <EmptyData
                center={true}
                title="Sorry!!😔😔 This category cars are not available"
                subtitle="Please Select Other Categories."
              />
            </div>
          )}
        </div>

        {/* Car show */}
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-end">
        <Pagination
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </Container>
  );
};

export default CarCollection;

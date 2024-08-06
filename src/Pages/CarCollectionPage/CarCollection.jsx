import { useState } from "react";
import EmptyData from "../../Components/EmptyData/EmptyData";
import CarCard from "../../Components/Shared/CarCard";
import Container from "../../Components/Shared/Container";
import "./CarSortInput.css";
import { FaCar } from "react-icons/fa6";
import Pagination from "../../Components/Pagination/Pagination";
import { Helmet } from "react-helmet-async";
import UseAllCar from "../../Hooks/UseAllCar";
import Logo2 from "../../Components/Shared/Logo2";
import { LoaderIcon } from "react-hot-toast";
import Loader from "./../../Components/Loader/Loader";

const CarCollection = () => {
  const [allCar, refetch, isLoading] = UseAllCar();
  // console.log(allCar);

  const [filterAllCar, setFilterAllCar] = useState(true);
  const [filterBrandNew, setFilterBrandNew] = useState(false);
  const [filterUsed, setFilterUsed] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500000);
  const [topSpeed, setTopSpeed] = useState(1000);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    switch (name) {
      case "filterAllCar":
        setFilterAllCar(true);
        setFilterBrandNew(false);
        setFilterUsed(false);
        break;
      case "filterBrandNew":
        setFilterBrandNew(true);
        setFilterAllCar(false);
        setFilterUsed(false);
        break;
      case "filterUsed":
        setFilterUsed(true);
        setFilterAllCar(false);
        setFilterBrandNew(false);
        break;
      case "selectedColor":
        setSelectedColor(value);
        break;
      case "minPrice":
        setMinPrice(Number(value));
        break;
      case "maxPrice":
        setMaxPrice(Number(value));
        break;
      case "topSpeed":
        setTopSpeed(Number(value));
        break;
      case "searchQuery":
        setSearchQuery(value);
        break;
      default:
        break;
    }
  };

  const filteredCars = allCar.filter((car) => {
    const carPrice = Number(car.CarPriceNew.replace(/,/g, ""));
    const carTopSpeed = Number(car.TopSpeed);
    const matchesSearchQuery =
      (car.Model &&
        car.Model.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (car.Category &&
        car.Category.toLowerCase().includes(searchQuery.toLowerCase()));

    if (filterAllCar) {
      return (
        matchesSearchQuery &&
        (!selectedColor || car.ExteriorColor === selectedColor) &&
        carPrice >= minPrice &&
        carPrice <= maxPrice &&
        carTopSpeed <= topSpeed
      );
    }
    if (filterBrandNew && car.CarCondition === "Brand New") {
      return (
        matchesSearchQuery &&
        (!selectedColor || car.ExteriorColor === selectedColor) &&
        carPrice >= minPrice &&
        carPrice <= maxPrice &&
        carTopSpeed <= topSpeed
      );
    }
    if (filterUsed && car.CarCondition === "Used") {
      return (
        matchesSearchQuery &&
        (!selectedColor || car.ExteriorColor === selectedColor) &&
        carPrice >= minPrice &&
        carPrice <= maxPrice &&
        carTopSpeed <= topSpeed
      );
    }
    return false;
  });

  // Pagination
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

  return (
    <Container>
      <Helmet>
        <title>Dream Car || Car Collection</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row gap-4 mt-12">
        {/* Sorting form */}
        <div className="lg:w-[500px] lg:h-[600px] shadow-xl bg-gradient-to-tl from-black via-slate-700 to-black text-white rounded-xl p-4">
          <div className="flex flex-col justify-center items-center">
            <p>
              <Logo2 />
            </p>
            <h2 className="font-semibold">Filter Cars</h2>
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
          <div className="mb-2 mt-6 text-slate-600">
            <label
              htmlFor="selectedColor"
              className="font-bold text-white text-xl"
            >
              Color:
            </label>
            <select
              id="selectedColor"
              name="selectedColor"
              value={selectedColor}
              onChange={handleFilterChange}
              className="border rounded py-1 px-2 ml-2"
            >
              <option value="">All Colors</option>
              <option value="Black" className="bg-black text-white">
                Black
              </option>
              <option value="White" className="bg-white text-black">
                White
              </option>
              <option value="Green" className="bg-green-500 text-white">
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
              <option value="Yellow" className="bg-yellow-500 text-white">
                Yellow
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
              max="500000"
              value={maxPrice}
              onChange={handleFilterChange}
              className="w-full range-slider"
              style={{ "--tw-thumb-bg": "#8a2be2" }}
            />
          </div>
          <div className="mb-2 mt-6">
            <h1 className="text-xl font-bold">Top Speed:</h1>
            <p className="mt-3 font-semibold">Speed: {topSpeed} km/h</p>
            <input
              type="range"
              id="topSpeed"
              name="topSpeed"
              min="0"
              max="1000"
              value={topSpeed}
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
          {isLoading ? (
            <div className="flex justify-center items-center h-[600px]">
              <Loader />
            </div>
          ) : currentCars.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentCars.map((car) => (
                <CarCard key={car._id} car={car} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-[600px]">
              <EmptyData message="No cars found matching your criteria." />
            </div>
          )}
          {filteredCars.length > 6 && (
            <Pagination
              currentPage={currentPage}
              totalPages={pageNumbers.length}
              paginate={paginate}
            />
          )}
        </div>
        {/* Car show */}
      </div>
    </Container>
  );
};

export default CarCollection;

import { Helmet } from "react-helmet-async";
import Categories from "../../Components/Categories/Categories";
import Banner from "./Banner/Banner";
import CustomerGarage from "./CustomerGarage/CustomerGarage";
import PopularCars from "./PopularCars/PopularCars";
import CategoriesRecondition from "../../Components/ReconditionCarCategories/CategoriesRecondition";
import ReconditionCar from "./ReconditionCar/ReconditionCar";
import { useState } from "react";
import ToggleBtnCarType from "./ToggleBtnCarType";
import BrandLogo from "./BrandLogo/BrandLogo";
import SpecialOffer from "./SpecialOffer/SpecialOffer";

const Home = () => {
  // =================================================================
  const [selectedCarType, setSelectedCarType] = useState("brandNew");

  const handleCarTypeSelection = (type) => {
    setSelectedCarType(type);
  };
  // =================================================================
  return (
    <div className="">
      <Helmet>
        <title>Home | Dream Car | Buy Or Sell Your Product</title>
      </Helmet>
      {/* banner section */}
      <Banner />

      <BrandLogo />
      <CustomerGarage />

      {/* toggle btn*/}
      <ToggleBtnCarType
        handleCarTypeSelection={handleCarTypeSelection}
        selectedCarType={selectedCarType}
      />
      {/* toggle btn*/}

      {selectedCarType === "brandNew" && (
        <>
          {/* car categories Brand new*/}
          <Categories />
          <PopularCars />
        </>
      )}
      {selectedCarType === "used" && (
        <>
          {/* car categories recondition */}
          <CategoriesRecondition />
          <ReconditionCar />
        </>
      )}

      <SpecialOffer />
      {/* <FacebookChat /> */}
    </div>
  );
};

export default Home;

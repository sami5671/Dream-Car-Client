import { Helmet } from "react-helmet-async";
import Categories from "../../Components/Categories/Categories";
import Banner from "./Banner/Banner";
import CustomerGarage from "./CustomerGarage/CustomerGarage";
import PopularCars from "./PopularCars/PopularCars";
import CategoriesRecondition from "../../Components/ReconditionCarCategories/CategoriesRecondition";
import ReconditionCar from "./ReconditionCar/ReconditionCar";
import { useState } from "react";
import ToggleBtnCarType from "./ToggleBtnCarType";

const Home = () => {
  // =================================================================
  const [selectedCarType, setSelectedCarType] = useState("brandNew");

  const handleCarTypeSelection = (type) => {
    setSelectedCarType(type);
  };
  // =================================================================
  return (
    <div>
      <Helmet>
        <title>Home | Dream Car | Buy Or Sell Your Product</title>
      </Helmet>
      {/* banner section */}
      <Banner />
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

      {/* <FacebookChat /> */}
    </div>
  );
};

export default Home;

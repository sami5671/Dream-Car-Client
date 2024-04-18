import { Helmet } from "react-helmet-async";
import Categories from "../../Components/Categories/Categories";
import Banner from "./Banner/Banner";
import CustomerGarage from "./CustomerGarage/CustomerGarage";
import PopularCars from "./PopularCars/PopularCars";
import CategoriesRecondition from "../../Components/ReconditionCarCategories/CategoriesRecondition";
import ReconditionCar from "./ReconditionCar/ReconditionCar";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Dream Car | Buy Or Sell Your Product</title>
      </Helmet>
      {/* banner section */}
      <Banner />
      <CustomerGarage />
      {/* car categories Brand new*/}
      <Categories />
      <PopularCars />

      {/* car categories recondition */}
      <CategoriesRecondition />
      <ReconditionCar />
    </div>
  );
};

export default Home;

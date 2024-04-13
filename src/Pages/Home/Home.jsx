import Categories from "../../Components/Categories/Categories";
import Banner from "./Banner/Banner";
import CustomerGarage from "./CustomerGarage/CustomerGarage";
import PopularCars from "./PopularCars/PopularCars";

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <Banner />
      <CustomerGarage />

      {/* car categories */}
      <Categories />
      <PopularCars />
    </div>
  );
};

export default Home;

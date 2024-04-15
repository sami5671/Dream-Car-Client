import { Helmet } from "react-helmet-async";
import Categories from "../../Components/Categories/Categories";
import Banner from "./Banner/Banner";
import CustomerGarage from "./CustomerGarage/CustomerGarage";
import PopularCars from "./PopularCars/PopularCars";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Dream Car | Buy Or Sell Your Product</title>
      </Helmet>
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

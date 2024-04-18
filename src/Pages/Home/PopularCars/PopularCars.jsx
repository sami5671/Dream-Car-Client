import { useEffect, useState } from "react";
import { getBrandNewCar } from "./../../../api/Cars";
import { useSearchParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import Container from "../../../Components/Shared/Container";
import CarCard from "./CarCard";
import EmptyData from "../../../Components/EmptyData/EmptyData";

const PopularCars = () => {
  // =================================================================

  const [cars, setCars] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const category = params.get("category");
  // console.log(category);

  useEffect(() => {
    setLoading(true);
    getBrandNewCar().then((data) => {
      if (category) {
        const filtered = data.filter((item) => item.Category === category);
        setCars(filtered);
      } else {
        setCars(data);
      }
      setLoading(false);
    });
  }, [category]);

  if (loading) {
    return <Loader />;
  }
  console.log(cars);
  // =================================================================
  return (
    <Container>
      {cars.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
          {cars?.map((car) => (
            <CarCard key={car._id} car={car}></CarCard>
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
    </Container>
  );
};

export default PopularCars;

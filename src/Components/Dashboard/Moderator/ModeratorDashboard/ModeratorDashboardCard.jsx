import AdminDashboardTotalCarsCard from "../../Admin/AdminCard/AdminDashboardTotalCarsCard";
import UseAllCar from "../../../../Hooks/UseAllCar";
import processing from "../../../../assets/Images/processingOrder.gif";
import packing from "../../../../assets/Images/packingOrder.gif";
import shipping from "../../../../assets/Images/ontheway.gif";
import delivered from "../../../../assets/Images/delivered.gif";
import totalCarImg from "../../../../assets/Images/cars1.png";
import UseToGetSoldCars from "../../../../Hooks/UseToGetSoldCars";
import DashboardCardModerator from "./DashboardCardModerator";

const ModeratorDashboardCard = () => {
  const [allCar] = UseAllCar();
  const [soldCars] = UseToGetSoldCars();

  //   console.log(soldCars);

  const totalCars = allCar.length;
  const newCars = allCar.filter((item) => item?.CarCondition === "Brand New");
  const usedCars = allCar.filter((item) => item?.CarCondition === "Used");

  //   const processingOrder = soldCars.filter(
  //     (item) => item?.status === "processing"
  //   );
  const packingOrder = soldCars.filter((item) => item?.status === "packing");
  const shippingOrder = soldCars.filter((item) => item?.status === "shipping");
  const deliveredOrder = soldCars.filter(
    (item) => item?.status === "delivered"
  );

  return (
    <div className="flex flex-col lg:flex-row  gap-4 lg:gap-5">
      {/* cards */}

      <AdminDashboardTotalCarsCard
        label="Total Cars"
        figure={totalCars}
        img={totalCarImg}
        newCar={newCars.length}
        usedCar={usedCars.length}
      />
      {/* <DashboardCardModerator
        label="Processing"
        figure={processingOrder.length}
        img={processing}
      /> */}
      <DashboardCardModerator
        label="Packing"
        figure={packingOrder.length}
        img={packing}
      />
      <DashboardCardModerator
        label="Shipping"
        figure={shippingOrder.length}
        img={shipping}
      />
      <DashboardCardModerator
        label="Delivered"
        figure={deliveredOrder.length}
        img={delivered}
      />
    </div>
  );
};

export default ModeratorDashboardCard;

import DashboardCard from "../../../Shared/DashboardCard";
import carImg from "../../../../assets/Images/car.png";
import saleImg from "../../../../assets/Images/totalSale.png";
import acceptImg from "../../../../assets/Images/approve.gif";
import rejectImg from "../../../../assets/Images/reject.gif";
import UseToGetUserAddedCarByEmail from "./../../../../Hooks/UseToGetUserAddedCarByEmail";
import UseToGetUserTotalSaleByEmail from "../../../../Hooks/UseToGetUserTotalSaleByEmail";
const UserDashboardCard = () => {
  const [userAddedCarByEmail] = UseToGetUserAddedCarByEmail();
  const [totalSaleByEmail] = UseToGetUserTotalSaleByEmail();

  const myGarage = userAddedCarByEmail.length;
  const rejectedCar = userAddedCarByEmail.filter(
    (item) => item?.CarStatus === "cancel"
  );
  const acceptedCar = userAddedCarByEmail.filter(
    (item) => item?.CarStatus === "accepted"
  );

  console.log(totalSaleByEmail);

  const totalSales = totalSaleByEmail.reduce((total, item) => {
    const carPrice = parseInt(item?.car?.CarPriceNew?.replace(/,/g, ""), 10);
    return total + carPrice;
  }, 0);

  return (
    <>
      <div className="flex flex-col lg:flex-row  gap-4 lg:gap-5">
        {/* card s */}
        <DashboardCard label="My Garage" figure={myGarage} img={carImg} />
        <DashboardCard label="Total Sale $" figure={totalSales} img={saleImg} />
        <DashboardCard
          label="Accepted Cars"
          figure={acceptedCar.length}
          img={acceptImg}
        />
        <DashboardCard
          label="Rejected Cars"
          figure={rejectedCar.length}
          img={rejectImg}
        />
      </div>
    </>
  );
};

export default UserDashboardCard;

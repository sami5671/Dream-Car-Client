import UserDashboardCard from "./UserDashboardCard";
import UserDashboardNavbar from "./UserDashboardNavbar";
import UserDashboardShippingStatus from "./UserDashboardShippingStatus";
import UserDashboardStatistics from "./UserDashboardStatistics";
import UserSoldCars from "./UserSoldCars";

const UserDashboard = () => {
  return (
    <>
      <UserDashboardNavbar />
      <section className="mt-10 font-roboto">
        <UserDashboardCard />
      </section>
      <section className="mt-10 font-roboto">
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <div className="lg:w-[600px]">
            <UserDashboardShippingStatus />
          </div>
          <div className="lg:w-1/2">
            <UserSoldCars />
          </div>
        </div>
      </section>
      <section className="mt-10 font-roboto">
        <UserDashboardStatistics />
      </section>
    </>
  );
};

export default UserDashboard;

import ModeratorDashboardCard from "./ModeratorDashboardCard";
import ModeratorDashboardNavbar from "./ModeratorDashboardNavbar";
import ModeratorDashboardStatistics from "./ModeratorDashboardStatistics";

const ModeratorDashboard = () => {
  return (
    <>
      <section>
        <ModeratorDashboardNavbar />
      </section>
      <section className="mt-12">
        <ModeratorDashboardCard />
      </section>
      <section className="mt-12">
        <ModeratorDashboardStatistics />
      </section>
    </>
  );
};

export default ModeratorDashboard;

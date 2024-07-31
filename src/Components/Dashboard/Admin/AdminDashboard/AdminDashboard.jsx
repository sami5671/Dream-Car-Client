import AdminDashboardCard from "./AdminDashboardCard";
import AdminDashboardNavbar from "./AdminDashboardNavbar";
import AdminDashboardStatistics from "./AdminDashboardStatistics";

const AdminDashboard = () => {
  return (
    <>
      <section>
        <AdminDashboardNavbar />
      </section>
      <section className="mt-12">
        <AdminDashboardCard />
      </section>
      <section className="mt-12">
        <AdminDashboardStatistics />
      </section>
    </>
  );
};

export default AdminDashboard;

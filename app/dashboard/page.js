
import Sidebar from "@/components/sidebar/Sidebar";
import Analytics from "@/pages/dashboardPages/Analytics";

const Dashboard = () => {
  return (
    <section className="flex">
      <Sidebar />
      <Analytics />
    </section>
  );
};

export default Dashboard;

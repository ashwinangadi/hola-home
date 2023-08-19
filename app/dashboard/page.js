import Content from "@/dashboardPages/Dashboard";
import Sidebar from "@/sidebar/Sidebar";


const Dashboard = () => {
  return (
    <section className="flex">
      <Sidebar />
      <Content />
    </section>
  );
};

export default Dashboard;

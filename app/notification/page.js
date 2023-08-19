import Header from "@/components/Header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

const Notification = () => {
  return (
    <section className="flex">
      <Sidebar />
      <div className="w-full space-y-10">
        <Header name="Notification" />
        <p className="text-center text-5xl font-extrabold mt-10">No Notifications</p>
      </div>
    </section>
  );
};

export default Notification
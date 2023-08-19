import Header from "@/components/Header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

const ManageUser = () => {
  return (
    <section className="flex">
      <Sidebar />
      <div className="w-full space-y-10">
        <Header name="Manage User" />
        <p className="text-center text-5xl font-extrabold mt-10">No Users</p>
      </div>
    </section>
  );
};
export default ManageUser;

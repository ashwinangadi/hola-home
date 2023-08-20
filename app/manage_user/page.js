"use client";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ManageUser = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <section className="flex">
      <Sidebar />
      <div className="w-full space-y-10">
        <Header name="Manage User" />
        <p className="blank-page">No Users</p>
      </div>
    </section>
  );
};
export default ManageUser;

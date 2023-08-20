'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/sidebar/Sidebar";
import Analytics from "@/pages/dashboardPages/Analytics";

const Dashboard = () => {
  const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])
  
  return (
    <section className="flex">
      <Sidebar />
      <Analytics />
    </section>
  );
};

export default Dashboard;

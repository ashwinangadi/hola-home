"use client";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Notification = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <>
      <p className="blank-page">No Notifications</p>
    </>
  );
};

export default Notification;

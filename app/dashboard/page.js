"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import Button from "@/components/button/Button";
import Header from "@/components/header/Header";
import { cards } from "@/utility";
import Image from "next/image";

const Dashboard = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <>
      <div className="dashboard-cards">
        {cards?.map((item) => {
          return (
            <span key={item.name} className="bg-[#F9C900] rounded-2xl">
              <span className="cards">
                <Image src={item.icon} width={24} height={24} alt="icon" />
                <span className="md:space-y-3 lg:space-y-1">
                  <p className="text-xs md:text-sm font-semibold text-[#222222]">
                    {item.name}
                  </p>
                  <p className="text-lg md:text-2xl font-bold">{item.figure}</p>
                </span>
              </span>
            </span>
          );
        })}
      </div>
      <div className="flex-center ">
        <Button className={"dashboard-button"} text="Visit Google Analytics" />
      </div>
    </>
  );
};

export default Dashboard;

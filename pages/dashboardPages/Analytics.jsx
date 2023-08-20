import Button from "@/components/button/Button";
import Header from "@/components/header/Header";
import { cards } from "@/utility";
import Image from "next/image";

const Analytics = () => {
  return (
    <section className="w-full space-y-10">
      <Header name="Dasboard" />
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
    </section>
  );
};

export default Analytics;

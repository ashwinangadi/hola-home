import Header from "@/components/Header/Header";
import SidebarSmallScreen from "@/components/sidebar/SidebarSmallScreen";
import { cards } from "@/utility";
import Image from "next/image";

const Analytics = () => {
  return (
    <section className="w-full space-y-10">
      {/* py-8 px-12 */}
      {/* <header className="flex justify-between px-5 md:px-12 items-center h-14 md:h-24 shadow-sm ">
        <span className="flex-center">
          <SidebarSmallScreen />
          <h1 className="text-sm md:text-[22px] font-semibold">Dashboard</h1>
        </span>
        <span className="hidden lg:block">
          <button className=" text-base font-medium bg-[#FFE471] py-3 px-7 rounded-[35px]  flex-center gap-2">
            Refresh
            <Image src="/refreshIcon.svg" width={24} height={24} alt="icon" />
          </button>
        </span>
        <Image
          src="/refreshIcon.svg"
          width={24}
          height={24}
          alt="icon"
          className="block lg:hidden"
        />
      </header> */}
      <Header name="Dasboard" />
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-3 md:gap-10 px-[25px] md:px-[50px]">
        {cards?.map((item) => {
          return (
            <span className="bg-[#F9C900] rounded-2xl">
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
        <button className="py-[18px] px-[30px] md:mt-10 bg-[#FCCF12] rounded-[35px] text-xs md:text-[22px] font-semibold text-white">
          Visit Google Analytics
        </button>
      </div>
    </section>
  );
};

export default Analytics;

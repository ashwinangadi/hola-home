import Image from "next/image";
import SidebarSmallScreen from "../sidebar/SidebarSmallScreen";

const Header = ({ name }) => {
  return (
    <header className="flex justify-between px-5 md:px-12 items-center h-14 md:h-24 shadow-sm ">
      <span className="flex-center">
        <SidebarSmallScreen />
        <h1 className="text-sm md:text-[22px] font-semibold">{name}</h1>
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
    </header>
  );
};
export default Header;

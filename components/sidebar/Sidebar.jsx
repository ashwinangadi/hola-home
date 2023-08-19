import { sidebar } from "@/utility";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="flex-col-center space-y-6">
        <Image
          src="/holaHomeBlack.png"
          width={167}
          height={95}
          priority
          alt="holaHomeBlack"
        />
        <span className="w-full">
          {sidebar?.map((item) => {
            return (
              <Link href={item.link}>
                <span key={item.name} className="menu-item py-5 ps-9">
                  <Image
                    src={item.icon}
                    width={24}
                    height={24}
                    priority
                    alt="holaHomeBlack"
                  />
                  <p className="text-sm font-semibold">{item.name}</p>
                </span>
              </Link>
            );
          })}
        </span>
      </div>
    </section>
  );
};
export default Sidebar;

"use client";
import Image from "next/image";
import Link from "next/link";
import signOutUser from "@/firebase/auth/signout";

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
        <ul className="w-full">
          <Link href="/dashboard">
            <li className="menu-item py-5 ps-9">
              <Image
                src="/dashboardIcon.svg"
                width={24}
                height={24}
                priority
                alt="holaHomeBlack"
              />
              <p className="text-sm font-semibold">Dashboard</p>
            </li>
          </Link>
          <Link href="/dashboard/manage_user">
            <li className="menu-item py-5 ps-9">
              <Image
                src="/mUserIcon.svg"
                width={24}
                height={24}
                priority
                alt="holaHomeBlack"
              />
              <p className="text-sm font-semibold">Manage Users</p>
            </li>
          </Link>
          <Link href="/dashboard/notification">
            <li className="menu-item py-5 ps-9">
              <Image
                src="/notificationIcon.svg"
                width={24}
                height={24}
                priority
                alt="holaHomeBlack"
              />
              <p className="text-sm font-semibold">Notification</p>
            </li>
          </Link>

          <Link href="/">
            <li
              className="menu-item py-5 ps-9 cursor-pointer"
              onClick={async () => await signOutUser()}
            >
              <Image
                src="/logoutIcon.svg"
                width={24}
                height={24}
                priority
                alt="holaHomeBlack"
              />
              <p className="text-sm font-semibold">Logout</p>
            </li>
          </Link>
        </ul>
      </div>
    </section>
  );
};
export default Sidebar;

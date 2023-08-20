"use client";
import signOutUser from "@/firebase/auth/signout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SidebarSmallScreen = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex items-center justify-between lg:hidden">
      <div className="flex-center">
        {!modal ? (
          <svg
            className="ham hamRotate ham1 z-50"
            viewBox="0 0 100 100"
            width="50"
            onClick={() => {
              setModal(true);
            }}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -npm run dev13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        ) : (
          <svg
            className={`${modal && "active"} ham hamRotate ham1 z-50`}
            viewBox="0 0 100 100"
            width="50"
            onClick={() => {
              setModal(false);
            }}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        )}
      </div>
      <div className={`menu-modal ${!modal && "hidden"}`}>
        <div className="flex-col-center space-y-6 mt-5">
          <Image
            src="/holaHomeBlack.png"
            width={167}
            height={95}
            priority
            alt="holaHomeBlack"
          />

          <ul className="w-full">
            <Link href="/dashboard">
              <li className="menu-item py-3 ps-5">
                <Image
                  src="/dashboardIcon.svg"
                  width={20}
                  height={20}
                  priority
                  alt="holaHomeBlack"
                />
                <p
                  className="text-sm font-semibold"
                  onClick={() => setModal(false)}
                >
                  Dashboard
                </p>
              </li>
            </Link>
            <Link href="/manage_user">
              <li className="menu-item py-3 ps-5">
                <Image
                  src="/mUserIcon.svg"
                  width={20}
                  height={20}
                  priority
                  alt="holaHomeBlack"
                />
                <p
                  className="text-sm font-semibold"
                  onClick={() => setModal(false)}
                >
                  Manage Users
                </p>
              </li>
            </Link>
            <Link href="/notification">
              <li className="menu-item py-3 ps-5">
                <Image
                  src="/notificationIcon.svg"
                  width={20}
                  height={20}
                  priority
                  alt="holaHomeBlack"
                />
                <p
                  className="text-sm font-semibold"
                  onClick={() => setModal(false)}
                >
                  Notification
                </p>
              </li>
            </Link>

            <Link href="/">
              <li
                className="menu-item py-3 ps-5 cursor-pointer"
                onClick={async () => {
                  await signOutUser();
                  setModal(false);
                }}
              >
                <Image
                  src="/logoutIcon.svg"
                  width={20}
                  height={20}
                  priority
                  alt="holaHomeBlack"
                />
                <p className="text-sm font-semibold">Logout</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SidebarSmallScreen;

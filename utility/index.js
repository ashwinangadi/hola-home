// import { useAuthContext } from "@/context/AuthContext";
// const { user, setUser } = useAuthContext()

export const sidebar = [
  {
    icon: "/dashboardIcon.svg",
    name: "Dashboard",
    link: "/dashboard",
    function : ()=>console.log('Dashboard')
  },
  {
    icon: "/mUserIcon.svg",
    name: "Manage Users",
    link: "/manage_user",
    function : ()=>console.log('Manage')
  },
  {
    icon: "/notificationIcon.svg",
    name: "Notification",
    link: "/notification",
    function : ()=>console.log('Notification')
  },
  {
    icon: "/logoutIcon.svg",
    name: "Logout",
    link: "/dashboard",
    function : ()=> setUser(null)
  },
];

export const cards = [
  {
    name: "Total Users",
    figure : "98,750",
    icon:"/usersIcon.svg"
  },
  {
    name: "Total Landlords",
    figure : "64,750",
    icon:"/landlordsIcon.svg"
  },
  {
    name: "Total Properties",
    figure : "80,700",
    icon:"/propertiesIcon.png"
  },
  {
    name: "Total Bookings",
    figure : "36,860",
    icon:"/bookingsIcon.svg"
  },
]
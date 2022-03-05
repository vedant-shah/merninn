import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/aboutus",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Facilities",
    path: "/facilities",
    icon: <CgIcons.CgGym />,
    cName: "nav-text",
  },
  {
    title: "Bookings",
    path: "/booking-history",
    icon: <AiIcons.AiOutlineDashboard />,
    cName: "nav-text",
  },
  {
    title: "Book Now!",
    path: "/booking",
    icon: <FaIcons.FaUmbrellaBeach />,
    cName: "nav-text",
  },
  {
    title: "Developer",
    path: "/developer",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Source Code",
    path: "/sourecode",
    icon: <IoIcons.IoLogoGithub />,
    cName: "nav-text",
  },
];

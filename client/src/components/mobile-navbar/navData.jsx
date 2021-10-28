import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";

export const navData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "#section1",
    icon: <AiIcons.AiTwotoneProfile />,
    cName: "nav-text",
  },
  {
    title: "Shop",
    path: "#section3",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "#section4",
    icon: <AiIcons.AiFillContacts />,
    cName: "nav-text",
  },
];

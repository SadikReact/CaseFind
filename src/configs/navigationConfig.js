import React from "react";
import {
  FaRegFileAlt,
  FaStream,
  FaStar,
  FaGopuram,
  FaPodcast,
  FaFileSignature,
  FaBell,
  FaShoppingBag,
  FaWallet,
  FaHome,
  FaUserEdit,
  FaAdversal,
  FaStore,
  FaUsers,
  FaCircle,
  FaCog,
  FaQuestionCircle,
  FaSlidersH,
  FaUser,
  FaShoppingCart,
  FaGift,
  FaProductHunt,
  FaList,
  FaCode,
  FaCodeBranch,
  FaCircleNotch,
} from "react-icons/fa";
import * as Icon from "react-feather";
import { BsImage } from "react-icons/bs";
import { MdOutlineFolderSpecial } from "react-icons/md";
import { GiWantedReward } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillBell } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";

// eslint-disable-next-line no-sparse-arrays
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    
    icon: <FaHome size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/dashboard",
  },

  {
    id: "producttype",
    title: "User List",
    type: "item",
    icon: <FaCircle size={8} />,
    permissions: ["admin", "editor"],
    navLink: "/app/CaseFinder/user/userlist",
  },
  
  {
    id: "Listpdf",
    title: "Pdf List",
    type: "item",
    icon: <FaCircle size={8} />,
    permissions: ["admin", "editor"],
    navLink: "/app/CaseFinder/account/PDFList",
  },
  {
    id: "List",
    title: "Advocate List",
    type: "item",
    icon: <FaCircle size={8} />,
    permissions: ["admin", "editor"],
    navLink: "/app/CaseFinder/account/AdvocateList",
  },
  {
    id: "subCategory",
    title: "Sub Category",
    type: "item",
    icon: <FaCircle size={8} />,
    permissions: ["admin", "editor"],
    navLink: "/app/CaseFinder/account/SubCategoryList",
  },
  {
    id: "logout",
    title: "Logout",
    type: "item",
    icon: <Icon.ArrowRight size={15} />,
    permissions: ["admin", "editor"],
  },

];
export default navigationConfig;

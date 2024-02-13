import React from "react";
import {
  FaHome,
  FaUserEdit,
  ShoppingBag,
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
} from "react-icons/fa";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "collapse",
    icon: <FaHome size={20} />,
    // badge: "warning",
    // badgeText: "2",
    children: [
      {
        id: "analyticsDash",
        title: "Analytics",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/",
      },
    ],
  },
  {
    type: "groupHeader",
    groupTitle: "My Components",
  },
  {
    id: "customer",
    title: "Customer",
    type: "collapse",
    icon: <FaUsers size={20} />,
    children: [
      {
        id: "customerList",
        title: "All Customer",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/customer/customerList",
      },
    ],
  },
  {
    id: "seller",
    title: "Seller",
    type: "collapse",
    icon: <FaUser size={20} />,
    children: [
      {
        id: "SellerList",
        title: "All Seller",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/seller/sellerList",
      },
    ],
  },
  {
    id: "productManagement",
    title: "Product Management",
    type: "collapse",
    icon: <Icon.ShoppingBag size={20} />,
    children: [
      {
        id: "simpleProductList",
        title: "Simple Product",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productManagement/simpleProduct/simpleProductList",
      },

    ],
  },
  {
    id: "store",
    title: "Store",
    type: "collapse",
    icon: <FaStore size={20} />,
    children: [
      {
        id: "stores",
        title: "Stores",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/store/stores/storesList",
      },
    
    ],
  },
  {
    id: "order",
    title: "Orders List",
    type: "collapse",
    icon: <FaShoppingCart size={20} />,
    children: [
      {
        id: "allOrder",
        title: "All Order",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/order/allOrder",
      },
    
    ],
  },
  // {
  //   id: "offersandcoupons",
  //   title: "Coupons",
  //   type: "collapse",
  //   icon: <FaGift size={20} />,
  //   children: [
  //     {
  //       id: "offerList",
  //       title: "Offers",
  //       type: "item",
  //       icon: < FaCircle size={12}/>,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/offerAndCoupon/offer/offerList",
  //     },
  //     {
  //       id: "couponsList",
  //       title: "Coupons",
  //       type: "item",
  //       icon: <FaCircle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/offerAndCoupon/coupons/couponsList",
  //     },
  //   ],
  // },
  // {
  //   id: "sliderList",
  //   title: "Slider",
  //   icon: <FaSlidersH size={20} />,
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/slider/sliderList",
  // },
  {
    id: "sellerSubscription",
    title: "Seller subscription Details",
    type: "item",
    icon: <FaUserEdit size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/sellerSubs/sellerSubscription",
  },
  // {
  //   id: "TAndCList",
  //   title: "Terms And Condition",
  //   type: "item",
  //   icon: <FaFileSignature size={20} />,
  //   navLink: "/app/termsAndCondition/tAndCList",
  // },
  // {
  //   id: "privacyPolicy",
  //   title: "Privacy Policy",
  //   type: "item",
  //   icon: <FaCog size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/privacyPolicy/privacyPolicy",
  // },
  // {
  //   id: "sponsoredAd",
  //   title: "Sponsored Ads Details",
  //   type: "item",
  //   icon: <FaAdversal size={20} />,
  //   navLink: "/app/sponsoredAds/sponsoredAd",
  // },
  // {
  //   id: "helpAndSupport",
  //   title: "Help And Support",
  //   type: "collapse",
  //   icon: <FaQuestionCircle size={20} />,
  //   children: [
  //     {
  //       id: "importDemo",
  //       title: "Import Demo",
  //       type: "item",
  //       icon: <FaCircle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/helpAndSupport/importDemo/ImportDemo",
  //     },
  //   ],
  // },
];
export default navigationConfig;
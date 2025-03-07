import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Certificates",
    path: "/certificates",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "TSA Foods",
        path: "/tsa_foods",
        newTab: false,
      },
      {
        id: 42,
        title: "Aphrovia",
        path: "/Aphrovia",
        newTab: false,
      },
      {
        id: 43,
        title: "Maize",
        path: "/maize",
        newTab: false,
      },
      {
        id: 44,
        title: "Agriculture Produce",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Spices",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Textiles & Apparels",
        path: "/signin",
        newTab: false,
      },
      {
        id: 46,
        title: "Arts & Antiques",
        path: "/signin",
        newTab: false,
      },
    ],
  },
];
export default menuData;

import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "India's Corn Meal Exports: Navigating Domestic Demand and Global Competition",
    paragraph:
      "The Impact of Indian Maize on International Markets.",
    image: "/images/assets/maize.jpg",
    author: {
      name: "Tikam Singh Alma",
      image: "/images/blog/author-01.png",
      designation: "CEO",
    },
    tags: [],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "India's Rice Exports: Meeting Global Demand with Quality and Tradition",
    paragraph:
      " India's Commitment to Supplying Premium Rice Worldwide.",
    image: "/images/blog/wheat.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Wheat"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "The Spice Route Reimagined: India's Role in Flavoring the World",
    paragraph:
      "The Journey of Indian Spices Across Continents.",
    image: "/images/blog/spices.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;

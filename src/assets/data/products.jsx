import Image from "../products/product_2.png";
import Image1 from "../products/product_3.png";
import Image2 from "../products/product_4.png";
import Image3 from "../products/product1.png";
import Image4 from "../products/product_5.png";
import Image5 from "../products/product_6.png";
import Image6 from "../products/product_7.png";
import Image7 from "../products/product_8.png";
import Image10 from "../products/product_10.png";
import children from "../products/children.jpg";

const products = [
  {
    id: 1,
    name: "Brown fun bag",
    price: 17,
    oldPrice: 21,
    image: Image,
    description: "Description for Brown fun bag.",
    categories: ["accessories", "deals"],
  },
  {
    id: 2,
    name: "Fleece Sweaters ",
    price: 35,
    oldPrice: 38,
    image: Image6,
    description: "Description for Fleece Sweaters.",
    categories: ["women", "womenPromo", "new"],
  },
  {
    id: 3,
    name: "Women's Leather Wallet",
    price: 23,
    oldPrice: 27,
    image: Image7,
    description: "Description for Women's Leather Wallet.",
    categories: ["women", "accessories", "deals", "womenPromo"],
  },
  {
    id: 4,
    name: "Fleece Sweaters pullover.",
    price: 45,
    oldPrice: 70,
    image: Image1,
    description: "Description for Fleece Sweaters pullover.",
  },
  {
    id: 5,
    name: "Basics duffel bag",
    price: 21,
    oldPrice: 24,
    image: Image2,
    description: "Description for Basics duffel bag.",
    categories: ["accessories", "new", "deals"],
  },
  {
    id: 6,
    name: "Men's Hoodie Casual",
    price: 45,
    oldPrice: 70,
    image: Image3,
    description: "Description for Men's Hoodie.",
    categories: ["men", "new"],
  },
  {
    id: 7,
    name: "DECARSDZ Men's Oxfords",
    price: 21,
    oldPrice: 25,
    image: Image4,
    description: "Description for DECARSDZ Men's Oxfords.",
    categories: ["men", "shoes", "new"],
  },
  {
    id: 8,
    name: "Sunglasses",
    price: 21,
    oldPrice: 27,
    image: Image5,
    description: "Description for Sunglasses.",
    categories: ["accessories", "deals", "new"],
  },
  {
    id: 9,
    name: "Sweatshirt",
    price: 15,
    oldPrice: 17,
    image: Image10,
    description: "Description for Sweatshirt.",
    categories: ["men", "deals", "new"],
  },
  {
    id: 10,
    name: "Fluffy sweater",
    price: 23,
    oldPrice: 34,
    image: Image1,
    description: "Description for Fluffy sweater.",
    categories: ["women", "deals", "womenPromo"],
  },
  {
    id: 16,
    name: "Kids combo",
    price: 87,
    oldPrice: 99,
    image: children,
    description: "Description for Kids combo",
    categories: ["children"],
  },
];
export default products;

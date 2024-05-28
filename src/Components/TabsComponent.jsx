import Image from "../assets/products/product_2.png";
import Image1 from "../assets/products/product_3.png";
import Image2 from "../assets/products/product_4.png";
import Image3 from "../assets/products/product1.png";
import Image4 from "../assets/products/product_5.png";
import Image5 from "../assets/products/product_6.png";
import Image6 from "../assets/products/product_7.png";
import Image7 from "../assets/products/product_8.png";
import Image8 from "../assets/products/product_8.png";
import Image9 from "../assets/products/product_9.png";
import Image10 from "../assets/products/product_10.png";
import Products from "./Products";
import AddButton from "./AddButton";
import { useCart } from "./CartContext";
// TabsComponent.js
import React from "react";
import { Tab, Tabs } from "react-bootstrap";

const TabsComponent = () => {
  const { addToCart } = useCart();
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" style={{ fontWeight: 900 }} title="All">
        <Products />
      </Tab>
      <Tab eventKey="profile" title="Men">
        <Products />
      </Tab>

      <Tab eventKey="contact" title="Women">
        <Products />
      </Tab>
      <Tab eventKey="children" title="Children">
        <Products />
      </Tab>
      <Tab eventKey="accessories" title="Accessories">
        <Products />
      </Tab>
      <Tab eventKey="shoes" title="Shoes">
        <Products />
      </Tab>
    </Tabs>
  );
};

export default TabsComponent;

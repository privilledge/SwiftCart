import Products from "./Products";

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

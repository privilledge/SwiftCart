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
        <Products category={"men"} />
      </Tab>

      <Tab eventKey="women" title="Women">
        <Products category={"women"} />
      </Tab>
      <Tab eventKey="children" title="Children">
        <Products category={"children"} />
      </Tab>
      <Tab eventKey="accessories" title="Accessories">
        <Products category={"accessories"} />
      </Tab>
      <Tab eventKey="shoes" title="Shoes">
        <Products category={"shoes"} />
      </Tab>
    </Tabs>
  );
};

export default TabsComponent;

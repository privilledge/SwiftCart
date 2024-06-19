import Products from "./Products";

import { useCart } from "./CartContext";
// TabsComponent.js
import React from "react";
import { Tab, Tabs } from "react-bootstrap";

const TabsComponent = ({ searchQuery }) => {
  const { addToCart } = useCart();
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" style={{ fontWeight: 900 }} title="All">
        <Products searchQuery={searchQuery} />
      </Tab>
      <Tab eventKey="profile" title="Men">
        <Products category={"men"} searchQuery={searchQuery} />
      </Tab>

      <Tab eventKey="women" title="Women">
        <Products category={"women"} searchQuery={searchQuery} />
      </Tab>
      <Tab eventKey="children" title="Children">
        <Products category={"children"} searchQuery={searchQuery} />
      </Tab>
      {/* <Tab eventKey="accessories" title="Accessories">
        <Products category={"accessories"} searchQuery={searchQuery} />
      </Tab> */}
      <Tab eventKey="shoes" title="Shoes">
        <Products category={"shoes"} searchQuery={searchQuery} />
      </Tab>
    </Tabs>
  );
};

export default TabsComponent;

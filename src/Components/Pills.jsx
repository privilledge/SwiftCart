// PillsComponent.js
import React from "react";
import { Nav } from "react-bootstrap";

const PillsComponent = () => {
  return (
    <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
      <Nav.Item></Nav.Item>
      <Nav.Item></Nav.Item>
      <Nav.Item></Nav.Item>
    </Nav>
  );
};

export default PillsComponent;

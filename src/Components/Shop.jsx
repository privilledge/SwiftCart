import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import TabsComponent from "./TabsComponent";
import PillsComponent from "./Pills";
function Shop() {
  return (
    <>
      <Header showSearch={true} />

      <br />

      <div className="container shop-container">
        <TabsComponent />
        <PillsComponent />
      </div>

      <Footer />
    </>
  );
}
export default Shop;

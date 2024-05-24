import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import TabsComponent from "./TabsComponent";
import PillsComponent from "./Pills";
function Shop() {
  return (
    <>
      <Header />
      <div className="carouse">
        <h3>Shop</h3>
      </div>
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

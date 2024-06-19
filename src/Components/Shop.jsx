import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import TabsComponent from "./TabsComponent";
import PillsComponent from "./Pills";
import { useState } from "react";

function Shop() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header showSearch={true} onSearch={handleSearch} />

      <br />

      <div className="container shop-container">
        <div className="row"></div>
        <TabsComponent searchQuery={searchQuery} />

        <PillsComponent />
      </div>

      <Footer />
    </>
  );
}
export default Shop;

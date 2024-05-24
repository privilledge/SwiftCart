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
        <div className="container">
          <div className="new-products">
            <div className="container boxes">
              <div className="col-lg-4 col-md-4 col-sm-12 box">
                <img src={Image} />
                <div className="bottom row">
                  <div className="info col-7">
                    <h6 className="">Brown fun b...</h6>
                    <h6 className="price">
                      $17 <s>$21</s>
                    </h6>
                  </div>
                  <div className="button col-5">
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4 col-sm-12 box">
                <img src={Image6} />
                <div className="bottom row">
                  <div className="info col-7">
                    <h6 className="">Fleece Sweaters pu...</h6>
                    <h6 className="price">
                      $35 <s>$38</s>
                    </h6>
                  </div>
                  <div className="button col-5">
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4 col-sm-12 box">
                <img src={Image7} />
                <div className="bottom row">
                  <div className="info col-7">
                    <h6 className="">Women's Leather W...</h6>
                    <h6 className="price">
                      $23 <s>$27</s>
                    </h6>
                  </div>
                  <div className="button col-5">
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="container boxes">
              <div className="col-lg-4  col-md-6 col-sm-12 box">
                <img src={Image1} />
                <div className="bottom row">
                  <div className="info col-7">
                    <h6 className="">Fleece Sweaters pul...</h6>
                    <h6 className="price">
                      $45 <s>$70</s>
                    </h6>
                  </div>
                  <div className="button col-5">
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-6 col-sm-12 box">
                <img src={Image2} />
                <div className="bottom row">
                  <div className="info col-7">
                    <h6 className="">Basics duffel bag...</h6>
                    <h6 className="price">
                      $21 <s>$24</s>
                    </h6>
                  </div>
                  <div className="button col-5">
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-6 col-sm-12 box">
                <img src={Image3} />
                <div className="bottom row">
                  <div className="info col-7">
                    <h6 className="">Men's Hoodie Cas...</h6>
                    <h6 className="price">
                      $45 <s>$70</s>
                    </h6>
                  </div>
                  <div className="button col-5">
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="container boxes">
              <div className="col-lg-4 col-md-4 col-sm-12 box">
                <img src={Image} />
                <div className="bottom row">
                  <div className="info col-7">
                    <h6 className="">Brown fun b...</h6>
                    <h6 className="price">
                      $17 <s>$21</s>
                    </h6>
                  </div>
                  <div className="button col-5">
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4 col-sm-12 box">
                <img src={Image6} />
                <div className="bottom row">
                  <div className="info col-7">
                    <h6 className="">Fleece Sweaters pu...</h6>
                    <h6 className="price">
                      $35 <s>$38</s>
                    </h6>
                  </div>
                  <div className="button col-5">
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4 col-sm-12 box">
                <img src={Image7} />
                <div className="bottom row">
                  <div className="info col-7">
                    <h6 className="">Women's Leather W...</h6>
                    <h6 className="price">
                      $23 <s>$27</s>
                    </h6>
                  </div>
                  <div className="button col-5">
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="shoes" title="Shoes">
        <Products />
      </Tab>
    </Tabs>
  );
};

export default TabsComponent;

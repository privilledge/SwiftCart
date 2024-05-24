import Carousel from "./MyCarousel";
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
import Promo from "./Promo";
import Header from "./Header";
import Footer from "./Footer";
import AddButton from "./AddButton";
import { useNavigate } from "react-router-dom";

import { useCart } from "./CartContext";
function Home() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const clickShopButton = () => {
    navigate("/Shop");
  };

  const products = [
    {
      id: 1,
      name: "Brown fun b...",
      price: 17,
      oldPrice: 21,
      image: Image,
    },
    {
      id: 2,
      name: "Fleece Sweaters pu...",
      price: 35,
      oldPrice: 38,
      image: Image6,
    },
    {
      id: 3,
      name: "Women's Leather W...",
      price: 23,
      oldPrice: 27,
      image: Image7,
    },
    {
      id: 4,
      name: "Fleece Sweaters pul...",
      price: 45,
      oldPrice: 70,
      image: Image1,
    },
    {
      id: 5,
      name: "Basics duffel bag...",
      price: 21,
      oldPrice: 24,
      image: Image2,
    },
    {
      id: 6,
      name: "Men's Hoodie Cas...",
      price: 45,
      oldPrice: 70,
      image: Image3,
    },
    {
      id: 7,
      name: "Fleece Sweaters pul...",
      price: 45,
      oldPrice: 70,
      image: Image1,
    },
    {
      id: 8,
      name: "Basics duffel bag...",
      price: 21,
      oldPrice: 24,
      image: Image2,
    },
    {
      id: 9,
      name: "Men's Hoodie Cas...",
      price: 45,
      oldPrice: 70,
      image: Image3,
    },
  ];

  const exclusives = [
    {
      id: 10,
      name: "DECARSDZ Men's Oxfords",
      price: 21,
      oldPrice: 25,
      image: Image4,
      description:
        "DECARSDZ Men's Oxfords Casual Dress Shoes for Men Sneaker Business Walking Comfortable Tennis Mesh Fabric Shoes.",
    },
    {
      id: 11,
      name: "Men's Hoodie Cas...",
      price: 32,
      oldPrice: 35,
      image: Image9,
      description:
        "Locachy Men's Casual Corduroy Shirt Loose Button Down Corduroy Shacket Jacke.Soft fabric, comfortable and breathable, smooth to the touch.",
    },
  ];

  return (
    <>
      <Header />
      <Carousel />
      <div className="home">
        <div className="container">
          <div className="new-products">
            <h5 className="fw-bold title">Brand new products</h5>
            <hr className="line-deco" />
            <div className="container boxes">
              {products.slice(0, 3).map((product) => (
                <div
                  className="col-lg-4 col-md-4 col-sm-12 box"
                  key={product.id}
                >
                  <img src={product.image} alt={product.name} />
                  <div className="bottom row">
                    <div className="info col-7">
                      <h6 className="">{product.name}</h6>
                      <h6 className="price">
                        ${product.price} <s>${product.oldPrice}</s>
                      </h6>
                    </div>

                    <AddButton onClick={() => addToCart(product)} />
                  </div>
                </div>
              ))}
            </div>

            <br />
            <div className="container boxes">
              {products.slice(3, 6).map((product) => (
                <div
                  className="col-lg-4 col-md-4 col-sm-12 box"
                  key={product.id}
                >
                  <img src={product.image} alt={product.name} />
                  <div className="bottom row">
                    <div className="info col-7">
                      <h6 className="">{product.name}</h6>
                      <h6 className="price">
                        ${product.price} <s>${product.oldPrice}</s>
                      </h6>
                    </div>

                    <AddButton onClick={() => addToCart(product)} />
                  </div>
                </div>
              ))}
            </div>
            <br />
          </div>
        </div>
        <br />
        <div className="more-btn">
          <button className="btn shop-btn" onClick={clickShopButton}>
            Show more products
          </button>
        </div>
        <br />

        <div className="container">
          <h5 className="fw-bold title">Exclusive Offers</h5>
          <hr className="line-deco" />
          <div className="container boxes">
            {exclusives.map((exclusive) => (
              <div className="col-lg-6 box">
                <div className="row offers" key={exclusive.id}>
                  <div className="info col-lg-7 col-md-12 col-sm-12">
                    <h6 className="fw-bold">{exclusive.name}</h6>
                    <h6 className="fw-bold">
                      ${exclusive.price} <s>${exclusive.oldPrice}</s>
                    </h6>
                    <p className="descrip">{exclusive.description}</p>
                    <button
                      className="btn"
                      onClick={() => addToCart(exclusive)}
                    >
                      Add to cart
                    </button>
                  </div>

                  <div className="image col-5">
                    {" "}
                    <img src={exclusive.image} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="container">
          <div className="new-products">
            <h5 className="fw-bold title">Deals under $25</h5>
            <hr className="line-deco" />
            <div className="container boxes">
              {products.slice(0, 3).map((product) => (
                <div
                  className="col-lg-4 col-md-4 col-sm-12 box"
                  key={product.id}
                >
                  <img src={product.image} alt={product.name} />
                  <div className="bottom row">
                    <div className="info col-7">
                      <h6 className="">{product.name}</h6>
                      <h6 className="price">
                        ${product.price} <s>${product.oldPrice}</s>
                      </h6>
                    </div>
                    <AddButton onClick={() => addToCart(product)} />
                  </div>
                </div>
              ))}
            </div>

            <br />
            <div className="container boxes">
              {products.slice(3, 6).map((product) => (
                <div
                  className="col-lg-4 col-md-4 col-sm-12 box"
                  key={product.id}
                >
                  <img src={product.image} alt={product.name} />
                  <div className="bottom row">
                    <div className="info col-7">
                      <h6 className="">{product.name}</h6>
                      <h6 className="price">
                        ${product.price} <s>${product.oldPrice}</s>
                      </h6>
                    </div>
                    <AddButton onClick={() => addToCart(product)} />
                  </div>
                </div>
              ))}
            </div>
            <br />
            <div className="container boxes">
              {products.slice(6, 9).map((product) => (
                <div
                  className="col-lg-4 col-md-4 col-sm-12 box"
                  key={product.id}
                >
                  <img src={product.image} alt={product.name} />
                  <div className="bottom row">
                    <div className="info col-7">
                      <h6 className="">{product.name}</h6>
                      <h6 className="price">
                        ${product.price} <s>${product.oldPrice}</s>
                      </h6>
                    </div>
                    <AddButton onClick={() => addToCart(product)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Promo />
      <Footer />
    </>
  );
}
export default Home;

import Carousel from "./MyCarousel";
import Image4 from "../assets/products/product_5.png";
import Image9 from "../assets/products/product_9.png";
import Trend from "../assets/products/trend.png";
import Promo from "./Promo";
import Header from "./Header";
import Footer from "./Footer";
import AddButton from "./AddButton";
import { useNavigate } from "react-router-dom";
import Products from "./Products";
import { useCart } from "./CartContext";
import RemoveButton from "./RemoveButton";

function Home({ searchQuery }) {
  const navigate = useNavigate();
  const { addToCart, removeFromCart, cartItems } = useCart();

  const handleRemoveFromCart = (product) => {
    removeFromCart(product.id);
  };

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

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

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Header showSearch={false} />
      <Carousel />

      <div className="home">
        <div className="container">
          <div className="new-products">
            <h5 className="fw-bold title">Brand new products</h5>
            <hr className="line-deco" />

            <div className="container boxes">
              <Products category="new" searchQuery={searchQuery} />
            </div>

            <br />
          </div>
        </div>
        <br />

        <br />

        <div className="container">
          <h5 className="fw-bold title">Exclusive Offers</h5>
          <hr className="line-deco" />
          <div className="container boxes">
            {exclusives.map((exclusive) => (
              <div className="col-lg-6 box" key={exclusive.id}>
                <div className="row offers">
                  <div className="info col-lg-7 col-md-12 col-sm-12">
                    <h6
                      className="fw-bold product-name"
                      onClick={() => handleProductClick(exclusive.id)}
                    >
                      {exclusive.name}
                    </h6>
                    <h6 className="fw-bold">
                      ${exclusive.price} <s>${exclusive.oldPrice}</s>
                    </h6>
                    <p className="descrip">{exclusive.description}</p>
                    {isProductInCart(exclusive.id) ? (
                      <RemoveButton
                        onClick={() => handleRemoveFromCart(exclusive)}
                      />
                    ) : (
                      <button
                        className="btn"
                        onClick={() => addToCart(exclusive)}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>

                  <div className="image col-5">
                    <img src={exclusive.image} alt={exclusive.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <div className="trends">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 ">
                <img src={Trend} alt="" className="trend-image" />
              </div>
              <div className="col-lg-7">
                <span>Grab your 50% off</span>
                <br />
                <h2>Trends for Women </h2>
                <div className="row">
                  <div className="container trending boxes">
                    <Products category="womenPromo" searchQuery={searchQuery} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="new-products">
            <h5 className="fw-bold title">Deals under $25</h5>
            <hr className="line-deco" />

            <br />
            <div className="container boxes">
              <Products category="deals" searchQuery={searchQuery} />
            </div>
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />

      <br />
      <br />
      <Promo />
      <Footer />
    </>
  );
}

export default Home;

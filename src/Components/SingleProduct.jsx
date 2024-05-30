import Header from "./Header";
import { Row, Col } from "react-bootstrap";
import Image from "../assets/products/product_2.png";
import products from "../assets/data/products";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import RemoveButton from "./RemoveButton";
import { useCart } from "./CartContext";

function SingleProduct() {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product is currently unavailable</div>;
  }
  const handleRemoveFromCart = (product) => {
    removeFromCart(product.id);
    setAddedItems((prevState) => ({ ...prevState, [product.id]: false }));
  };
  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <>
      <Header />
      <div className="container single-product-container">
        <Row>
          <Col md={6} className="big-image">
            <div className="image-container">
              <img src={product.image} alt="Procuct image" />
            </div>
          </Col>
          <Col md={6} className="product-summary">
            <h5>{product.name}</h5>
            <h6>
              ${product.price}
              <s>${product.oldPrice}</s>
            </h6>
            <br />
            <p className="lead">{product.description}</p>
            <br />
            <button
              className="button back-button"
              onClick={() => navigate("/shop")}
            >
              Back to shop
            </button>
            &nbsp;
            {isProductInCart(product.id) ? (
              <RemoveButton onClick={() => handleRemoveFromCart(product)} />
            ) : (
              <button
                className="button add-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </Col>
        </Row>
        <br />
        <br />
        <div className="ratings">
          <h4 className="fw-bold">Ratings:-</h4>
          <hr className="line-deco" />
        </div>
      </div>
    </>
  );
}
export default SingleProduct;

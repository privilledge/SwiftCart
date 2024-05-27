import Header from "./Header";
import { Row, Col } from "react-bootstrap";
import Image from "../assets/products/product_2.png";
function SingleProduct() {
  return (
    <>
      <Header />
      <div className="container single-product-container">
        <Row>
          <Col md={6} className="big-image">
            <div className="image-container">
              <img src={Image} alt="Procuct image" />
            </div>
          </Col>
          <Col md={6} className="product-summary">
            <h5>Brown Fun bag</h5>
            <h6>
              $17.99<s>$21.99</s>
            </h6>
            <br />
            <p className="lead">
              {" "}
              "DECARSDZ Men's Oxfords Casual Dress Shoes for Men Sneaker
              Business Walking Comfortable Tennis Mesh Fabric Shoes. The color
              could be slightly different between on the screen and in practice"
            </p>
            <br />
            <button className="button back-button">Back to shop</button>&nbsp;
            <button className="button add-cart">Add to Cart</button>
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

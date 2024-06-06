import Header from "./Header";
import React from "react";
import { useCart } from "./CartContext";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

function Cart() {
  const { cartItems, updateItemQuantity, removeFromCart } = useCart();
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleIncrease = (item) => {
    updateItemQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };
  const checkout = () => {
    navigate("/Checkout");
  };
  const handleRemoveFromCart = (item) => {
    removeFromCart(item.id);
    setAddedItems((prevState) => ({ ...prevState, [item.id]: false }));
  };

  return (
    <>
      <Header />
      <br />
      <div className="container cart-container">
        <Row>
          <Col className="cart-items-details" md={8}>
            <Row>
              <Col md={8}>
                <h2>Shopping Cart</h2>
              </Col>
              <Col md={4}>
                <h5 className="items-count">Items: {cartItems.length}</h5>
              </Col>
            </Row>
            <hr />
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <Row>
                {cartItems.map((item) => (
                  <Row key={item.id}>
                    <Col md={3}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid cart-img"
                      />
                    </Col>
                    <Col md={3} className="name-price">
                      <h6>{item.name}</h6>
                      <span>${item.price}</span>
                    </Col>
                    <Col md={3} className="item-quantity">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleDecrease(item)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </Button>
                    </Col>
                    <Col md={3} className="remove-item">
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                        </svg>
                      </Button>
                    </Col>
                    <hr />
                  </Row>
                ))}
              </Row>
            )}
            <a href="/shop" className="back-shop mb-4">
              Back to Shop
            </a>
          </Col>
          {cartItems.length === 0 ? (
            <p> </p>
          ) : (
            <Col md={4} className="cart-summary">
              <h4>Summary</h4>
              <hr />
              <Row>
                <Col md={6}>
                  <h6>Items: {cartItems.length}</h6>
                </Col>
                <Col md={6}>
                  <h6>
                    $
                    {cartItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}
                  </h6>
                </Col>
              </Row>
              <p>SHIPPING Standard-Delivery - € 5.00</p>
              <Form.Group>
                <Form.Label>Give Code</Form.Label>
                <Form.Control type="text" placeholder="Enter your code" />
              </Form.Group>
              <br />
              {isAuthenticated ? (
                <Button className="checkout" variant="dark" onClick={checkout}>
                  CHECKOUT
                </Button>
              ) : (
                <Button
                  className="login-checkout"
                  variant="dark"
                  onClick={() => navigate("/login")}
                >
                  Log in to checkout
                </Button>
              )}
            </Col>
          )}
        </Row>
      </div>
      <br />
    </>
  );
}

export default Cart;

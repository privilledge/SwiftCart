import Header from "./Header";
import { Row, Col } from "react-bootstrap";
import { useCart } from "./CartContext";
function Checkout() {
  const { cartItems, updateItemQuantity, removeFromCart } = useCart();
  return (
    <>
      <Header />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 billing-orders">
            <h2 className="fw-bold">Billing details</h2>
            <form className="form-group billing">
              <Row>
                <Col md={6}>
                  <label htmlFor="first-name">First name</label>
                  <br />
                  <input type="text" className="col-input" required />
                </Col>
                <Col md={6}>
                  <label htmlFor="last-name">Last name</label>
                  <br />
                  <input type="text" className="col-input" required />
                </Col>
              </Row>
              <br />
              <label htmlFor="country">Select country</label>
              <br />
              <select className="select-country" name="" id="">
                <option value="">Select country</option>
                <option value="">Zimbabwe</option>
              </select>
              <br />
              <br />
              <label htmlFor="last-name">Street address</label>
              <br />
              <input
                className="billing-input"
                type="text"
                placeholder="House number and street name"
                required
              />
              <br />
              <br />
              <input
                className="billing-input"
                type="text"
                placeholder="Apartment,suite,unit etc"
                required
              />
              <br />
              <br />
              <label htmlFor="last-name">Town/City</label>
              <br />
              <input className="billing-input" type="text" />
              <br />
              <br />
              <label htmlFor="country">State</label>
              <br />
              <select className="select-country" name="" id="">
                <option value="">Harare</option>
                <option value="">Bulawayo</option>
              </select>
              <br />
              <br />
              <label htmlFor="last-name">Zip code</label>
              <br />
              <input className="billing-input" type="text" required />
              <br />
              <br />
              <label htmlFor="last-name">Phone</label>
              <br />
              <input className="billing-input" type="email" />
              <br />
              <br />
              <label htmlFor="last-name">Email</label>
              <br />
              <input
                className="billing-input"
                type="email"
                placeholder="youremail@gmail.com"
                required
              />
              <br />
              <br />
              <br />

              <h2 className="fw-bold">Additional Information</h2>
              <label htmlFor="last-name">Order notes(Optional)</label>
              <br />
              <input
                type="text"
                className="col-input"
                placeholder="Notes about your order "
              />
            </form>
          </div>

          <div className="col-lg-6 card-details">
            <h2 className="fw-bold">Your order</h2>
            <div className="order-summary">
              <Row>
                <Col md={6}>Product</Col>
                <Col md={6}>Subtotal</Col>
              </Row>
              <hr />
              {cartItems.map((product) => (
                <Row>
                  <Col md={6}>{product.name}</Col>
                  <Col md={6}>${product.price}</Col>

                  <hr className="order-line" />
                </Row>
              ))}
              <Row style={{ color: "#c80000" }}>
                <Col md={6}>Shipping fee</Col>

                <Col md={6}>$5</Col>
                <hr className="order-line" />
              </Row>
              <Row>
                <Col md={6}>
                  <b>Total</b>
                </Col>

                <Col md={6}>
                  <b>
                    {" "}
                    ${" "}
                    {cartItems.reduce(
                      (total, item) => total + item.price * item.quantity + 5,
                      0
                    )}
                  </b>
                </Col>
              </Row>
            </div>

            <br />
            <br />
            <div className="payment">
              <div className="select-payment">
                <input type="radio" name="" id="" />
                <label htmlFor="">Credit card(Stripe)</label>
              </div>
              <br />
              <div className="pay">
                <h6 className="">Pay with your card via stripe</h6>
                <br />

                <label htmlFor="last-name">Card number</label>
                <br />
                <input
                  className="card-input"
                  type="email"
                  placeholder="1234 1234 1234 1234"
                />
                <br />
                <br />
                <Row>
                  <Col md={6}>
                    <label htmlFor="first-name">Expiry date</label>
                    <br />
                    <input
                      type="text"
                      className="card-input"
                      placeholder="MM/YY"
                    />
                  </Col>
                  <Col md={6}>
                    <label htmlFor="last-name">Card code(CVC)</label>
                    <br />
                    <input
                      type="text"
                      className="card-input"
                      placeholder="CVC"
                    />
                  </Col>
                </Row>
                <br />

                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                  Save payement information to my account for future purchases
                </label>
                <hr />
                <span>
                  Your personal data will be used tp process your order, support
                  your experiences throughout this website and for other
                  purposes described in our <a href="#">private policy.</a>
                </span>
                <br />
                <br />
                <button className=" place-order">Place order</button>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
export default Checkout;

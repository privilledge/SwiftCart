import Header from "./Header";
import { Row, Col } from "react-bootstrap";
function Signup() {
  return (
    <>
      <Header />
      <br />
      <div className="container ">
        <form className="signup">
          <div className="header">
            <h2>Sign up</h2>
          </div>
          <br />
          <form className="form-group signing">
            <Row>
              <Col md={6}>
                <input
                  type="text"
                  className="col-input"
                  placeholder="First name"
                  required
                />
              </Col>
              <Col md={6}>
                <input
                  type="text"
                  className="col-input"
                  placeholder="Last name"
                  required
                />
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

            <input
              className="billing-input"
              type="text"
              placeholder="Town/City"
            />
            <br />
            <br />
            <label htmlFor="country">State</label>
            <br />
            <select className="select-country" name="" id="" required>
              <option value="">Harare</option>
              <option value="">Bulawayo</option>
            </select>
            <br />
            <br />

            <input
              className="billing-input"
              type="text"
              placeholder="Zip code"
              required
            />
            <br />
            <br />

            <input
              className="billing-input"
              type="text"
              placeholder="Phone"
              required
            />
            <br />
            <br />

            <input
              className="billing-input"
              type="email"
              placeholder="Email"
              required
            />
            <br />
            <br />
            <button className="btn" type="submit">
              Sign up
            </button>
          </form>
        </form>
      </div>
    </>
  );
}
export default Signup;

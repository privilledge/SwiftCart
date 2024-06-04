import { useContext, useState } from "react";
import Header from "./Header";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Signup() {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    city: "",
    apartment: "",
    state: "",
    zipCode: "",
    phone: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9090/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.text();
      login();
      alert(result);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to sign up");
    }
    navigate("/cart");
  };

  return (
    <>
      <Header />
      <br />
      <div className="container ">
        <form className="signup" onSubmit={handleSubmit}>
          <div className="header">
            <h2>Sign up</h2>
          </div>
          <br />
          <div className="form-group signing">
            <Row>
              <Col md={6}>
                <input
                  type="text"
                  className="col-input"
                  placeholder="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col md={6}>
                <input
                  type="text"
                  className="col-input"
                  placeholder="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <br />
            <label htmlFor="country">Select country</label>
            <br />
            <select
              className="select-country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              id=""
            >
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
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <input
              className="billing-input"
              type="text"
              placeholder="Apartment,suite,unit etc"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <input
              className="billing-input"
              type="text"
              placeholder="Town/City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />

            <br />
            <br />

            <input
              className="billing-input"
              type="text"
              placeholder="Zip code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <input
              className="billing-input"
              type="text"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <input
              className="billing-input"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <input
              className="billing-input"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <button className="btn" type="submit">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Signup;

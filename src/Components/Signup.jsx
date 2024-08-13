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
    navigate("/SwiftCart/cart");
  };

  return (
    <>
      <Header />
      <br />
      <div className="container ">
        <form className="signup mt-5" onSubmit={handleSubmit}>
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

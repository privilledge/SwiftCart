import { useEffect, useState } from "react";
import Header from "./Header";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost:9090/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (response.ok) {
        const token = await response.text();
        if (token !== "Invalid username or password") {
          setLoginMessage("Login successful");
          localStorage.setItem("token", token);
          login();
          navigate("/SwiftCart/cart");
        } else {
          setLoginMessage("Invalid username or password");
        }
      } else {
        setLoginMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to login");
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Header />
      <br />
      <div className="container ">
        <form className="login" onSubmit={handleSubmit}>
          <br />
          <h2>Login</h2>
          <span>Enter your Login details</span>
          <br />
          <br />
          <input
            type="text"
            name="email"
            id=""
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <button className="btn" type="submit">
            Login
          </button>
          <br />
          <br />
          <span>
            Dont have an account?{" "}
            <NavLink to="/SwiftCart/signup" style={{ color: "blue" }}>
              Sign up
            </NavLink>
          </span>
          <br />
        </form>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{loginMessage}</Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    </>
  );
}
export default Login;

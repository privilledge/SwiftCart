import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useContext(AuthContext);

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

      const result = await response.text();

      if (result === "Login successful") {
        localStorage.setItem("token", result);
        alert(result);
        login();
        navigate("/cart");
      } else {
        alert(result);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to login");
    }
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
            Dont have an account? <a href="/signup">Sign up</a>
          </span>
          <br />
        </form>
      </div>
    </>
  );
}
export default Login;

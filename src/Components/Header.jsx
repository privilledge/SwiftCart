import React from "react";
import "../App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };
  const handleLogoutClick = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              SwiftCart
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <div className="search">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleInputChange}
                />
                <button className="primary search-button">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a href="/" className="nav-link active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shop">
                    Shop
                  </a>
                </li>

                {isAuthenticated ? (
                  <li className="nav-item">
                    <button className="nav-link" onClick={handleLogoutClick}>
                      Logout
                    </button>
                  </li>
                ) : (
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Login
                    </a>
                  </li>
                )}
              </ul>
              &nbsp;
              <svg
                onClick={handleCartClick}
                stroke="currentColor"
                fill="#22e2b4"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ cursor: "pointer" }}
                className="cart-button"
              >
                <path d="M21.822,7.431C21.635,7.161,21.328,7,21,7H7.333L6.179,4.23C5.867,3.482,5.143,3,4.333,3H2v2h2.333l4.744,11.385 C9.232,16.757,9.596,17,10,17h8c0.417,0,0.79-0.259,0.937-0.648l3-8C22.052,8.044,22.009,7.7,21.822,7.431z M17.307,15h-6.64 l-2.5-6h11.39L17.307,15z"></path>
                <circle cx="10.5" cy="19.5" r="1.5"></circle>
                <circle cx="17.5" cy="19.5" r="1.5"></circle>
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;

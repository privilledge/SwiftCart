import Logo from "../assets/logo/tlogo.png";
import "../App.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              SwiftCart
            </a>
          </nav>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className=" navbar-collapse">
          <h4>Cart</h4>
          <input placeholder="Search product" />
        </div>
        <button className="btn btn-primary">Login</button>
      </nav>
    </>
  );
}

export default Header;

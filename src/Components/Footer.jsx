import image from "../assets/products/payment-item.webp";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import pinterest from "../assets/icons/pinterest.png";
import twitter from "../assets/icons/twitter.png";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h1 className="display-6">SwiftCart</h1>
                <p>Address: 44 Robson House </p>
                <p>Phone: +44679273</p>
                Email: hello@swiftcart.com
              </div>
              &nbsp;
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-6">
                    <h5>Partners</h5>
                    <p>Gucci</p>
                    <p>Louis Vuitton</p>
                    <p>Nike</p>
                    <p>GUESS</p>
                    <p>Lacoste</p>
                  </div>
                  <div className="col-6">
                    <h5>Quick Links</h5>
                    <p>Shop</p>
                    <p>Login</p>
                    <p>Cart</p>
                    <p>Search</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 ">
                <h5>Join our newsletter now</h5>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <form>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                      aria-label=""
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text subscribe"
                        id="basic-addon2"
                      >
                        Subscribe
                      </span>
                    </div>
                  </div>
                </form>
                <div className="row icons">
                  <div className="col-2 mr-2">
                    <img src={facebook} alt="" />
                  </div>
                  <div className="col-2 mr-2">
                    <img src={instagram} alt="" />
                  </div>
                  <div className="col-2 mr-2">
                    <img src={pinterest} alt="" />
                  </div>
                  <div className="col-2 ">
                    <img src={twitter} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <p>
                Copyright ©2024 All rights reserved | Made by Privilledge
                Mashegede
              </p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 payment">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;

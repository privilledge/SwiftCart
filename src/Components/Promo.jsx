import image2 from "../assets/icons/truck.png";
import image from "../assets/icons/credit-card.png";
import image3 from "../assets/icons/online-chat.png";
import image4 from "../assets/icons/cashback.png";

function Promo() {
  return (
    <>
      <div className="container services">
        <div className="row">
          <div className="serviceBox col-lg-3 col-md-6">
            <img src={image2} alt="Hello ther" />
            <div className="info">
              <h6>Fast & Free Delivery</h6>
              <p>Enjoy complimentary and swift delivery on all orders</p>
            </div>
          </div>
          <div className="serviceBox col-lg-3 col-md-6">
            <img src={image} alt="Hello ther" />
            <div className="info">
              <h6>Secure Payment</h6>
              <p>Safe and secure payments, always.</p>
            </div>
          </div>
          <div className="serviceBox col-lg-3 col-md-6">
            <img src={image4} alt="Hello ther" />
            <div className="info">
              <h6>Money Back Guarantee</h6>
              <p>Guaranteed satisfaction or your money back</p>
            </div>
          </div>
          <div className="serviceBox col-lg-3 col-md-6">
            <img src={image3} alt="Hello ther" />
            <div className="info">
              <h6>Online Support</h6>
              <p>24/7 online support for instant assistance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Promo;

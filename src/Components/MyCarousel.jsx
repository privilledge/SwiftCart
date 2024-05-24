import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import heroImage from "../assets/banner.jpg";
import { useNavigate } from "react-router-dom";

const MyCarousel = () => {
  const navigate = useNavigate();
  const clickShopButton = () => {
    navigate("/Shop");
  };
  return (
    <>
      <div className="wrap">
        <div className="container col-lg-12 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className=" col-sm-12 col-lg-5"></div>
            <div className="col-lg-7 intro">
              <h6 className="lh-1 mb-3 introP">
                Summer/Spring Collection 2024
              </h6>
              <h1 className="display-3 ">Get up to 30% Off New arrivals</h1>
              <div className=" ">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4"
                  onClick={clickShopButton}
                >
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default MyCarousel;

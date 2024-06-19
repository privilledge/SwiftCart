import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import heroImage from "../assets/banner.jpg";
import { useNavigate } from "react-router-dom";

const MyCarousel = () => {
  const navigate = useNavigate();
  const clickShopButton = () => {
    navigate("/SwiftCart/Shop");
  };
  return (
    <>
      <div id="carouselExample" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner wrap">
          <div class="carousel-item active">
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
          <div class="carousel-item">
            <div className="container col-lg-12 px-4 py-5">
              <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className=" col-sm-12 col-lg-5"></div>
                <div className="col-lg-7 intro">
                  <h6 className="lh-1 mb-3 introP">July limited time sale</h6>
                  <h1 className="display-3 ">
                    Shop now and enjoy free shipping
                  </h1>
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
          <div class="carousel-item">
            <div className="container col-lg-12 px-4 py-5">
              <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className=" col-sm-12 col-lg-5"></div>
                <div className="col-lg-7 intro">
                  <h6 className="lh-1 mb-3 introP">
                    Fresh finds/trend alert 2024
                  </h6>
                  <h1 className="display-3 ">
                    Shop latest trends and must haves
                  </h1>
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
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExample"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExample"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>

      <br />
    </>
  );
};

export default MyCarousel;

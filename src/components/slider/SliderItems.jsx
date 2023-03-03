import React from "react";

const SliderItems = () => {
  return (
    <>
      {/* <!--slider area start--> */}
      <div className="slider_area owl-carousel">
        <div
          className="single_slider"
          data-bgimg="assets/img/slider/slider1.jpg"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="slider_content">
                  <p>exclusive offer -10% off this week</p>
                  <h1>jewelry arrivals</h1>
                  <p className="slider_price">
                    starting at <span>$2.199.oo</span>
                  </p>
                  <a className="button" href="shop.html">
                    shopping now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="single_slider"
          data-bgimg="assets/img/slider/slider2.jpg"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="slider_content">
                  <p>exclusive offer -10% off this week</p>
                  <h1>engagement ring</h1>
                  <p className="slider_price">
                    starting at <span>$2.199.oo</span>
                  </p>
                  <a className="button" href="shop.html">
                    shopping now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--slider area end--> */}
    </>
  );
};

export default SliderItems;

import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!--footer area start--> */}
      <footer className="footer_widgets footer_other">
        <div className="container">
          <div className="footer_top">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="widgets_container contact_us">
                  <h3>About Monsta</h3>
                  <div className="footer_contact">
                    <p>Address: Your address goes here.</p>
                    <p>
                      Phone: <a href="tel:0123456789">0123456789</a>
                    </p>
                    <p>Email: demo@example.com</p>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-rss"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-googleplus"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i className="ion-social-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-4 col-6">
                <div className="widgets_container widget_menu">
                  <h3>Information</h3>
                  <div className="footer_menu">
                    <ul>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="blog.html">blog</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="#">Sample Page</a>
                      </li>
                      <li>
                        <a href="portfolio.html">Portfolio</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-5 col-6">
                <div className="widgets_container widget_menu">
                  <h3>My Account</h3>
                  <div className="footer_menu">
                    <ul>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="portfolio.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="faq.html">Frequently Questions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-7">
                <div className="widgets_container product_widget">
                  <h3>Top Rated Products</h3>
                  <div className="simple_product">
                    <div className="simple_product_items">
                      <div className="simple_product_thumb">
                        <a href="#">
                          <img src="assets/img/s-product/product5.jpg" alt="" />
                        </a>
                      </div>
                      <div className="simple_product_content">
                        <div className="tag_cate">
                          <a href="#">Clothing,</a>
                          <a href="#">Potato chips</a>
                        </div>
                        <div className="product_name">
                          <h3>
                            <a href="#">Donec eu animal</a>
                          </h3>
                        </div>
                        <div className="product_price">
                          <span className="old_price">$86.00</span>
                          <span className="current_price">$70.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="simple_product_items">
                      <div className="simple_product_thumb">
                        <a href="#">
                          <img src="assets/img/s-product/product6.jpg" alt="" />
                        </a>
                      </div>
                      <div className="simple_product_content">
                        <div className="tag_cate">
                          <a href="#">Women</a>
                        </div>
                        <div className="product_name">
                          <h3>
                            <a href="#">Dummy animal</a>
                          </h3>
                        </div>
                        <div className="product_price">
                          <span className="old_price">$74.00</span>
                          <span className="current_price">$69.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_middel">
            <div className="row">
              <div className="col-12">
                <div className="footer_middel_menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Online Store</a>
                    </li>
                    <li>
                      <a href="#">Promotion</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms Of Use</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Contacts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="row">
              <div className="col-12">
                <div className="copyright_area">
                  <p>
                    &copy; 2021{" "}
                    <a href="index.html" className="text-uppercase">
                      MONSTA
                    </a>
                    . Made with <i className="fa fa-heart"></i> by{" "}
                    <a target="_blank" href="https://www.hasthemes.com/">
                      HasThemes
                    </a>
                  </p>
                  <img src="assets/img/icon/papyel2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!--footer area end--> */}
    </>
  );
};

export default Footer;

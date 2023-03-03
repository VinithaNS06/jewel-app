import React from "react";
import NewsLetter from "../../newsletter/NewsLetter";
import NewsLetterPopUp from "../../newsletter/NewsLetterPopUp";
import Banner from "../banner/Banner";
import BannerFullwidth from "../banner/BannerFullwidth";
import BlogSection from "../blog/BlogSection";
import ProductDetails from "../product/ProductDetails";
import ProductSectionBottom from "../product/ProductSectionBottom";
import ProductSection from "../product/ProductSectionBottom";
import SliderItems from "../slider/SliderItems";
import Slider from "../../Slider/Slider";
const Header = () => {
  return (
    <>
      {/* <!--header area start--> */}

      {/* <!--header top start--> */}
      <div className="header_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="welcome_text">
                <p>
                  Free shipping on all domestic orders with coupon code{" "}
                  <span>“Watches2018”</span>
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="top_right text-right">
                <ul>
                  <li className="language">
                    <a href="#">
                      {" "}
                      English <i className="ion-chevron-down"></i>
                    </a>
                    <ul className="dropdown_language">
                      <li>
                        <a href="#"> French</a>
                      </li>
                      <li>
                        <a href="#">Germany</a>
                      </li>
                      <li>
                        <a href="#">Japanese</a>
                      </li>
                    </ul>
                  </li>
                  <li className="currency">
                    <a href="#">
                      USD <i className="ion-chevron-down"></i>
                    </a>
                    <ul className="dropdown_currency">
                      <li>
                        <a href="#">EUR – Euro</a>
                      </li>
                      <li>
                        <a href="#">GBP – British Pound</a>
                      </li>
                      <li>
                        <a href="#">INR – India Rupee</a>
                      </li>
                    </ul>
                  </li>
                  <li className="top_links">
                    <a href="#">
                      My Account <i className="ion-chevron-down"></i>
                    </a>
                    <ul className="dropdown_links">
                      <li>
                        <a href="checkout.html">Checkout </a>
                      </li>
                      <li>
                        <a href="my-account.html">My Account </a>
                      </li>
                      <li>
                        <a href="cart.html">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--header top start--> */}

      {/* <!--header middel start--> */}
      <div className="header_middel">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="home_contact">
                <div className="contact_box">
                  <label>Location</label>
                  <p>Your address goes here.</p>
                </div>
                <div className="contact_box">
                  <label>Call free</label>
                  <p>
                    <a href="tel:0123456789">0123456789</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-4">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-7 col-6">
              <div className="middel_right">
                <div className="search_btn">
                  <a href="#">
                    <i className="ion-ios-search-strong"></i>
                  </a>
                  <div className="dropdown_search">
                    <form action="#">
                      <input placeholder="Search product..." type="text" />
                      <button type="submit">
                        <i className="ion-ios-search-strong"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="cart_link">
                  <a href="#">
                    <i className="ion-android-cart"></i>
                    <span className="cart_text_quantity"> $138.00</span>{" "}
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <span className="cart_quantity">2</span>
                  {/* <!--mini cart--> */}
                  <div className="mini_cart">
                    <div className="cart_close">
                      <div className="cart_text">
                        <h3>cart</h3>
                      </div>
                      <div className="mini_cart_close">
                        <a href="javascript:void(0)">
                          <i className="ion-android-close"></i>
                        </a>
                      </div>
                    </div>
                    <div className="cart_item">
                      <div className="cart_img">
                        <a href="#">
                          <img src="assets/img/s-product/product.jpg" alt="" />
                        </a>
                      </div>
                      <div className="cart_info">
                        <a href="#">Letraset animal</a>

                        <span className="quantity">Qty: 1</span>
                        <span className="price_cart">$60.00</span>
                      </div>
                      <div className="cart_remove">
                        <a href="#">
                          <i className="ion-android-close"></i>
                        </a>
                      </div>
                    </div>
                    <div className="cart_item">
                      <div className="cart_img">
                        <a href="#">
                          <img src="assets/img/s-product/product2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="cart_info">
                        <a href="#">Natural passages</a>
                        <span className="quantity">Qty: 1</span>
                        <span className="price_cart">$69.00</span>
                      </div>
                      <div className="cart_remove">
                        <a href="#">
                          <i className="ion-android-close"></i>
                        </a>
                      </div>
                    </div>
                    <div className="cart_total">
                      <span>Subtotal:</span>
                      <span>138.00</span>
                    </div>
                    <div className="mini_cart_footer">
                      <div className="cart_button view_cart">
                        <a href="cart.html">View cart</a>
                      </div>
                      <div className="cart_button checkout">
                        <a className="active" href="checkout.html">
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!--mini cart end--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--header middel end--> */}

      {/* <!--header bottom satrt--> */}
      <div className="header_bottom sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="main_menu_inner">
                <div className="logo_sticky">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </a>
                </div>
                <div className="main_menu">
                  <nav>
                    <ul>
                      <li className="active">
                        <a href="index.html">
                          Home <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a href="index.html">Home 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 3</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home 4</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home 5</a>
                          </li>
                          <li>
                            <a href="index-6.html">Home 6</a>
                          </li>
                          <li>
                            <a href="index-7.html">Home 7</a>
                          </li>
                          <li>
                            <a href="index-8.html">Home 8</a>
                          </li>
                          <li>
                            <a href="index-9.html">Home 9</a>
                          </li>
                          <li>
                            <a href="index-10.html">Home 10</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="shop.html">
                          shop <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="mega_menu">
                          <li>
                            <a href="#">Shop Layouts</a>
                            <ul>
                              <li>
                                <a href="shop-fullwidth.html">Full Width</a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-list.html">
                                  Full Width list
                                </a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html">
                                  Right Sidebar{" "}
                                </a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar-list.html">
                                  {" "}
                                  Right Sidebar list
                                </a>
                              </li>
                              <li>
                                <a href="shop-list.html">List View</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">other Pages</a>
                            <ul>
                              <li>
                                <a href="portfolio.html">portfolio</a>
                              </li>
                              <li>
                                <a href="portfolio-details.html">
                                  portfolio details
                                </a>
                              </li>
                              <li>
                                <a href="cart.html">cart</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="my-account.html">my account</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Product Types</a>
                            <ul>
                              <li>
                                <a href="product-details.html">
                                  product details
                                </a>
                              </li>
                              <li>
                                <a href="product-sidebar.html">
                                  product sidebar
                                </a>
                              </li>
                              <li>
                                <a href="product-grouped.html">
                                  product grouped
                                </a>
                              </li>
                              <li>
                                <a href="variable-product.html">
                                  product variable
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog.html">
                          blog <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="sub_menu pages">
                          <li>
                            <a href="blog-details.html">blog details</a>
                          </li>
                          <li>
                            <a href="blog-fullwidth.html">blog fullwidth</a>
                          </li>
                          <li>
                            <a href="blog-left.html">blog left</a>
                          </li>
                          <li>
                            <a href="blog-none-sidebar.html">no sidebar</a>
                          </li>
                          <li>
                            <a href="blog-right.html">blog right</a>
                          </li>
                          <li>
                            <a href="blog-sticky.html">blog sticky</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="portfolio.html">portfolio</a>
                      </li>
                      <li>
                        <a href="#">
                          pages <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="sub_menu pages">
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="services.html">services</a>
                          </li>
                          <li>
                            <a href="faq.html">Frequently Questions</a>
                          </li>
                          <li>
                            <a href="contact.html">contact</a>
                          </li>
                          <li>
                            <a href="login.html">login</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="404.html">Error 404</a>
                          </li>
                          <li>
                            <a href="compare.html">compare</a>
                          </li>
                          <li>
                            <a href="privacy-policy.html">privacy policy</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">coming soon</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--header bottom end--> */}
      <div>
        <Banner />
        <ProductSection />
        <BannerFullwidth />
        <ProductSectionBottom />
        <BlogSection />
        <Slider />
        <NewsLetter />
        <NewsLetterPopUp />
      </div>
      {/* <!--header area end--> */}
    </>
  );
};

export default Header;

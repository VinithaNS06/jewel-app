import React from "react";

const ProductSectionBottom = () => {
  return (
    <>
      <section className="product_section p_bottom p_section1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_title">
                <h2>Bestselling Products</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="product_area ">
                <div className="product_container bottom">
                  <div className="custom-row product_row1 slick-initialized slick-slider">
                    <button
                      className="prev_arrow slick-arrow"
                      style={{ display: "block" }}
                    >
                      <i className="fa fa-angle-left"></i>
                    </button>
                    <div
                      className="slick-list draggable"
                      style={{ padding: "0px" }}
                    >
                      <div
                        className="slick-track"
                        style={{
                          opacity: "1",
                          width: "6720px",
                          transform: "translate3d(-896px, 0px, 0px)",
                        }}
                      >
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="-6"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product5.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product6.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Clothing,
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Furniture
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="-5"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product16.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product15.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Clothing,
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Letraset animal
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="-4"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product8.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product3.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  men
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Aliquam furniture
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="-3"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product10.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product12.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  men
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Natural Contrary
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned slick-active"
                          data-slick-index="-2"
                          aria-hidden="false"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="0"
                              >
                                <img
                                  src="assets/img/product/product3.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="0"
                              >
                                <img
                                  src="assets/img/product/product5.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="0"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="0">
                                  Clothing,
                                </a>
                                <a href="#" tabIndex="0">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="0">
                                  Donec eu furniture
                                </a>
                              </h3>
                              <span className="current_price">$62.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned slick-active"
                          data-slick-index="-1"
                          aria-hidden="false"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="0"
                              >
                                <img
                                  src="assets/img/product/product16.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="0"
                              >
                                <img
                                  src="assets/img/product/product5.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="0"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="0">
                                  Women
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="0">
                                  Duis pulvinar
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$70.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-current slick-active slick-center"
                          data-slick-index="0"
                          aria-hidden="false"
                          tabIndex="0"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="0"
                              >
                                <img
                                  src="assets/img/product/product6.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="0"
                              >
                                <img
                                  src="assets/img/product/product7.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="0"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="0">
                                  Clothing,
                                </a>
                                <a href="#" tabIndex="0">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="0">
                                  Aliquam furniture
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        data-placement="top"
                                        title=""
                                        data-toggle="tooltip"
                                        tabIndex="0"
                                        data-original-title="Add to Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-active"
                          data-slick-index="1"
                          aria-hidden="false"
                          tabIndex="0"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="0"
                              >
                                <img
                                  src="assets/img/product/product8.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="0"
                              >
                                <img
                                  src="assets/img/product/product9.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="0"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="0">
                                  Clothing,
                                </a>
                                <a href="#" tabIndex="0">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="0">
                                  Dummy animal
                                </a>
                              </h3>
                              <span className="current_price">$65.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-active"
                          data-slick-index="2"
                          aria-hidden="false"
                          tabIndex="0"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="0"
                              >
                                <img
                                  src="assets/img/product/product10.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="0"
                              >
                                <img
                                  src="assets/img/product/product11.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="0"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="0">
                                  Women
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="0">
                                  Furniture
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="0">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="0"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide"
                          data-slick-index="3"
                          aria-hidden="true"
                          tabIndex="0"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product12.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product13.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Men,
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Letraset animal
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$70.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide"
                          data-slick-index="4"
                          aria-hidden="true"
                          tabIndex="0"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product15.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product14.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Women
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Aliquam furniture
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide"
                          data-slick-index="5"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product16.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product11.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Clothing,
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Natural Lorem Ipsum
                                </a>
                              </h3>
                              <span className="current_price">$65.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide"
                          data-slick-index="6"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product5.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product6.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Clothing,
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Furniture
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide"
                          data-slick-index="7"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product16.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product15.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Clothing,
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Letraset animal
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide"
                          data-slick-index="8"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product8.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product3.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  men
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Aliquam furniture
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide"
                          data-slick-index="9"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product10.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product12.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  men
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Natural Contrary
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide"
                          data-slick-index="10"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ Width: "224px;" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product3.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product5.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Clothing,
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Donec eu furniture
                                </a>
                              </h3>
                              <span className="current_price">$62.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide"
                          data-slick-index="11"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product16.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product5.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Women
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Duis pulvinar
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$70.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="12"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product6.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product7.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Clothing,
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Aliquam furniture
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        data-placement="top"
                                        title=""
                                        data-toggle="tooltip"
                                        tabIndex="-1"
                                        data-original-title="Add to Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="13"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product8.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product9.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Clothing,
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Dummy animal
                                </a>
                              </h3>
                              <span className="current_price">$65.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="14"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product10.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product11.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Women
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Furniture
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="15"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product12.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product13.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Men,
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Letraset animal
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$70.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="16"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product15.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product14.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Women
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Aliquam furniture
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="17"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product16.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product11.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Clothing,
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Natural Lorem Ipsum
                                </a>
                              </h3>
                              <span className="current_price">$65.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned slick-center"
                          data-slick-index="18"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product5.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product6.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Clothing,
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Furniture
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="19"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ Width: "224px;" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product16.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product15.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Clothing,
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Letraset animal
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="20"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ Width: "224px;" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product8.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product3.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  men
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Aliquam furniture
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="21"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ Width: "224px;" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product10.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product12.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  men
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Natural Contrary
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$60.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="22"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ Width: "224px;" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product3.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product5.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Clothing,
                                </a>
                                <a href="#" tabIndex="-1">
                                  Potato chips
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Donec eu furniture
                                </a>
                              </h3>
                              <span className="current_price">$62.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="custom-col-5 slick-slide slick-cloned"
                          data-slick-index="23"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "224px" }}
                        >
                          <div className="single_product">
                            <div className="product_thumb">
                              <a
                                className="primary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product16.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="secondary_img"
                                href="product-details.html"
                                tabIndex="-1"
                              >
                                <img
                                  src="assets/img/product/product5.jpg"
                                  alt=""
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                  tabIndex="-1"
                                >
                                  {" "}
                                  quick view
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#" tabIndex="-1">
                                  Women
                                </a>
                              </div>
                              <h3>
                                <a href="product-details.html" tabIndex="-1">
                                  Duis pulvinar
                                </a>
                              </h3>
                              <span className="old_price">$86.00</span>
                              <span className="current_price">$70.00</span>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex="-1">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce posuere metus vitae{" "}
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="wishlist.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="Wishlist"
                                      >
                                        <span className="icon icon-Heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a
                                        href="cart.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="add to cart"
                                      >
                                        add to cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="compare.html"
                                        title=""
                                        tabIndex="-1"
                                        data-original-title="compare"
                                      >
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="next_arrow slick-arrow"
                      style={{ display: "block" }}
                    >
                      <i className="fa fa-angle-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSectionBottom;

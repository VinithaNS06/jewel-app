import React from "react";

const ProductDetails = () => {
  return (
    <>
      {/* <!--product details start--> */}
      <div className="product_details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product-details-tab">
                <div id="img-1" className="zoomWrapper single-zoom">
                  <a href="#">
                    <img
                      id="zoom1"
                      src="assets/img/product/product1-big.jpg"
                      data-zoom-image="assets/img/product/product1-big.jpg"
                      alt="big-1"
                    />
                  </a>
                </div>

                <div className="single-zoom-thumb">
                  <ul
                    className="s-tab-zoom owl-carousel single-product-active"
                    id="gallery_01"
                  >
                    <li>
                      <a
                        href="#"
                        className="elevatezoom-gallery active"
                        data-update=""
                        data-image="assets/img/product/product2-big.jpg"
                        data-zoom-image="assets/img/product/product2-big.jpg"
                      >
                        <img
                          src="assets/img/product/product2.jpg"
                          alt="zo-th-1"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="elevatezoom-gallery active"
                        data-update=""
                        data-image="assets/img/product/product1-big.jpg"
                        data-zoom-image="assets/img/product/product1-big.jpg"
                      >
                        <img
                          src="assets/img/product/product13.jpg"
                          alt="zo-th-1"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="elevatezoom-gallery active"
                        data-update=""
                        data-image="assets/img/product/product3-big.jpg"
                        data-zoom-image="assets/img/product/product3-big.jpg"
                      >
                        <img
                          src="assets/img/product/product4.jpg"
                          alt="zo-th-1"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="elevatezoom-gallery active"
                        data-update=""
                        data-image="assets/img/product/product2-big.jpg"
                        data-zoom-image="assets/img/product/product2-big.jpg"
                      >
                        <img
                          src="assets/img/product/product2.jpg"
                          alt="zo-th-1"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product_d_right">
                <form action="#">
                  <h1>Donec eu furniture</h1>
                  <div className="product_nav">
                    <ul>
                      <li className="prev">
                        <a href="#">
                          <i className="fa fa-angle-left"></i>
                        </a>
                      </li>
                      <li className="next">
                        <a href="#">
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className=" product_ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#"> (customer review ) </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product_price">
                    <span className="old_price">$80.00</span>
                    <span className="current_price">$70.00</span>
                  </div>
                  <div className="product_desc">
                    <p>
                      eget velit. Donec ac tempus ante. Fusce ultricies massa
                      massa. Fusce aliquam, purus eget sagittis vulputate,
                      sapien libero hendrerit est, sed commodo augue nisi non
                      neque. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed tempor, lorem et placerat vestibulum, metus nisi
                      posuere nisl, in{" "}
                    </p>
                  </div>

                  <div className="product_variant quantity">
                    <label>quantity</label>
                    <input min="1" max="100" value="1" type="number" />
                    <button className="button" type="submit">
                      add to cart
                    </button>
                  </div>
                  <div className=" product_d_action">
                    <ul>
                      <li>
                        <a href="#" title="Add to wishlist">
                          + Add to Wishlist
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Add to wishlist">
                          + Compare
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product_meta">
                    <span>
                      Category: <a href="#">Clothing</a>
                    </span>
                  </div>
                </form>
                <div className="priduct_social">
                  <ul>
                    <li>
                      <a href="#" title="facebook">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="twitter">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="pinterest">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="google +">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="linkedin">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--product details end--> */}

      {/* <!--product info start--> */}
      <div className="product_d_info">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="product_d_inner">
                <div className="product_info_button">
                  <ul className="nav" role="tablist">
                    <li>
                      <a
                        className="active"
                        data-toggle="tab"
                        href="#info"
                        role="tab"
                        aria-controls="info"
                        aria-selected="false"
                      >
                        Description
                      </a>
                    </li>
                    <li>
                      <a
                        data-toggle="tab"
                        href="#reviews"
                        role="tab"
                        aria-controls="reviews"
                        aria-selected="false"
                      >
                        Reviews (1)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="info"
                    role="tabpanel"
                  >
                    <div className="product_info_content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam fringilla augue nec est tristique auctor. Donec non
                        est at libero vulputate rutrum. Morbi ornare lectus quis
                        justo gravida semper. Nulla tellus mi, vulputate
                        adipiscing cursus eu, suscipit id nulla.
                      </p>
                      <p>
                        Pellentesque aliquet, sem eget laoreet ultrices, ipsum
                        metus feugiat sem, quis fermentum turpis eros eget
                        velit. Donec ac tempus ante. Fusce ultricies massa
                        massa. Fusce aliquam, purus eget sagittis vulputate,
                        sapien libero hendrerit est, sed commodo augue nisi non
                        neque. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed tempor, lorem et placerat
                        vestibulum, metus nisi posuere nisl, in accumsan elit
                        odio quis mi. Cras neque metus, consequat et blandit et,
                        luctus a nunc. Etiam gravida vehicula tellus, in
                        imperdiet ligula euismod eget.
                      </p>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="reviews" role="tabpanel">
                    <div className="reviews_wrapper">
                      <h2>1 review for Donec eu furniture</h2>
                      <div className="reviews_comment_box">
                        <div className="comment_thmb">
                          <img src="assets/img/blog/comment2.jpg" alt="" />
                        </div>
                        <div className="comment_text">
                          <div className="reviews_meta">
                            <div className="star_rating">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p>
                              <strong>admin </strong>- September 12, 2018
                            </p>
                            <span>roadthemes</span>
                          </div>
                        </div>
                      </div>
                      <div className="comment_title">
                        <h2>Add a review </h2>
                        <p>
                          Your email address will not be published. Required
                          fields are marked{" "}
                        </p>
                      </div>
                      <div className="product_ratting mb-10">
                        <h3>Your rating</h3>
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-star"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product_review_form">
                        <form action="#">
                          <div className="row">
                            <div className="col-12">
                              <label for="review_comment">Your review </label>
                              <textarea
                                name="comment"
                                id="review_comment"
                              ></textarea>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <label for="author">Name</label>
                              <input id="author" type="text" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <label for="email">Email </label>
                              <input id="email" type="text" />
                            </div>
                          </div>
                          <button type="submit">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--product info end--> */}

      {/* <!--product section area start--> */}
      <section className="product_section  p_section1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_title">
                <h2>Related products</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="product_area ">
                <div className="product_container bottom">
                  <div className="custom-row product_row1">
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a
                            className="primary_img"
                            href="product-details.html"
                          >
                            <img
                              src="assets/img/product/product13.jpg"
                              alt=""
                            />
                          </a>
                          <a
                            className="secondary_img"
                            href="product-details.html"
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
                            >
                              {" "}
                              quick view
                            </a>
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Clothing,</a>
                            <a href="#">Potato chips</a>
                          </div>
                          <h3>
                            <a href="product-details.html">Aliquam furniture</a>
                          </h3>
                          <span className="old_price">$86.00</span>
                          <span className="current_price">$60.00</span>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                  >
                                    <span className="icon icon-Heart"></span>
                                  </a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="cart.html" title="add to cart">
                                    add to cart
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html" title="compare">
                                    <i className="ion-ios-settings-strong"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a
                            className="primary_img"
                            href="product-details.html"
                          >
                            <img src="assets/img/product/product1.jpg" alt="" />
                          </a>
                          <a
                            className="secondary_img"
                            href="product-details.html"
                          >
                            <img src="assets/img/product/product2.jpg" alt="" />
                          </a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                            >
                              {" "}
                              quick view
                            </a>
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Clothing,</a>
                            <a href="#">Potato chips</a>
                          </div>
                          <h3>
                            <a href="product-details.html">Dummy animal</a>
                          </h3>
                          <span className="current_price">$65.00</span>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                                  <a href="wishlist.html" title="Wishlist">
                                    <span className="icon icon-Heart"></span>
                                  </a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="cart.html" title="add to cart">
                                    add to cart
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html" title="compare">
                                    <i className="ion-ios-settings-strong"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a
                            className="primary_img"
                            href="product-details.html"
                          >
                            <img
                              src="assets/img/product/product10.jpg"
                              alt=""
                            />
                          </a>
                          <a
                            className="secondary_img"
                            href="product-details.html"
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
                            >
                              {" "}
                              quick view
                            </a>
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Women</a>
                          </div>
                          <h3>
                            <a href="product-details.html">Furniture</a>
                          </h3>
                          <span className="old_price">$86.00</span>
                          <span className="current_price">$60.00</span>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                                  <a href="wishlist.html" title="Wishlist">
                                    <span className="icon icon-Heart"></span>
                                  </a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="cart.html" title="add to cart">
                                    add to cart
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html" title="compare">
                                    <i className="ion-ios-settings-strong"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a
                            className="primary_img"
                            href="product-details.html"
                          >
                            <img
                              src="assets/img/product/product12.jpg"
                              alt=""
                            />
                          </a>
                          <a
                            className="secondary_img"
                            href="product-details.html"
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
                            >
                              {" "}
                              quick view
                            </a>
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Men,</a>
                          </div>
                          <h3>
                            <a href="product-details.html">Letraset animal</a>
                          </h3>
                          <span className="old_price">$86.00</span>
                          <span className="current_price">$70.00</span>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                                  <a href="wishlist.html" title="Wishlist">
                                    <span className="icon icon-Heart"></span>
                                  </a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="cart.html" title="add to cart">
                                    add to cart
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html" title="compare">
                                    <i className="ion-ios-settings-strong"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a
                            className="primary_img"
                            href="product-details.html"
                          >
                            <img
                              src="assets/img/product/product15.jpg"
                              alt=""
                            />
                          </a>
                          <a
                            className="secondary_img"
                            href="product-details.html"
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
                            >
                              {" "}
                              quick view
                            </a>
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Women</a>
                          </div>
                          <h3>
                            <a href="product-details.html">Aliquam furniture</a>
                          </h3>
                          <span className="old_price">$86.00</span>
                          <span className="current_price">$60.00</span>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                                  <a href="wishlist.html" title="Wishlist">
                                    <span className="icon icon-Heart"></span>
                                  </a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="cart.html" title="add to cart">
                                    add to cart
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html" title="compare">
                                    <i className="ion-ios-settings-strong"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a
                            className="primary_img"
                            href="product-details.html"
                          >
                            <img
                              src="assets/img/product/product16.jpg"
                              alt=""
                            />
                          </a>
                          <a
                            className="secondary_img"
                            href="product-details.html"
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
                            >
                              {" "}
                              quick view
                            </a>
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Clothing,</a>
                            <a href="#">Potato chips</a>
                          </div>
                          <h3>
                            <a href="product-details.html">
                              Natural Lorem Ipsum
                            </a>
                          </h3>
                          <span className="current_price">$65.00</span>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                                  <a href="wishlist.html" title="Wishlist">
                                    <span className="icon icon-Heart"></span>
                                  </a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="cart.html" title="add to cart">
                                    add to cart
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html" title="compare">
                                    <i className="ion-ios-settings-strong"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a
                            className="primary_img"
                            href="product-details.html"
                          >
                            <img src="assets/img/product/product5.jpg" alt="" />
                          </a>
                          <a
                            className="secondary_img"
                            href="product-details.html"
                          >
                            <img src="assets/img/product/product6.jpg" alt="" />
                          </a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                            >
                              {" "}
                              quick view
                            </a>
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Clothing,</a>
                          </div>
                          <h3>
                            <a href="product-details.html">Furniture</a>
                          </h3>
                          <span className="old_price">$86.00</span>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                                  <a href="wishlist.html" title="Wishlist">
                                    <span className="icon icon-Heart"></span>
                                  </a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="cart.html" title="add to cart">
                                    add to cart
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html" title="compare">
                                    <i className="ion-ios-settings-strong"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a
                            className="primary_img"
                            href="product-details.html"
                          >
                            <img
                              src="assets/img/product/product16.jpg"
                              alt=""
                            />
                          </a>
                          <a
                            className="secondary_img"
                            href="product-details.html"
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
                            >
                              {" "}
                              quick view
                            </a>
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Clothing,</a>
                            <a href="#">Potato chips</a>
                          </div>
                          <h3>
                            <a href="product-details.html">Letraset animal</a>
                          </h3>
                          <span className="old_price">$86.00</span>
                          <span className="current_price">$60.00</span>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                                  <a href="wishlist.html" title="Wishlist">
                                    <span className="icon icon-Heart"></span>
                                  </a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="cart.html" title="add to cart">
                                    add to cart
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html" title="compare">
                                    <i className="ion-ios-settings-strong"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a
                            className="primary_img"
                            href="product-details.html"
                          >
                            <img src="assets/img/product/product8.jpg" alt="" />
                          </a>
                          <a
                            className="secondary_img"
                            href="product-details.html"
                          >
                            <img src="assets/img/product/product3.jpg" alt="" />
                          </a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                            >
                              {" "}
                              quick view
                            </a>
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">men</a>
                            <a href="#">Potato chips</a>
                          </div>
                          <h3>
                            <a href="product-details.html">Aliquam furniture</a>
                          </h3>
                          <span className="old_price">$86.00</span>
                          <span className="current_price">$60.00</span>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                                  <a href="wishlist.html" title="Wishlist">
                                    <span className="icon icon-Heart"></span>
                                  </a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="cart.html" title="add to cart">
                                    add to cart
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html" title="compare">
                                    <i className="ion-ios-settings-strong"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a
                            className="primary_img"
                            href="product-details.html"
                          >
                            <img
                              src="assets/img/product/product10.jpg"
                              alt=""
                            />
                          </a>
                          <a
                            className="secondary_img"
                            href="product-details.html"
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
                            >
                              {" "}
                              quick view
                            </a>
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">men</a>
                            <a href="#">Potato chips</a>
                          </div>
                          <h3>
                            <a href="product-details.html">Natural Contrary</a>
                          </h3>
                          <span className="old_price">$86.00</span>
                          <span className="current_price">$60.00</span>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                                  <a href="wishlist.html" title="Wishlist">
                                    <span className="icon icon-Heart"></span>
                                  </a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="cart.html" title="add to cart">
                                    add to cart
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html" title="compare">
                                    <i className="ion-ios-settings-strong"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a
                            className="primary_img"
                            href="product-details.html"
                          >
                            <img src="assets/img/product/product3.jpg" alt="" />
                          </a>
                          <a
                            className="secondary_img"
                            href="product-details.html"
                          >
                            <img src="assets/img/product/product5.jpg" alt="" />
                          </a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                            >
                              {" "}
                              quick view
                            </a>
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Clothing,</a>
                            <a href="#">Potato chips</a>
                          </div>
                          <h3>
                            <a href="product-details.html">
                              Donec eu furniture
                            </a>
                          </h3>
                          <span className="current_price">$62.00</span>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                                  <a href="wishlist.html" title="Wishlist">
                                    <span className="icon icon-Heart"></span>
                                  </a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="cart.html" title="add to cart">
                                    add to cart
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html" title="compare">
                                    <i className="ion-ios-settings-strong"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a
                            className="primary_img"
                            href="product-details.html"
                          >
                            <img
                              src="assets/img/product/product16.jpg"
                              alt=""
                            />
                          </a>
                          <a
                            className="secondary_img"
                            href="product-details.html"
                          >
                            <img src="assets/img/product/product5.jpg" alt="" />
                          </a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                            >
                              {" "}
                              quick view
                            </a>
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Women</a>
                          </div>
                          <h3>
                            <a href="product-details.html">Duis pulvinar</a>
                          </h3>
                          <span className="old_price">$86.00</span>
                          <span className="current_price">$70.00</span>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ion-ios-star-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                                  <a href="wishlist.html" title="Wishlist">
                                    <span className="icon icon-Heart"></span>
                                  </a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="cart.html" title="add to cart">
                                    add to cart
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html" title="compare">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--product section area end--> */}
    </>
  );
};

export default ProductDetails;

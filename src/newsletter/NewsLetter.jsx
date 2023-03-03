import React from "react";

const NewsLetter = () => {
  return (
    <>
      {/* <!--Newsletter area start--> */}
      <div class="newsletter_area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="newsletter_content">
                <h2>Our Newsletter</h2>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <div class="subscribe_form">
                  <form id="mc-form" class="mc-form footer-newsletter">
                    <input
                      id="mc-email"
                      type="email"
                      autoComplete="off"
                      placeholder="Email address..."
                    />
                    <button id="mc-submit">Subscribe</button>
                  </form>
                  {/* <!-- mailchimp-alerts Start --> */}
                  <div class="mailchimp-alerts text-centre">
                    <div class="mailchimp-submitting"></div>
                    {/* <!-- mailchimp-submitting end --> */}
                    <div class="mailchimp-success"></div>
                    {/* <!-- mailchimp-success end --> */}
                    <div class="mailchimp-error"></div>
                    {/* <!-- mailchimp-error end --> */}
                  </div>
                  {/* <!-- mailchimp-alerts end --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Newsletter area start--> */}
    </>
  );
};

export default NewsLetter;

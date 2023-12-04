import LogoBlack2 from "./LogoBlack2";
import "./ExclusiveOpportunityCard.css";

const ExclusiveOpportunityCard = () => {
  return (
    <div className="footer">
      <div className="dont-miss-this-exclusive-oppo-parent">
        <div className="dont-miss-this">
          Don't Miss This Exclusive Opportunity
        </div>
        <div className="enter-your-email-address-and-s-parent">
          <div className="enter-your-email">
            Enter your email address and start connecting with a better business
            world using our POS products.
          </div>
          <div className="inputbase1">
            <img
              className="icon-line-user2"
              alt=""
              src="/icon--line--chevrondown.svg"
            />
            <div className="enter-your-email1">Enter your email</div>
            <div className="button14">
              <div className="buttonbase3">
                <img
                  className="search-md-icon2"
                  alt=""
                  src="/icon--line--chevrondown.svg"
                />
                <div className="subscribe">Subscribe</div>
                <div className="search-md-icon2">
                  <div className="icon-placeholder-child4" />
                </div>
              </div>
            </div>
            <div className="search-md-icon2">
              <div className="icon-placeholder-child5" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-child" />
      <div className="frame-parent35">
        <div className="frame-parent36">
          <div className="logo-black-2-wrapper">
            <LogoBlack2
              logoBlack2LogoBlack2="/logo--black-21.svg"
              logoBlack2Position="relative"
              logoBlack2FlexShrink="0"
            />
          </div>
          <div className="menu2">
            <div className="features">Features</div>
            <div className="features">Pricing</div>
            <div className="features">Blog</div>
            <div className="features">Resource</div>
            <div className="features">{`Terms & Conditions`}</div>
            <div className="features">Privacy Policy</div>
          </div>
        </div>
        <div className="coca-inc-all-rights-reserved-parent">
          <div className="coca-inc-all">
            © 2023 Coca, Inc. All rights reserved.
          </div>
          <div className="social-media-wrapper">
            <div className="social-media">
              <img className="social-media-child" alt="" src="/group-58.svg" />
              <img className="social-media-child" alt="" src="/group-57.svg" />
              <img className="social-media-child" alt="" src="/group-59.svg" />
              <div className="ellipse-div" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOpportunityCard;

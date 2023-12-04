import ProfileContainer from "./ProfileContainer";
import "./Container50.css";

const Container50 = () => {
  return (
    <div className="graph-parent">
      <div className="graph">
        <div className="line-and-bar-chart">
          <div className="axis">
            <div className="content">
              <div className="y-axis">
                <div className="y-axis-line">
                  <div className="divider" />
                </div>
                <div className="y-axis-line1">
                  <div className="number">2500</div>
                  <img className="divider-icon" alt="" src="/divider.svg" />
                </div>
                <div className="y-axis-line1">
                  <div className="number">1500</div>
                  <img className="divider-icon" alt="" src="/divider.svg" />
                </div>
                <div className="y-axis-line1">
                  <div className="number">0</div>
                  <img className="divider-icon" alt="" src="/divider.svg" />
                </div>
              </div>
              <div className="x-axis">
                <div className="x-axis1">
                  <div className="jan">Jan</div>
                  <div className="jan">Feb</div>
                  <div className="jan">Mar</div>
                  <div className="jan">Apr</div>
                  <div className="jan">May</div>
                  <div className="jan">Jun</div>
                  <div className="jan">Jul</div>
                  <div className="jan">Aug</div>
                  <div className="jan">Sep</div>
                  <div className="jan">Okt</div>
                </div>
              </div>
            </div>
          </div>
          <div className="chart-data">
            <div className="chart">
              <img className="bar-icon" alt="" src="/bar.svg" />
              <img className="bar-icon1" alt="" src="/bar1.svg" />
              <img className="bar-icon2" alt="" src="/bar2.svg" />
              <img className="bar-icon3" alt="" src="/bar3.svg" />
              <img className="bar-icon2" alt="" src="/bar4.svg" />
              <img className="bar-icon5" alt="" src="/bar5.svg" />
              <img className="bar-icon6" alt="" src="/bar6.svg" />
              <img className="bar-icon7" alt="" src="/bar7.svg" />
              <img className="bar-icon2" alt="" src="/bar8.svg" />
              <img className="bar-icon7" alt="" src="/bar9.svg" />
            </div>
            <div className="content-parent">
              <div className="content1">
                <div className="div1">2,431</div>
              </div>
              <img className="polygon-icon" alt="" src="/polygon-4.svg" />
            </div>
          </div>
        </div>
        <div className="hourly-sales-report">Hourly sales report</div>
        <div className="view-all">View All</div>
        <div className="filter">
          <div className="select-country">
            <div className="cities">Select Country</div>
            <img
              className="icon-line-chevron-down1"
              alt=""
              src="/icon--line--chevrondown.svg"
            />
          </div>
          <div className="select-country">
            <div className="cities">Cities</div>
            <img
              className="icon-line-chevron-down1"
              alt=""
              src="/icon--line--chevrondown.svg"
            />
          </div>
        </div>
        <div className="graph-inner">
          <div className="frame-parent4">
            <img className="frame-icon" alt="" src="/frame-1171275587.svg" />
            <div className="sales-statistics">Sales Statistics</div>
          </div>
        </div>
      </div>
      <div className="frame-parent5">
        <div className="frame-parent6">
          <div className="frame-parent7">
            <div className="frame-wrapper3">
              <div className="frame-parent4">
                <img
                  className="frame-icon"
                  alt=""
                  src="/frame-11712755871.svg"
                />
                <div className="sales-statistics">Rating Review</div>
              </div>
            </div>
            <div className="reviews-of-some">
              Reviews of some of our app restaurant industry companies.
            </div>
          </div>
          <div className="frame-parent9">
            <div className="star-01-wrapper">
              <img className="star-01-icon1" alt="" src="/star01.svg" />
            </div>
            <div className="name">4.9</div>
          </div>
        </div>
        <div className="placeholder-parent">
          <div className="placeholder" />
          <div className="frame-parent10">
            <div className="star-01-container">
              <img
                className="star-01-icon1"
                alt=""
                src="/icon--line--chevrondown.svg"
              />
            </div>
            <div className="name1">50</div>
            <div className="thousands">thousands</div>
          </div>
          <div className="frame-wrapper4">
            <div className="frame-parent4">
              <img className="frame-icon" alt="" src="/frame-11712755872.svg" />
              <div className="sales-statistics">Total Partner</div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <img className="icon" alt="" src="/icon--line--chevrondown.svg" />
        <div className="testimonial-child" />
        <div className="testimonial-inner">
          <div className="text-wrapper">
            <div className="text">
              “Deliver a better customer experience and increase their
              operational efficiency.”
            </div>
          </div>
        </div>
        <div className="frame-parent12">
          <div className="frame-wrapper5">
            <div className="avatar-parent">
              <ProfileContainer />
              <div className="patrick-fernandes-parent">
                <div className="patrick-fernandes">Patrick Fernandes</div>
                <div className="ceo-at-burger">CEO at Burger King</div>
              </div>
            </div>
          </div>
          <div className="frame-parent13">
            <div className="arrow-narrow-right-container">
              <img
                className="arrow-narrow-right-icon4"
                alt=""
                src="/arrownarrowright1.svg"
              />
            </div>
            <div className="arrow-narrow-right-frame">
              <img
                className="arrow-narrow-right-icon3"
                alt=""
                src="/arrownarrowright2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container50;

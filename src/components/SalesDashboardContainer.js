import "./SalesDashboardContainer.css";

const SalesDashboardContainer = ({
  searchIconUrl,
  dashboardDescription,
  performanceMenuItems,
}) => {
  return (
    <div className="frame-parent15">
      <div className="image-7-wrapper">
        <div className="image-7" />
      </div>
      <div className="search-normal-parent">
        <img className="search-normal-icon" alt="" src={searchIconUrl} />
        <div className="frame-parent16">
          <div className="dashboard-to-monitor-your-busi-parent">
            <div className="dashboard-to-monitor">{dashboardDescription}</div>
            <div className="dashboard-provides-in-depth">
              {performanceMenuItems}
            </div>
          </div>
          <div className="button-parent">
            <div className="button2">
              <b className="launch-demo">Launch Demo</b>
            </div>
            <div className="button3">
              <b className="launch-demo">More Info</b>
            </div>
          </div>
        </div>
        <div className="button-group">
          <div className="button4">
            <div className="launch-demo1">Launch Demo</div>
          </div>
          <div className="button5">
            <div className="launch-demo1">More Info</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboardContainer;

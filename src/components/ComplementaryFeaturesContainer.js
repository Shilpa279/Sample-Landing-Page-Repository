import SalesDashboardContainer from "./SalesDashboardContainer";
import "./ComplementaryFeaturesContainer.css";

const ComplementaryFeaturesContainer = () => {
  return (
    <div className="features-3">
      <div className="complementary-features-for">
        Complementary features for your business needs
      </div>
      <SalesDashboardContainer
        searchIconUrl="/icon--line--chevrondown.svg"
        dashboardDescription="Dashboard to monitor your business sales from anywhere"
        performanceMenuItems="Dashboard provides in-depth insight into the performance menu items. You can see popular and unsold menus, helping you to monitor your restaurant business sales."
      />
      <div className="frame-parent17">
        <div className="search-normal-group">
          <img
            className="search-normal-icon1"
            alt=""
            src="/icon--line--chevrondown.svg"
          />
          <div className="frame-parent18">
            <div className="easier-and-better-desk-managem-parent">
              <div className="easier-and-better">
                Easier and better Desk Management
              </div>
              <div className="desk-management-becomes">
                Desk management becomes smoother with interactive table
                visualizations. You can manage orders, allocate tables and
                maximize restaurant capacity.
              </div>
            </div>
            <div className="button-container">
              <div className="button6">
                <b className="launch-demo2">Launch Demo</b>
              </div>
              <div className="button7">
                <b className="launch-demo2">More Info</b>
              </div>
            </div>
          </div>
          <div className="button-parent1">
            <div className="button8">
              <div className="launch-demo3">Launch Demo</div>
            </div>
            <div className="button9">
              <div className="launch-demo3">More Info</div>
            </div>
          </div>
        </div>
        <div className="image-7-container">
          <div className="image-71" />
        </div>
      </div>
      <SalesDashboardContainer
        searchIconUrl="/icon--line--chevrondown.svg"
        dashboardDescription="More efficient customer recording and monitoring"
        performanceMenuItems="Monitor order records to tailor orders to customer preferences, such as options to add or remove ingredients for a more personalized experience and better service."
      />
    </div>
  );
};

export default ComplementaryFeaturesContainer;

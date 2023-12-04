import "./BusinessPackagesContainer.css";

const BusinessPackagesContainer = () => {
  return (
    <div className="frame-parent19">
      <div className="packages-for-your-business-wrapper">
        <div className="packages-for-your">Packages for your business</div>
      </div>
      <div className="group-parent">
        <div className="group-div">
          <div className="button-parent2">
            <div className="button10">
              <div className="mount">Mount</div>
            </div>
            <div className="button11">
              <div className="mount">Annual</div>
            </div>
          </div>
        </div>
        <div className="iconinfo-parent">
          <img className="iconinfo1" alt="" src="/iconinfo.svg" />
          <i className="annual-2-container">
            <span className="annual-">Annual -</span>
            <span>{` `}</span>
            <span className="months-free">2 months free</span>
            <span> 🎉</span>
          </i>
        </div>
      </div>
    </div>
  );
};

export default BusinessPackagesContainer;

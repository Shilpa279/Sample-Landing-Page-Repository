import "./OperationalEfficiencyContainer.css";

const OperationalEfficiencyContainer = ({
  featureImageUrl,
  featureDescription,
  operationDescription,
  frameTitle,
  securityData,
  integrationImageUrl,
}) => {
  return (
    <div className="frame-parent24">
      <div className="frame-wrapper9">
        <div className="frame-parent25">
          <img className="frame-child26" alt="" src={featureImageUrl} />
          <div className="frame-parent26">
            <div className="operational-efficiency-wrapper">
              <div className="operational-efficiency">{featureDescription}</div>
            </div>
            <div className="automate-ordering-payment">
              {operationDescription}
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper9">
        <div className="frame-parent25">
          <img className="frame-child26" alt="" src={frameTitle} />
          <div className="frame-parent26">
            <div className="operational-efficiency-wrapper">
              <div className="operational-efficiency">{securityData}</div>
            </div>
            <div className="automate-ordering-payment">
              {integrationImageUrl}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationalEfficiencyContainer;

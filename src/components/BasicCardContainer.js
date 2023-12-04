import { useMemo } from "react";
import "./BasicCardContainer.css";

const BasicCardContainer = ({
  planType,
  iconImageUrl,
  priceLabel,
  statusIconName,
  featureIconName,
  statusIconNameAlt,
  iconName,
  circleIconName,
  iconName2,
  circleIconText,
  circleIconTextAlt,
  circleIconImageUrl,
  buttonIconName,
  circleIconAltText,
  checkCircleIconName,
  propBackgroundColor,
  propOverflow,
  propBackgroundColor1,
  propColor,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      overflow: propOverflow,
    };
  }, [propBackgroundColor, propOverflow]);

  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const basicStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="frame-parent22" style={frameDivStyle}>
      <div className="frame-parent23" style={frameDiv1Style}>
        <div className="basic-wrapper">
          <div className="basic" style={basicStyle}>
            {planType}
          </div>
        </div>
        <img className="check-circle-alt-icon9" alt="" src={iconImageUrl} />
      </div>
      <div className="group-container">
        <div className="month-wrapper">
          <div className="month1">
            <span>{priceLabel}</span>
            <span className="month2">/month</span>
          </div>
        </div>
      </div>
      <div className="frame-child17" />
      <div className="check-circle-alt-wrapper">
        <img className="x-circle-icon" alt="" src={statusIconName} />
      </div>
      <div className="frame-child18" />
      <div className="check-circle-alt-frame">
        <img className="x-circle-icon" alt="" src={featureIconName} />
      </div>
      <div className="frame-child19" />
      <div className="check-circle-alt-wrapper1">
        <img className="x-circle-icon" alt="" src={statusIconNameAlt} />
      </div>
      <div className="frame-child20" />
      <div className="check-circle-alt-wrapper2">
        <img className="x-circle-icon" alt="" src={iconName} />
      </div>
      <div className="frame-child21" />
      <div className="check-circle-alt-wrapper3">
        <img className="x-circle-icon" alt="" src={circleIconName} />
      </div>
      <div className="frame-child22" />
      <div className="x-circle-wrapper">
        <img className="x-circle-icon" alt="" src={iconName2} />
      </div>
      <div className="frame-child23" />
      <div className="x-circle-container">
        <img className="x-circle-icon" alt="" src={circleIconText} />
      </div>
      <div className="frame-child24" />
      <div className="x-circle-frame">
        <img className="x-circle-icon" alt="" src={circleIconTextAlt} />
      </div>
      <div className="frame-child25" />
      <div className="check-circle-alt-parent5">
        <img
          className="check-circle-alt-icon15"
          alt=""
          src={circleIconImageUrl}
        />
        <div className="flexibel-rotationsticky-optio2">
          Flexibel rotation/sticky options
        </div>
      </div>
      <div className="frame-wrapper8">
        <div className="subscribe-on-both-memberships-container">
          <div className="subscribe-on-both2">
            Subscribe on both memberships
          </div>
          <img className="x-circle-icon" alt="" src={buttonIconName} />
        </div>
      </div>
      <img className="check-circle-alt-icon16" alt="" src={circleIconAltText} />
      <img
        className="check-circle-alt-icon17"
        alt=""
        src={checkCircleIconName}
      />
    </div>
  );
};

export default BasicCardContainer;

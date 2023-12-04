import { useMemo } from "react";
import "./StateHideThemeLightDevic.css";

const StateHideThemeLightDevic = ({
  whatIsRustwebtemplate,
  icoutlinePlus,
  stateHideThemeLightDevicBackgroundColor,
  stateHideThemeLightDevicBorder,
  stateHideThemeLightDevicBoxSizing,
  stateHideThemeLightDevicPadding,
  whatIsRustwebtemplateLineHeight,
  whatIsRustwebtemplateFontFamily,
  whatIsRustwebtemplateColor,
  whatIsRustwebtemplateFontWeight,
}) => {
  const stateHideThemeLightDevicStyle = useMemo(() => {
    return {
      backgroundColor: stateHideThemeLightDevicBackgroundColor,
      border: stateHideThemeLightDevicBorder,
      boxSizing: stateHideThemeLightDevicBoxSizing,
      padding: stateHideThemeLightDevicPadding,
    };
  }, [
    stateHideThemeLightDevicBackgroundColor,
    stateHideThemeLightDevicBorder,
    stateHideThemeLightDevicBoxSizing,
    stateHideThemeLightDevicPadding,
  ]);

  const whatIsRustwebtemplateStyle = useMemo(() => {
    return {
      lineHeight: whatIsRustwebtemplateLineHeight,
      fontFamily: whatIsRustwebtemplateFontFamily,
      color: whatIsRustwebtemplateColor,
      fontWeight: whatIsRustwebtemplateFontWeight,
    };
  }, [
    whatIsRustwebtemplateLineHeight,
    whatIsRustwebtemplateFontFamily,
    whatIsRustwebtemplateColor,
    whatIsRustwebtemplateFontWeight,
  ]);

  return (
    <div
      className="statehide-themelight-devic"
      style={stateHideThemeLightDevicStyle}
    >
      <b className="what-is-rustwebtemplate" style={whatIsRustwebtemplateStyle}>
        {whatIsRustwebtemplate}
      </b>
      <img className="icoutline-plus-icon" alt="" src={icoutlinePlus} />
    </div>
  );
};

export default StateHideThemeLightDevic;

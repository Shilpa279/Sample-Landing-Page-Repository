import { useMemo } from "react";
import "./StateShowThemeLightDevic.css";

const StateShowThemeLightDevic = ({
  whatIsRustwebtemplate,
  icsharpMinus,
  odioAliquamArcuArcuDictum,
  stateShowThemeLightDevicBackgroundColor,
  stateShowThemeLightDevicPadding,
  stateShowThemeLightDevicBoxSizing,
  stateShowThemeLightDevicGap,
  whatIsRustwebtemplateLineHeight,
  whatIsRustwebtemplateFontFamily,
  whatIsRustwebtemplateBackground,
  whatIsRustwebtemplateWebkitBackgroundClip,
  whatIsRustwebtemplateWebkitTextFillColor,
  whatIsRustwebtemplateFontWeight,
  whatIsRustwebtemplateColor,
  odioAliquamArcuLineHeight,
  odioAliquamArcuFontFamily,
  odioAliquamArcuColor,
  odioAliquamArcuLetterSpacing,
}) => {
  const stateShowThemeLightDevicStyle = useMemo(() => {
    return {
      backgroundColor: stateShowThemeLightDevicBackgroundColor,
      padding: stateShowThemeLightDevicPadding,
      boxSizing: stateShowThemeLightDevicBoxSizing,
      gap: stateShowThemeLightDevicGap,
    };
  }, [
    stateShowThemeLightDevicBackgroundColor,
    stateShowThemeLightDevicPadding,
    stateShowThemeLightDevicBoxSizing,
    stateShowThemeLightDevicGap,
  ]);

  const whatIsRustwebtemplate1Style = useMemo(() => {
    return {
      lineHeight: whatIsRustwebtemplateLineHeight,
      fontFamily: whatIsRustwebtemplateFontFamily,
      background: whatIsRustwebtemplateBackground,
      webkitBackgroundClip: whatIsRustwebtemplateWebkitBackgroundClip,
      webkitTextFillColor: whatIsRustwebtemplateWebkitTextFillColor,
      fontWeight: whatIsRustwebtemplateFontWeight,
      color: whatIsRustwebtemplateColor,
    };
  }, [
    whatIsRustwebtemplateLineHeight,
    whatIsRustwebtemplateFontFamily,
    whatIsRustwebtemplateBackground,
    whatIsRustwebtemplateWebkitBackgroundClip,
    whatIsRustwebtemplateWebkitTextFillColor,
    whatIsRustwebtemplateFontWeight,
    whatIsRustwebtemplateColor,
  ]);

  const odioAliquamArcuStyle = useMemo(() => {
    return {
      lineHeight: odioAliquamArcuLineHeight,
      fontFamily: odioAliquamArcuFontFamily,
      color: odioAliquamArcuColor,
      letterSpacing: odioAliquamArcuLetterSpacing,
    };
  }, [
    odioAliquamArcuLineHeight,
    odioAliquamArcuFontFamily,
    odioAliquamArcuColor,
    odioAliquamArcuLetterSpacing,
  ]);

  return (
    <div
      className="stateshow-themelight-devic"
      style={stateShowThemeLightDevicStyle}
    >
      <div className="what-is-rustwebtemplate-parent">
        <b
          className="what-is-rustwebtemplate1"
          style={whatIsRustwebtemplate1Style}
        >
          {whatIsRustwebtemplate}
        </b>
        <img className="icsharp-minus-icon" alt="" src={icsharpMinus} />
      </div>
      <div className="odio-aliquam-arcu" style={odioAliquamArcuStyle}>
        {odioAliquamArcuArcuDictum}
      </div>
    </div>
  );
};

export default StateShowThemeLightDevic;

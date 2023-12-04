import { useMemo } from "react";
import "./Sizenormal.css";

const Sizenormal = ({
  placeholder = "Button",
  prefix = true,
  suffix = true,
  label = true,
  sizenormalBackgroundColor,
  sizenormalPadding,
  sizenormalBorder,
  buttonLineHeight,
  buttonColor,
}) => {
  const sizenormalStyle = useMemo(() => {
    return {
      backgroundColor: sizenormalBackgroundColor,
      padding: sizenormalPadding,
      border: sizenormalBorder,
    };
  }, [sizenormalBackgroundColor, sizenormalPadding, sizenormalBorder]);

  const buttonStyle = useMemo(() => {
    return {
      lineHeight: buttonLineHeight,
      color: buttonColor,
    };
  }, [buttonLineHeight, buttonColor]);

  return (
    <div className="sizenormal" style={sizenormalStyle}>
      {/* {prefix && (
        <div className="icon-placeholder1">
          <div className="icon-placeholder-item" />
        </div>
      )} */}
      {label && (
        <div className="button" style={buttonStyle}>
          {placeholder}
        </div>
      )}
      {/* {suffix && (
        <div className="icon-placeholder1">
          <div className="icon-placeholder-item" />
        </div>
      )} */}
    </div>
  );
};

export default Sizenormal;

import { useMemo } from "react";
import Sizenormal from "./Sizenormal";
import "./TypeprimarySizenormalSta.css";

const TypeprimarySizenormalSta = ({
  button,
  showIconPlaceholder,
  iconPlaceholderVisible,
  typeprimarySizenormalStaJustifyContent,
  typeprimarySizenormalStaWidth,
  buttonbaseBackgroundColor,
  buttonbasePadding,
  buttonbaseBorder,
  buttonLineHeight,
  buttonColor,
}) => {
  const typeprimarySizenormalStaStyle = useMemo(() => {
    return {
      justifyContent: typeprimarySizenormalStaJustifyContent,
      width: typeprimarySizenormalStaWidth,
    };
  }, [typeprimarySizenormalStaJustifyContent, typeprimarySizenormalStaWidth]);

  const sizenormalStyle = useMemo(() => {
    return {
      backgroundColor: buttonbaseBackgroundColor,
      padding: buttonbasePadding,
      border: buttonbaseBorder,
    };
  }, [buttonbaseBackgroundColor, buttonbasePadding, buttonbaseBorder]);

  const buttonStyle = useMemo(() => {
    return {
      lineHeight: buttonLineHeight,
      color: buttonColor,
    };
  }, [buttonLineHeight, buttonColor]);

  return (
    <div
      className="typeprimary-sizenormal-sta"
      style={typeprimarySizenormalStaStyle}
    >
      <Sizenormal
        placeholder="Sign In"
        prefix
        suffix
        label
        sizenormalBackgroundColor="#ff5c00"
        sizenormalPadding="12px 24px"
        sizenormalBorder="unset"
        buttonLineHeight="100%"
        buttonColor="#fff"
      />
    </div>
  );
};

export default TypeprimarySizenormalSta;

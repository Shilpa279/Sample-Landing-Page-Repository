import { useMemo } from "react";
import "./StateDefaultWithIconFalse.css";

const StateDefaultWithIconFalse = ({
  menu,
  stateDefaultWithIconFalsePadding,
  stateDefaultWithIconFalseBorderRadius,
  stateDefaultWithIconFalseBackgroundColor,
  menuFontWeight,
  menuFontFamily,
  menuColor,
}) => {
  const stateDefaultWithIconFalseStyle = useMemo(() => {
    return {
      padding: stateDefaultWithIconFalsePadding,
      borderRadius: stateDefaultWithIconFalseBorderRadius,
      backgroundColor: stateDefaultWithIconFalseBackgroundColor,
    };
  }, [
    stateDefaultWithIconFalsePadding,
    stateDefaultWithIconFalseBorderRadius,
    stateDefaultWithIconFalseBackgroundColor,
  ]);

  const menuStyle = useMemo(() => {
    return {
      fontWeight: menuFontWeight,
      fontFamily: menuFontFamily,
      color: menuColor,
    };
  }, [menuFontWeight, menuFontFamily, menuColor]);

  return (
    <div
      className="statedefault-with-iconfalse"
      style={stateDefaultWithIconFalseStyle}
    >
      <div className="menu" style={menuStyle}>
        {menu}
      </div>
    </div>
  );
};

export default StateDefaultWithIconFalse;

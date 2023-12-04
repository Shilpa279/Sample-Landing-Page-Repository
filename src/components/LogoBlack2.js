import { useMemo } from "react";
import "./LogoBlack2.css";

const LogoBlack2 = ({
  logoBlack2LogoBlack2,
  logoBlack2Position,
  logoBlack2FlexShrink,
}) => {
  const logoBlack2Style = useMemo(() => {
    return {
      position: logoBlack2Position,
      flexShrink: logoBlack2FlexShrink,
    };
  }, [logoBlack2Position, logoBlack2FlexShrink]);

  return (
    <img
      className="logo-black-2"
      alt=""
      src={logoBlack2LogoBlack2}
      style={logoBlack2Style}
    />
  );
};

export default LogoBlack2;

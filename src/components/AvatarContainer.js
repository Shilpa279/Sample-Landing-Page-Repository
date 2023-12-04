import { useMemo } from "react";
import "./AvatarContainer.css";

const AvatarContainer = ({
  propBackgroundColor,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
}) => {
  const avatarStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const oliverRagfeltKhV4fTy6D8UnsStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
    };
  }, [propHeight, propWidth, propTop, propRight, propBottom, propLeft]);

  return (
    <div className="avatar1" style={avatarStyle}>
      <div
        className="oliver-ragfelt-khv4fty6-d8-uns"
        style={oliverRagfeltKhV4fTy6D8UnsStyle}
      />
    </div>
  );
};

export default AvatarContainer;

import { useMemo } from "react";
import "./Property1Default.css";

const Property1Default = ({
  aBOUTME,
  property1DefaultCursor,
  onFrameContainer9Click,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      cursor: property1DefaultCursor,
    };
  }, [property1DefaultCursor]);

  return (
    <div
      className="property-1default"
      style={property1DefaultStyle}
      onClick={onFrameContainer9Click}
    >
      <b className="about-me">{aBOUTME}</b>
      <img
        className="chevron-down-double-icon"
        alt=""
        src="/chevrondowndouble.svg"
      />
    </div>
  );
};

export default Property1Default;

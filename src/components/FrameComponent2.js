import { useCallback } from "react";
import Property1Default from "./Property1Default";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  const onFrameContainer9Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="frame-group">
      <div className="frame-container">
        <div className="frame-div">
          <div className="hello-there-im-parent">
            <b className="hello-there-im">{`Hello there, i’m `}</b>
            <b className="nicole-cheng">Nicole Cheng</b>
          </div>
          <div className="building-rich-software-applica-wrapper">
            <div className="building-rich-software">
              Building rich software applications, assessing the quality of each
              specification, and resolving backend problems for a seamless user
              experience.
            </div>
          </div>
        </div>
        <Property1Default
          aBOUTME="ABOUT ME"
          property1DefaultCursor="pointer"
          onFrameContainer9Click={onFrameContainer9Click}
        />
      </div>
      <div className="image-210-wrapper">
        <img className="image-210-icon" alt="" src="/image-210@2x.png" />
      </div>
    </div>
  );
};

export default FrameComponent2;

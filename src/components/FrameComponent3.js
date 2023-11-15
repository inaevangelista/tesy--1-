import { useCallback } from "react";
import Property1Default from "./Property1Default";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  const onFrameContainer26Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer4']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="frame-parent6" data-scroll-to="frameContainer1">
      <div className="frame-parent7">
        <div className="frame-parent8">
          <div className="code-02-parent">
            <img className="code-02-icon" alt="" src="/code02.svg" />
            <b className="what-i-can">What I can provide</b>
          </div>
          <div className="developing-small-to">
            Developing small to medium software applications, exploring new
            sides of backend solutions, innovating new technologies, and finding
            the missing semicolon!
          </div>
        </div>
        <Property1Default
          aBOUTME="MY WORKS"
          property1DefaultCursor="pointer"
          onFrameContainer9Click={onFrameContainer26Click}
        />
      </div>
      <img className="frame-item" alt="" src="/vector-1.svg" />
      <div className="frame-parent9">
        <div className="frame-parent10">
          <img className="frame-inner" alt="" src="/frame-427320282@2x.png" />
          <div className="python">Python</div>
        </div>
        <div className="frame-parent10">
          <img className="frame-inner" alt="" src="/frame-4273202821@2x.png" />
          <div className="python">HTML5</div>
        </div>
        <div className="frame-parent10">
          <img className="frame-inner" alt="" src="/frame-4273202822@2x.png" />
          <div className="python">CSS3</div>
        </div>
        <div className="frame-parent10">
          <img className="frame-inner" alt="" src="/frame-4273202823@2x.png" />
          <div className="python">Java</div>
        </div>
        <div className="frame-parent14">
          <img className="frame-inner" alt="" src="/frame-4273202824@2x.png" />
          <div className="python">Bootstrap</div>
        </div>
        <div className="frame-parent14">
          <img className="frame-inner" alt="" src="/frame-4273202825@2x.png" />
          <div className="python">JS</div>
        </div>
        <div className="frame-parent14">
          <img className="frame-inner" alt="" src="/frame-4273202826@2x.png" />
          <div className="python">NodeJS</div>
        </div>
        <div className="frame-parent14">
          <img className="frame-inner" alt="" src="/frame-4273202827@2x.png" />
          <div className="python">ReactJS</div>
        </div>
        <div className="frame-parent14">
          <img className="frame-inner" alt="" src="/frame-4273202828@2x.png" />
          <div className="python">MySQL</div>
        </div>
        <div className="frame-parent14">
          <img className="frame-inner" alt="" src="/frame-4273202829@2x.png" />
          <div className="python">Selenium</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;

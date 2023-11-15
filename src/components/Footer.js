import { useCallback } from "react";
import "./Footer.css";

const Footer = () => {
  const onButtonBaseContainer4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonBaseContainer5Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonBaseContainer6Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonBaseContainer7Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="desktop-14-inner1">
      <div className="asset-2-2-parent">
        <div className="asset-2-21">
          <img className="layer-1-icon" alt="" src="/layer-1.svg" />
          <div className="navigation1">
            <div className="button-base4" onClick={onButtonBaseContainer4Click}>
              <div className="text4">About</div>
            </div>
            <div className="button-base4" onClick={onButtonBaseContainer5Click}>
              <div className="text4">Skills</div>
            </div>
            <div className="button-base4" onClick={onButtonBaseContainer6Click}>
              <div className="text4">Portfolio</div>
            </div>
            <div className="button-base4" onClick={onButtonBaseContainer7Click}>
              <div className="text4">{`Contact `}</div>
            </div>
          </div>
        </div>
        <img className="vector-icon" alt="" src="/vector-28.svg" />
        <div className="asset-2-3">
          <div className="text4">
            {`© Designed by `}
            <span className="ina-evangelista">Ina Evangelista</span>
          </div>
          <div className="frame-parent24">
            <div className="frame-child10" />
            <div className="frame-child10" />
            <div className="frame-child10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

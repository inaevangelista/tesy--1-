import { useCallback } from "react";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent5 from "./FrameComponent5";
import Footer from "./Footer";
import "./Desktop14.css";

const Desktop14 = () => {
  const onFrameContainer9Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer22Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer26Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer4']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonBaseContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonBaseContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonBaseContainer2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonBaseContainer3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer5']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <main className="desktop-14" id="con">
      <div className="container">
        <img className="asset-2-2" alt="" src="/asset-2-2.svg" />
        <div className="navigation">
          <div className="button-base" onClick={onButtonBaseContainerClick}>
            <div className="text">About</div>
          </div>
          <div className="button-base" onClick={onButtonBaseContainer1Click}>
            <div className="text">Skills</div>
          </div>
          <div className="button-base" onClick={onButtonBaseContainer2Click}>
            <div className="text">Portfolio</div>
          </div>
          <div className="button-base" onClick={onButtonBaseContainer3Click}>
            <div className="text">{`Contact `}</div>
          </div>
        </div>
      </div>
      <FrameComponent2 />
      <FrameComponent4 />
      <div className="frame-parent" data-scroll-to="frameContainer3">
        <FrameComponent1 />
        <FrameComponent3 />
      </div>
      <FrameComponent5 />
      <div className="desktop-14-inner" data-scroll-to="frameContainer">
        <div
          className="interested-in-working-with-me-parent"
          data-scroll-to="frameContainer5"
        >
          <b className="interested-in-working">
            Interested in working with me?
          </b>
          <div className="buttons">
            <b className="send-me-an">Send me an email</b>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Desktop14;

import { useCallback } from "react";
import Property1Default from "./Property1Default";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  const onFrameContainer22Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="frame-parent1" data-scroll-to="frameContainer2">
      <img className="frame-child" alt="" src="/frame-31.svg" />
      <div className="frame-parent2">
        <div className="frame-parent3">
          <div className="frame-parent4">
            <div className="database-02-wrapper">
              <img className="database-02-icon" alt="" src="/database02.svg" />
            </div>
            <b className="full-stack-developer">Full-Stack Developer</b>
          </div>
          <div className="frame-parent5">
            <div className="result-driven-detail-oriented-wrapper">
              <div className="result-driven-detail-oriented">
                Result-driven. Detail-oriented. Adaptable. Open-minded.
              </div>
            </div>
            <div className="result-driven-detail-oriented-wrapper">
              <div className="result-driven-detail-oriented">
                A huge fan of video games, sitcoms, outdoor activities, and of
                course, programming.
              </div>
            </div>
            <div className="result-driven-detail-oriented-wrapper">
              <div className="result-driven-detail-oriented">
                Interested in the entire backend spectrum and learning new
                possibilities with interesting people. Databases are my kind of
                chef’s kiss.
              </div>
            </div>
          </div>
        </div>
        <Property1Default
          aBOUTME="MY SKILLS"
          property1DefaultCursor="pointer"
          onFrameContainer9Click={onFrameContainer22Click}
        />
      </div>
    </div>
  );
};

export default FrameComponent1;

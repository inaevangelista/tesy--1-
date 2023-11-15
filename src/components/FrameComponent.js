import "./FrameComponent.css";

const FrameComponent = ({
  backendDevelopment,
  rITMO,
  rITMOAimsToProvideASafeAn,
}) => {
  return (
    <div className="frame-parent20">
      <div className="frame-child9" />
      <div className="frame-parent21">
        <div className="backend-development-parent">
          <b className="backend-development">{backendDevelopment}</b>
          <b className="ritmo">{rITMO}</b>
        </div>
        <div className="frame-wrapper">
          <div className="ritmo-aims-to-provide-a-safe-a-wrapper">
            <div className="ritmo-aims-to">{rITMOAimsToProvideASafeAn}</div>
          </div>
        </div>
      </div>
      <div className="buttons1">
        <b className="view-on-github">{`View on Github `}</b>
      </div>
    </div>
  );
};

export default FrameComponent;

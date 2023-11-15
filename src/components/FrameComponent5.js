import FrameComponent from "./FrameComponent";
import "./FrameComponent5.css";

const FrameComponent5 = () => {
  return (
    <div className="frame-parent22" data-scroll-to="frameContainer4">
      <div className="look-at-my-works-parent">
        <b className="look-at-my">Look at my works</b>
        <div className="the-best-error-message-is-the-wrapper">
          <div className="the-best-error">
            "The best error message is the one that never shows up." - Thomas
            Fuchs
          </div>
        </div>
      </div>
      <div className="frame-parent23">
        <FrameComponent
          backendDevelopment="Backend Development"
          rITMO="RITMO"
          rITMOAimsToProvideASafeAn="RITMO aims to provide a safe and easy transaction within the music industry. With the use of Ethereum blockchain technology, RITMO eliminates the need for intermediaries."
        />
        <FrameComponent
          backendDevelopment="FRONTEND AND Backend Development"
          rITMO="Palette Lock"
          rITMOAimsToProvideASafeAn="Palette Lock is an offline gaming application developed in Android Studio using SQLite as the score database system. Palette Lock is a rhythm game that aims to improve your sense of harmony."
        />
        <FrameComponent
          backendDevelopment="Backend Development"
          rITMO="Farina’s Ilocos Empanada"
          rITMOAimsToProvideASafeAn="With the development of this app using Agile method, FIE staff members are now able to administrate and manage their inventory systems. Clients are able to buy products directly from the website."
        />
      </div>
    </div>
  );
};

export default FrameComponent5;

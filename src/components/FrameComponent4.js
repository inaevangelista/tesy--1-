import Contact from "./Contact";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <div className="desktop-14-child">
      <div className="contact-parent">
        <Contact
          mail02="/mail02.svg"
          chengnicoleworkgmailcom="cheng.nicole.work@gmail.com"
        />
        <Contact
          mail02="/phone.svg"
          chengnicoleworkgmailcom="(0908) 813 0146 | Telephone"
        />
        <Contact
          mail02="/markerpin01.svg"
          chengnicoleworkgmailcom="Binondo, Manila, Philippines"
        />
      </div>
    </div>
  );
};

export default FrameComponent4;

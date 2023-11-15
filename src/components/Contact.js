import "./Contact.css";

const Contact = ({ mail02, chengnicoleworkgmailcom }) => {
  return (
    <div className="contact">
      <div className="mail-02-wrapper">
        <img className="mail-02-icon" alt="" src={mail02} />
      </div>
      <div className="chengnicoleworkgmailcom">{chengnicoleworkgmailcom}</div>
    </div>
  );
};

export default Contact;

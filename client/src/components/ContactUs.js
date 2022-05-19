import { SocialIcon } from "react-social-icons";

function ContactUs() {
  return (
    <div className="contactUs">

      <h2>Contact Us</h2>
      <div>
        <SocialIcon className="contactUs-icon" url="https://www.linkedin.com/in/wael-gomaa-b7a827231/" />
        <SocialIcon className="contactUs-icon" url="https://github.com/WaelAGomaa" />
        <SocialIcon className="contactUs-icon" url="https://medium.com/@waeelash155" />
        <SocialIcon className="contactUs-icon" url="https://mail.google.com/mail/?view=cm&fs=1&to=waeelash155@gmail.com" />
      </div>
    </div>
  );
}

export default ContactUs;

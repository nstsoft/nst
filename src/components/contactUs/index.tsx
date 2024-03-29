import "./index.scss";
import { Input, Button } from "antd";
import {
  faUpwork,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ContactUs() {
  return (
    <div className="ContactUs" id="ContactUs">
      <h4>Contact us</h4>
      <div className="form-container">
        <div className="info">
          <div className="logo">
            <img width={140} src="./assets/transparent_full.png" />
          </div>
          <div className="text">
            A software product development company located in Ukraine, with wide
            range of technology solutions.
          </div>
          <div className="email">Contact email: info@nstsoft.com</div>
          <div className="social">
            <FontAwesomeIcon className="icon" icon={faUpwork} fade />
            <FontAwesomeIcon className="icon" icon={faInstagram} fade />
            <FontAwesomeIcon className="icon" icon={faFacebookF} fade />
          </div>
        </div>
        <div className="form">
          <div className="form-item duplex">
            <Input placeholder="Name" />
            <Input placeholder="Last Name" />
          </div>
          <div className="form-item">
            <Input placeholder="Email" />
          </div>
          <div className="form-item text">
            <Input placeholder="Please tell us a bit  about your goals, what are you hoping  to  achieve with NSTsoft" />
          </div>
          <div className="form-item ">
            <Button className="submit">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

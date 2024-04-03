import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Support = () => {
  return (
       <div className="card-item">
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faPhone} bounce />
      </div>
      <div className="head">Continuous Support</div>
      <div className="text">
        Our commitment to our clients doesn't end when the website goes live. We
        offer ongoing support and maintenance services to ensure that our
        clients' websites remain secure, up-to-date, and optimized for peak
        performance long after the launch.
      </div>
    </div>

  );
};

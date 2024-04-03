// import { faMedal } from "@fortawesome/free-regular-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Quality = () => {
  return (
    <div className="card-item">
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faMedal} beat />
      </div>
      <div className="head common-header">Commitment to Quality</div>
      <div className="text common-text">
        Quality is at the core of everything we do. Our rigorous testing
        processes and attention to detail ensure that your project not only
        meets but exceeds your expectations.
      </div>
    </div>
  );
};

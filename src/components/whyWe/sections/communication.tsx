import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Communications = () => {
  return (
    <div className="card-item">
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faComment} fade />
      </div>
      <div className="head common-header">Transparent Communication</div>
      <div className="text common-text">
        We believe in open and transparent communication every step of the way.
        From initial concept to final delivery, you'll be kept informed and
        involved in the process.
      </div>
    </div>
  );
};

import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Excellence = () => {
  return (
    <div className="card-item">
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faRankingStar} shake />
      </div>
      <div className="head common-header">Passion for Excellence</div>
      <div className="text common-text">
        What truly sets us apart is our passion for what we do. We live and
        breathe web development, constantly pushing the boundaries of creativity
        and innovation to deliver solutions that inspire, engage, and empower
        our clients and their audiences
      </div>
    </div>
  );
};

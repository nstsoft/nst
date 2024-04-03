import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Innovations = () => {
  return (
    <div className="card-item">
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faEarthAmerica} />
      </div>
      <div className="head">Continuous Innovation</div>
      <div className="text">
        In the ever-evolving world of web development, staying ahead of the
        curve is essential. That's why we're committed to continuous learning
        and innovation, keeping our skills and technologies up-to-date to
        deliver the best possible solutions.
      </div>
    </div>
  );
};

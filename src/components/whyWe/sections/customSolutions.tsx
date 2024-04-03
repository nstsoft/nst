import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CustomSolutions = () => {
  return (
    <div className="card-item">
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faLightbulb} bounce />
      </div>
      <div className="head">Custom Solutions</div>
      <div className="text">
        We understand that one size doesn't fit all. That's why we take a
        personalized approach to every project, ensuring that each solution is
        tailored to meet your specific goals and requirements.
      </div>
    </div>
  );
};

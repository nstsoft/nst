import { faJetFighter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Focus = () => {
  return (
    <div className="card-item">
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faJetFighter} beatFade />
      </div>
      <div className="head common-header">Focus on Performance</div>
      <div className="text common-text">
        A visually stunning website is only half the battle. We prioritize
        performance optimization, ensuring that our websites not only look great
        but also load quickly, function smoothly, and deliver an exceptional
        user experience across all devices and platforms
      </div>
    </div>
  );
};

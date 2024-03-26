import { faJetFighter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";

export const Focus = () => {
  return (
    <Card
      size="default"
      title="Focus on Performance"
      style={{
        width: 300,
      }}
    >
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faJetFighter} beatFade />
      </div>
      <p>
        A visually stunning website is only half the battle. We prioritize
        performance optimization, ensuring that our websites not only look great
        but also load quickly, function smoothly, and deliver an exceptional
        user experience across all devices and platforms
      </p>
    </Card>
  );
};

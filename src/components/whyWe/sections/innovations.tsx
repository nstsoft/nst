import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";

export const Innovations = () => {
  return (
    <Card
      size="default"
      title="Continuous Innovation"
      style={{
        width: 300,
      }}
    >
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faEarthAmerica} bounce />
      </div>
      <p>
        In the ever-evolving world of web development, staying ahead of the
        curve is essential. That's why we're committed to continuous learning
        and innovation, keeping our skills and technologies up-to-date to
        deliver the best possible solutions.
      </p>
    </Card>
  );
};

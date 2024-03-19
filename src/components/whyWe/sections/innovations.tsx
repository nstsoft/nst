import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Space } from "antd";

export const Innovations = () => {
  return (
    <Space className="Space" direction="horizontal" size={16}>
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faEarthAmerica} bounce />
      </div>
      <Card
        size="default"
        title="Continuous Innovation"
        style={{
          width: 300,
        }}
      >
        <p>
          In the ever-evolving world of web development, staying ahead of the
          curve is essential. That's why we're committed to continuous learning
          and innovation, keeping our skills and technologies up-to-date to
          deliver the best possible solutions.
        </p>
      </Card>
    </Space>
  );
};

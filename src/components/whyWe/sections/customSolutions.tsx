import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Space } from "antd";

export const CustomSolutions = () => {
  return (
    <Space className="Space" direction="horizontal" size={16}>
      <Card
        size="default"
        title="Custom Solutions"
        style={{
          width: 300,
        }}
      >
        <p>
          We understand that one size doesn't fit all. That's why we take a
          personalized approach to every project, ensuring that each solution is
          tailored to meet your specific goals and requirements.
        </p>
      </Card>
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faLightbulb} bounce />
      </div>
    </Space>
  );
};

import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Space } from "antd";

export const Communications = () => {
  return (
    <Space className="Space" direction="horizontal" size={16}>
      <Card
        size="default"
        title="Transparent Communication"
        style={{
          width: 300,
        }}
      >
        <p>
          We believe in open and transparent communication every step of the
          way. From initial concept to final delivery, you'll be kept informed
          and involved in the process.
        </p>
      </Card>
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faComment} bounce />
      </div>
    </Space>
  );
};

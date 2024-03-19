// import { faMedal } from "@fortawesome/free-regular-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Space } from "antd";

export const Quality = () => {
  return (
    <Space className="Space" direction="horizontal" size={16}>
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faMedal} bounce />
      </div>
      <Card
        size="default"
        title="Commitment to Quality"
        style={{
          width: 300,
        }}
      >
        <p>
          Quality is at the core of everything we do. Our rigorous testing
          processes and attention to detail ensure that your project not only
          meets but exceeds your expectations.
        </p>
      </Card>
    </Space>
  );
};

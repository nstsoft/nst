import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";

export const Communications = () => {
  return (
    <Card
      size="default"
      title="Transparent Communication"
      style={{
        width: 300,
      }}
    >
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faComment} fade />
      </div>
      <p>
        We believe in open and transparent communication every step of the way.
        From initial concept to final delivery, you'll be kept informed and
        involved in the process.
      </p>
    </Card>
  );
};

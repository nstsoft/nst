import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";

export const Excellence = () => {
  return (
    <Card
      size="default"
      title="Passion for Excellence"
      style={{
        width: 300,
      }}
    >
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faRankingStar} shake />
      </div>
      <p>
        What truly sets us apart is our passion for what we do. We live and
        breathe web development, constantly pushing the boundaries of creativity
        and innovation to deliver solutions that inspire, engage, and empower
        our clients and their audiences
      </p>
    </Card>
  );
};

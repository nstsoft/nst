import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";

export const Support = () => {
  return (
    <Card
      size="default"
      title="Continuous Support"
      style={{
        width: 300,
      }}
    >
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faPhone} bounce />
      </div>
      <p>
        Our commitment to our clients doesn't end when the website goes live. We
        offer ongoing support and maintenance services to ensure that our
        clients' websites remain secure, up-to-date, and optimized for peak
        performance long after the launch.
      </p>
    </Card>
  );
};

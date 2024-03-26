import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";

export const Details = () => {
  return (
    <Card
      size="default"
      title="Attention to Detail"
      style={{
        width: 300,
      }}
    >
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faAsterisk} spin />
      </div>
      <p>
        From the initial concept to the final launch, we sweat the small stuff
        so our clients don't have to. Our meticulous attention to detail ensures
        that every aspect of our websites, from the layout and typography to the
        code and functionality, is polished to perfection
      </p>
    </Card>
  );
};

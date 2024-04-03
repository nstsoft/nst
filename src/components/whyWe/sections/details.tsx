import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Details = () => {
  return (
    <div className="card-item">
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faAsterisk} spin />
      </div>
      <div className="head common-header">Attention to Detail</div>
      <div className="text common-text">
        From the initial concept to the final launch, we sweat the small stuff
        so our clients don't have to. Our meticulous attention to detail ensures
        that every aspect of our websites, from the layout and typography to the
        code and functionality, is polished to perfection
      </div>
    </div>
  );
};

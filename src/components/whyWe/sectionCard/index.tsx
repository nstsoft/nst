import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SectionCard = {
  title: string;
  text: string;
  icon: IconDefinition;
};

export const SectionCard: React.FC<SectionCard> = ({ title, text, icon }) => {
  return (
    <div className="card-item">
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={icon} />
      </div>
      <div className="head common-header">{title}</div>
      <div className="text common-text">{text}</div>
    </div>
  );
};

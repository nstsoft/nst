import { Space } from 'antd';
import './index.scss';
import { SectionCard } from './sectionCard';
import { sectionList } from './constants';

export const WhyWe = () => {
  return (
    <section className="WhyWe" id="why-we">
      <div className="central-container">
        <h1 className="section-header">What Sets Us Apart</h1>
        <div className="cards">
          {sectionList.map(({ title, text, icon }) => (
            <SectionCard key={title} title={title} text={text} icon={icon} />
          ))}
          <Space className="Space" direction="horizontal" size={16}></Space>
        </div>
      </div>
    </section>
  );
};

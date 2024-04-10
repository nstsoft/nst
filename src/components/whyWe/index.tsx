import { Space } from "antd";
import "./index.scss";
import {
  Communications,
  CustomSolutions,
  Details,
  Excellence,
  Focus,
  Innovations,
  Quality,
  Support,
} from "./sections";

export const WhyWe = () => {
  return (
    <section className="WhyWe" id="why-we">
      <div className="central-container">
        <h1 className="section-header">What Sets Us Apart</h1>
        <div className="cards">
          <CustomSolutions />
          <Quality />
          <Communications />

          <Innovations />
          <Support />
          <Focus />

          <Details />
          <Excellence />

          <Space className="Space" direction="horizontal" size={16}></Space>
        </div>
      </div>
    </section>
  );
};

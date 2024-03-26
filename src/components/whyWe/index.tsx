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
    <div className="WhyWe" id="#about-us">
      <h1 className="SectionHeader">What Sets Us Apart</h1>
      <div className="cards">
        <Space className="Space" direction="horizontal" size={16}>
          <CustomSolutions />
          <Quality />
          <Communications />
        </Space>
        <Space className="Space" direction="horizontal" size={16}>
          <Innovations />
          <Support />
          <Focus />
        </Space>
        <Space className="Space" direction="horizontal" size={16}>
          <Details />
          <Excellence />
        </Space>

        <Space className="Space" direction="horizontal" size={16}></Space>
      </div>
    </div>
  );
};

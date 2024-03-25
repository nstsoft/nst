import { Space } from "antd";
import "./index.scss";

import {
  Communications,
  CustomSolutions,
  Innovations,
  Quality,
} from "./sections";

export const WhyWe = () => {
  return (
    <div className="WhyWe" id="#about-us">
      <h1 className="why_we_header">What Sets Us Apart</h1>
      <div className="cards">
        <Space className="Space" direction="horizontal" size={16}>
          <CustomSolutions />
          <Quality />
          <Communications />
        </Space>
        <Space className="Space" direction="horizontal" size={16}>
          <Innovations />
        </Space>

        <Space className="Space" direction="horizontal" size={16}></Space>
      </div>
    </div>
  );
};

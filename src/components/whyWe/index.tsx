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
import { aboutUsRef } from "react";

export const WhyWe = () => {
  return (
    <div className="WhyWe" id="whyWe">
      <h1 className="SectionHeader">What Sets Us Apart</h1>
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
  );
};

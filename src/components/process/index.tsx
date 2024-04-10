import "./index.scss";
import { useState } from "react";
import { Steps } from "antd";

import { stepsFunctions } from "./process.items";

export function Process() {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const buildContent = () => {
    return stepsFunctions[current]()
  }
  return (
    <section className="Process" id="process">
      <div className="central-container">
        <h1 className="section-header">Developing process</h1>
        <div className="steps">
          <Steps
            current={current}
            onChange={onChange}
            labelPlacement="vertical"
            items={[
              { title: "Discovery Phase" },
              { title: "Creating the Architecture" },
              { title: "Writing code" },
              { title: "Testing" },
              { title: "Deployment" },
              { title: "Maintenance" },
            ]}
          />
        </div>
        <div className="content">
          {buildContent()}

        </div>
      </div>
    </section>
  );
}

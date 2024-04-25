import './index.scss';
import { useState } from 'react';
import { steps } from './stepper.items';
import { stepsFunctions } from './process.items';

type StepsKey = 'item-1' | 'item-2' | 'item-3' | 'item-4' | 'item-5' | 'item-6';

export function Process() {
  const [stepItems, setStepItems] = useState(() => steps.map((step, index) => ({ ...step, active: index === 0 })));
  const [current, setCurrent] = useState<StepsKey>('item-1');
  const onStepChange = (key: string) => {
    setStepItems((steps) => steps.map((step) => ({ ...step, active: step.key === key })));
    setCurrent(key as StepsKey);
  };

  const buildContent = () => {
    return stepsFunctions?.[current]();
  };

  return (
    <section className="Process" id="process">
      <div className="central-container">
        <h1 className="section-header">Developing process</h1>
        <div className="stepper">
          <div className="bx-pager bx-default-pager">
            {stepItems.map((step) => (
              <div
                key={step.key}
                className={'bx-pager-item' + (step.active ? ' active' : '')}
                onClick={() => onStepChange(step.key)}
              >
                <div className="bx-pager-link common-text" data-slide-index="0">
                  {step.title}
                </div>
                <div className="arrow"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="content">{buildContent()}</div>
      </div>
    </section>
  );
}

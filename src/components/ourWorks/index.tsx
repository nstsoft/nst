import './index.scss';
import { RenderItem } from './renderItem';
import items from './items';

export function OurWorks() {
  return (
    <section className="Our-works" id="our-works">
      <h1 className="section-header">Our works</h1>
      <div className="central-container">{items.map(RenderItem)}</div>
    </section>
  );
}

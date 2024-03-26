import "./index.scss";
export function Services() {
  return (
    <div className="Services">
      <h1 className="SectionHeader">Our services</h1>
      <div className="content">
        <div className="OurServices">
          <div className="image">
            <img src="../../assets/office-transparent.png" />
          </div>
          <div className="items">
            <div className="item">Web Development</div>
            <div className="item">Web Hosting and Maintenance</div>
            <div className="item">Consulting </div>
            <div className="item">E-commerce Solutions</div>
            <div className="item">
              Cross-Platform Mobile App Development with React Native
            </div>
            <div className="item">
              React Native App Testing and Quality Assurance
            </div>
            <div className="item">
              Maintenance and Support for React Native Apps
            </div>
            <div className="item">DevOps Strategy and Consulting</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./index.scss";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function Services() {
  return (
    <div className="Services" id="services">
      <h1 className="SectionHeader">Our services</h1>
      <div className="content">
        <div className="OurServices">
          <div className="image">
            <img src="../../assets/office-transparent.png" />
          </div>
          <div className="items">
            <div className="item">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} fade />
              <p>Web Development</p>
            </div>
            <div className="item">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} fade />
              <p>Web Hosting and Maintenance</p>
            </div>
            <div className="item">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} fade />
              <p>Consulting</p>
            </div>
            <div className="item">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} fade />
              <p>E-commerce Solutions</p>
            </div>
            <div className="item">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} fade />
              <p>Cross-Platform Mobile App Development with React Native</p>
            </div>
            <div className="item">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} fade />
              <p>React Native App Testing and Quality Assurance</p>
            </div>
            <div className="item">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} fade />
              <p> Maintenance and Support for React Native Apps</p>
            </div>
            <div className="item">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} fade />
              <p>DevOps Strategy and Consulting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

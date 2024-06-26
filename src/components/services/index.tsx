import './index.scss';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ServiceSvg } from '../../svg/services';

export function Services() {
  return (
    <section className="Services" id="services">
      <div className="central-container">
        <h1 className="section-header">Our services</h1>
        <div className="content">
          <div className="OurServices">
            <div className="image">
              <ServiceSvg />
            </div>
            <div className="text common-header">
              <div className="text-item">
                <FontAwesomeIcon icon={faCheck} /> Web
              </div>
              <div className="text-item">
                <FontAwesomeIcon icon={faCheck} /> Desktop
              </div>
              <div className="text-item">
                <FontAwesomeIcon icon={faCheck} /> Mobile
              </div>
            </div>
          </div>
        </div>
        <div className="cards central-container">
          <div className="card">
            <div className="item face">
              <img src="./assets/mak-book.jpg" />
            </div>
            <div className="item back">
              <div className="head common-header">Frontend</div>
              <div className="text common-text">
                Harnessing the potential of React, a leading JavaScript library, we craft engaging and responsive user
                interfaces that elevate the user experience to new heights. Our frontend developers possess extensive
                expertise in building interactive web applications that captivate and retain users.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="item face">
              <img src="./assets/web.jpg" />
            </div>
            <div className="item back">
              <div className="head common-header">Backend</div>
              <div className="text common-text">
                With Node.js, a powerful runtime environment, we architect robust and scalable backend systems that
                drive the core functionalities of your applications. Our backend developers excel in building efficient
                APIs, handling data management, and ensuring seamless integration with frontend technologies.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="item face">
              <img src="./assets/office.jpg" />
            </div>
            <div className="item back">
              <div className="head common-header">Desktop</div>
              <div className="text common-text">
                Utilizing Electron, a cross-platform framework, we develop desktop applications that offer a native-like
                experience across various operating systems. From productivity tools to media players, our desktop
                development solutions cater to diverse business needs while ensuring performance and reliability.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="item face">
              <img src="./assets/office2.jpg" />
            </div>
            <div className="item back">
              <div className="head common-header">Mobile</div>
              <div className="text common-text">
                Empowered by React Native, a leading framework for mobile app development, we engineer high-performance
                mobile applications that run seamlessly on both iOS and Android platforms. Our mobile development team
                excels in delivering feature-rich and intuitive mobile experiences that engage users on the go.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="item face">
              <img src="./assets/servers.jpg" />
            </div>
            <div className="item back">
              <div className="head common-header">DevOps</div>
              <div className="text common-text">
                Embracing DevOps practices, we streamline the development lifecycle and enhance collaboration between
                development and operations teams. Our DevOps experts automate deployment pipelines, optimize
                infrastructure management, and ensure continuous integration and delivery to accelerate time-to-market.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="item face">
              <img src="./assets/cloud.jpg" />
            </div>
            <div className="item back">
              <div className="head common-header">Cloud Solutions</div>
              <div className="text common-text">
                Unlock the full potential of cloud computing with our AWS and Azure services. Whether it's building
                scalable cloud-native applications, migrating existing workloads to the cloud, or optimizing cloud
                infrastructure, we provide end-to-end solutions tailored to your business objectives.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

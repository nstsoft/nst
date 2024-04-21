import './index.scss';
import { items, formAwsList } from './items.list';

export function Technologies() {
  return (
    <section className="Technologies" id="technologies">
      <div className="central-container">
        <h1 className="section-header">We work with</h1>
        <div className="content">
          <div className="OurTechnologies">
            <div className="technologies">
              {items.map((item) => (
                <div className="tech-item" key={item[0].icon}>
                  <div className="elem left" style={item[0].style}>
                    <img src={item[0].icon} />
                  </div>
                  <div className="elem center" style={item[1].style}>
                    <img src={item[1].icon} />
                  </div>
                  <div className="elem right" style={item[2].style}>
                    <img src={item[2].icon} />
                  </div>
                </div>
              ))}
              <div className="amazon">
                <img src="./assets/amazon.png" />
              </div>
            </div>
            <div className="expertise">
              <h4 className="common-header center">Web Development Expertise</h4>
              <div className="description center common-text">
                At NST, we specialize in delivering high-quality web development solutions tailored to meet your
                business needs. Leveraging the latest technologies and industry best practices, our team of seasoned
                developers crafts robust and scalable web applications to empower your digital presence.
              </div>
              <h6 className="common-header center">Technologies We Excel In</h6>
              <div className="item">
                <p className="common-sub-header">Javascript/Typescript</p>
                <p className="item-tex">
                  JavaScript is the backbone of modern web development, and our proficiency in this language allows us
                  to create dynamic and interactive web experiences for your users.
                </p>
              </div>
              <div className="item">
                <p className="common-sub-header">Node.js</p>
                <p className="item-tex">
                  With Node.js, we build fast and scalable server-side applications, enabling real-time data exchange
                  and efficient handling of concurrent requests.
                </p>
              </div>
              <div className="item">
                <p className="common-sub-header">React</p>
                <p className="item-tex">
                  As experts in React, we develop captivating user interfaces that enhance user engagement and deliver
                  seamless navigation across your web applications.
                </p>
              </div>
              <div className="item">
                <p className="common-sub-header">Express</p>
                <p className="item-tex">
                  Express.js serves as our go-to framework for building flexible and feature-rich web APIs, enabling
                  rapid development and easy integration with various databases and third-party services.{' '}
                </p>
              </div>
              <div className="item">
                <p className="common-sub-header">Nest</p>
                <p className="item-tex">
                  Nest.js, with its modular architecture and TypeScript support, empowers us to develop enterprise-grade
                  applications with enhanced maintainabilityitem-header and scalability.
                </p>
              </div>
              <div className="item">
                <p className="common-sub-header">Databases</p>
                <p className="item-tex">
                  Our proficiency in MongoDb, MySQL and PostgreSQL databases ensures that your data is stored securely
                  and efficiently, supporting complex queries and seamless data retrieval for your applications.
                </p>
              </div>
              <div className="item">
                <p className="common-sub-header">Amazon Web Services (AWS)</p>
                <p className="item-tex">
                  We harness the power of cloud computing to deliver scalable, secure, and reliable solutions for your
                  web applications. Our expertise in AWS services includes:
                </p>
                {formAwsList()}
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-content">
          <div className="description">
            At NST, we specialize in delivering high-quality web development solutions tailored to meet your business
            needs. Leveraging the latest technologies and industry best practices, our team of seasoned developers
            crafts robust and scalable web applications to empower your digital presence.
          </div>
          <div className="items">
            <div className="item ts">
              <div className="img">
                <img src="./assets/tech-icons/ts.png" />
              </div>
              <div className="text-content">
                <div className="header common-header">JavaScript/Typescript</div>
                <div className="description">
                  JavaScript is the backbone of modern web development, and our proficiency in this language allows us
                  to create dynamic and interactive web experiences for your users.
                </div>
              </div>
            </div>
            <div className="item react">
              <div className="img">
                <img src="./assets/tech-icons/react.png" />
              </div>
              <div className="text-content">
                <div className="header common-header">React</div>
                <div className="description">
                  As experts in React, we develop captivating user interfaces that enhance user engagement and deliver
                  seamless navigation across your web applications.
                </div>
              </div>
            </div>
            <div className="item node">
              <div className="img">
                <img src="./assets/tech-icons/nodejs.png" />
              </div>
              <div className="text-content">
                <div className="header common-header">Node.js</div>
                <div className="description">
                  With Node.js, we build fast and scalable server-side applications, enabling real-time data exchange
                  and efficient handling of concurrent requests.
                </div>
              </div>
            </div>

            <div className="item db">
              <div className="img">
                <img src="./assets/tech-icons/mongodb-icon-1.svg" />
              </div>
              <div className="text-content">
                <div className="header common-header">Databases</div>
                <div className="description">
                  Our proficiency in MongoDb, MySQL and PostgreSQL databases ensures that your data is stored securely
                  and efficiently, supporting complex queries and seamless data retrieval for your applications.
                </div>
              </div>
            </div>
          </div>
          <div className="aws-content items">
            <div className="aws-logo item">
              <img src="./assets/amazon.png" />
            </div>
            <p className="item-text">
              We harness the power of cloud computing to deliver scalable, secure, and reliable solutions for your web
              applications. Our expertise in AWS services includes:
            </p>
            {formAwsList()}
          </div>
        </div>
      </div>
    </section>
  );
}

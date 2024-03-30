import "./index.scss";
import { items } from "./items.list";

export function Technologies() {
  return (
    <div className="Technologies" id="Technologies">
      <h1 className="SectionHeader">We work with</h1>
      <div className="content">
        <div className="OurTechnologies">
          <div className="technologies">
            {items.map((item) => (
              <div className="tech-item">
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
            <h4>Web Development Expertise</h4>
            <div className="description">
              At NST, we specialize in delivering high-quality web development
              solutions tailored to meet your business needs. Leveraging the
              latest technologies and industry best practices, our team of
              seasoned developers crafts robust and scalable web applications to
              empower your digital presence.
            </div>
            <h6>Technologies We Excel In</h6>
            <div className="item">
              <p className="item-header">Javascript/Typescript</p>
              <p className="item-tex">
                JavaScript is the backbone of modern web development, and our
                proficiency in this language allows us to create dynamic and
                interactive web experiences for your users.
              </p>
            </div>
            <div className="item">
              <p className="item-header">Node.js</p>
              <p className="item-tex">
                With Node.js, we build fast and scalable server-side
                applications, enabling real-time data exchange and efficient
                handling of concurrent requests.
              </p>
            </div>
            <div className="item">
              <p className="item-header">React</p>
              <p className="item-tex">
                As experts in React, we develop captivating user interfaces that
                enhance user engagement and deliver seamless navigation across
                your web applications.
              </p>
            </div>
            <div className="item">
              <p className="item-header">Express</p>
              <p className="item-tex">
                Express.js serves as our go-to framework for building flexible
                and feature-rich web APIs, enabling rapid development and easy
                integration with various databases and third-party services.{" "}
              </p>
            </div>
            <div className="item">
              <p className="item-header">Nest</p>
              <p className="item-tex">
                Nest.js, with its modular architecture and TypeScript support,
                empowers us to develop enterprise-grade applications with
                enhanced maintainability and scalability.
              </p>
            </div>
            <div className="item">
              <p className="item-header">Databases</p>
              <p className="item-tex">
                Our proficiency in MongoDb, MySQL and PostgreSQL databases
                ensures that your data is stored securely and efficiently,
                supporting complex queries and seamless data retrieval for your
                applications.
              </p>
            </div>
            <div className="item">
              <p className="item-header">Amazon Web Services (AWS)</p>
              <p className="item-tex">
                As an AWS Partner, we harness the power of cloud computing to
                deliver scalable, secure, and reliable solutions for your web
                applications. Our expertise in AWS services includes:
              </p>
              <ul>
                <li>
                  <p>Amazon EC2:</p> Provision and manage virtual servers to
                  host your web applications with scalability and flexibility.
                </li>
                <li>
                  <p>Amazon RDS:</p>Utilize managed database services for MySQL
                  and PostgreSQL to ensure high availability, durability, and
                  performance.
                </li>
                <li>
                  <p>Amazon S3:</p>Store and retrieve data at any scale with
                  industry-leading object storage, ensuring security and
                  compliance.
                </li>
                <li>
                  <p>Amazon API Gateway: </p>Build, deploy, and manage APIs with
                  ease, enabling seamless integration with your web
                  applications.
                </li>
                <li>
                  <p> Amazon CloudFront:</p> Deliver content with low latency
                  and high transfer speeds using a global content delivery
                  network (CDN).
                </li>
                <li>
                  <p>AWS Lambda:</p>Run code without provisioning or managing
                  servers, allowing for cost-effective and scalable execution of
                  backend logic.
                </li>
                <li>
                  <p>Amazon SES (Simple Email Service):</p>Send transactional
                  and marketing emails reliably and at scale to engage with your
                  users.
                </li>
                <li>
                  <p>Amazon SNS (Simple Notification Service):</p> Send
                  notifications to users or other services via email, SMS, or
                  push notifications.
                </li>
                <li>
                  <p>Amazon SQS (Simple Queue Service):</p> Decouple and scale
                  microservices, distributed systems, and serverless
                  applications.
                </li>
                <li>
                  <p> Amazon DynamoDB:</p> A fast and flexible NoSQL database
                  service for all applications that need consistent,
                  single-digit millisecond latency at any scale.
                </li>
                <li>
                  <p>Amazon Route 53:</p>Scalable DNS web service to route
                  traffic to your web applications with high availability and
                  reliability.
                </li>
                <li>
                  <p>IAM (Identity and Access Management):</p>Manage user
                  identities and permissions securely to control access to your
                  AWS resources.
                </li>
                <li>
                  <p>Amazon Cognito:</p>Provide authentication, authorization,
                  and user management for your web applications with ease.
                </li>
                <li>
                  <p> AWS CloudFormation:</p> Automate the deployment and
                  management of your AWS infrastructure using templates. Amazon
                  CloudWatch: Monitor your AWS resources and applications in
                  real-time to ensure operational efficiency and performance
                  optimization.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

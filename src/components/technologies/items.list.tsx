export const items = [
  [
    { icon: './assets/tech-icons/html.png', text: 'Html', style: { background: '#ff5722' } },
    { icon: './assets/tech-icons/js.png', text: 'JavaScript', style: { background: '#f7e018' } },
    { icon: './assets/tech-icons/ts.png', text: 'TypeScript', style: { background: '#007bcd' } },
  ],
  [
    { icon: './assets/tech-icons/react.png', text: 'React', style: { background: 'transparent' } },
    { icon: './assets/tech-icons/redux.png', text: 'Redux', style: { background: 'transparent' } },
    { icon: './assets/tech-icons/antd.png', text: 'AntD', style: { background: 'transparent' } },
  ],
  [
    { icon: './assets/tech-icons/nodejs.png', text: 'Node js', style: { background: 'transparent' } },
    { icon: './assets/tech-icons/mongoose.png', text: 'Mongoose', style: { background: 'transparent' } },
    { icon: './assets/tech-icons/typeorm.png', text: 'Typeorm', style: { background: 'transparent' } },
  ],
  [
    { icon: './assets/tech-icons/mysql.png', text: 'MySql', style: { background: 'transparent' } },
    { icon: './assets/tech-icons/mongodb-icon-1.svg', text: 'Mongodb', style: { background: 'transparent' } },
    { icon: './assets/tech-icons/postgres.png', text: 'PostgreSQL ', style: { background: 'transparent' } },
  ],
  [
    { icon: './assets/tech-icons/express-js.png', text: 'express', style: { background: 'transparent' } },
    { icon: './assets/tech-icons/nestjs.png', text: 'nestjs', style: { background: '#171a1c' } },
    { icon: './assets/tech-icons/fastify.png', text: 'Fastify ', style: { background: 'transparent' } },
  ],
];

export const formAwsList = () => {
  return (
    <ul>
      <li>
        <p className="common-sub-header">Amazon EC2:</p> Provision and manage virtual servers to host your web
        applications with scalability and flexibility.
      </li>
      <li>
        <p className="common-sub-header">Amazon RDS:</p>Utilize managed database services for MySQL and PostgreSQL to
        ensure high availability, durability, and performance.
      </li>
      <li>
        <p className="common-sub-header">Amazon S3:</p>Store and retrieve data at any scale with industry-leading object
        storage, ensuring security and compliance.
      </li>
      <li>
        <p className="common-sub-header">Amazon API Gateway: </p>Build, deploy, and manage APIs with ease, enabling
        seamless integration with your web applications.
      </li>
      <li>
        <p className="common-sub-header"> Amazon CloudFront:</p> Deliver content with low latency and high transfer
        speeds using a global content delivery network (CDN).
      </li>
      <li>
        <p className="common-sub-header">AWS Lambda:</p>Run code without provisioning or managing servers, allowing for
        cost-effective and scalable execution of backend logic.
      </li>
      <li>
        <p className="common-sub-header">Amazon SES (Simple Email Service):</p>
        Send transactional and marketing emails reliably and at scale to engage with your users.
      </li>
      <li>
        <p className="common-sub-header">Amazon SNS (Simple Notification Service):</p> Send notifications to users or
        other services via email, SMS, or push notifications.
      </li>
      <li>
        <p className="common-sub-header">Amazon SQS (Simple Queue Service):</p> Decouple and scale microservices,
        distributed systems, and serverless applications.
      </li>
      <li>
        <p className="common-sub-header"> Amazon DynamoDB:</p> A fast and flexible NoSQL database service for all
        applications that need consistent, single-digit millisecond latency at any scale.
      </li>
      <li>
        <p className="common-sub-header">Amazon Route 53:</p>Scalable DNS web service to route traffic to your web
        applications with high availability and reliability.
      </li>
      <li>
        <p className="common-sub-header">Amazon Cognito:</p>Provide authentication, authorization, and user management
        for your web applications with ease.
      </li>
    </ul>
  );
};

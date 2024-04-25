const discovery = () => {
  return (
    <>
      <div className="header common-header">Working Process: Discovery Phase</div>
      <div className="objective item common-text">
        <p className="common-sub-header">Objective:</p> The discovery phase is the initial stage of the project where
        the team collaborates with stakeholders to understand the project requirements, define goals, and establish a
        clear direction for development.
      </div>
      <div className="activities item">
        <p className="common-sub-header">Activities:</p>
        <ol className="common-text">
          <li>
            <p>Requirement Gathering:</p> Conduct meetings with stakeholders to gather detailed requirements. Document
            business objectives, user stories, and functional specifications.
          </li>
          <li>
            <p>Market Research:</p>
            Analyze competitors and market trends to identify opportunities and challenges.
          </li>
          <li>
            <p>Stakeholder Interviews:</p>
            Interview key stakeholders to understand their perspectives, expectations, and concerns.
          </li>
          <li>
            <p>Feasibility Study:</p>
            Assess the technical feasibility of the project and identify potential risks.
          </li>
          <li>
            <p>Scope Definition:</p>
            Define project scope, including deliverables, timelines, and budget.
          </li>
        </ol>
      </div>
      <div className="deliverables item">
        <p className="common-sub-header">Deliverables:</p>
        <ul className="common-text">
          <li>Requirements Document</li>
          <li>Project Scope Document</li>
          <li>Feasibility Report</li>
          <li>Stakeholder Interview Summaries</li>
          <li> Competitor Analysis Report</li>
        </ul>
      </div>
    </>
  );
};

const architecture = () => {
  return (
    <>
      <div className="header common-header">Working Process: Creating the Architecture</div>
      <div className="objective item common-text">
        <p className="common-sub-header">Objective:</p> The architecture phase involves designing the overall structure
        of the system, including the software, hardware, and infrastructure components.
      </div>
      <div className="activities item ">
        <p className="common-sub-header">Activities:</p>
        <ol className="common-text">
          <li>
            <p>System Design: </p> Define the high-level architecture, including components, modules, and their
            interactions.
          </li>
          <li>
            <p>Technology Selection: </p>
            Choose appropriate technologies, frameworks, and tools based on project requirements and constraints.
          </li>
          <li>
            <p>Data Modeling: </p>
            Design database schema and define data storage and retrieval mechanisms.
          </li>
          <li>
            <p>Infrastructure Planning: </p>
            Determine the hosting environment, scalability requirements, and deployment architecture.
          </li>
          <li>
            <p>Security Planning:</p>
            Identify potential security risks and implement measures to mitigate them.
          </li>
        </ol>
      </div>
      <div className="deliverables item">
        <p className="common-sub-header">Deliverables:</p>
        <ul className="common-text">
          <li>System Architecture Diagram</li>
          <li>Technology Stack Documentation</li>
          <li>Database Schema</li>
          <li>Infrastructure Setup Guide</li>
          <li>Security Plan</li>
        </ul>
      </div>
    </>
  );
};
const developing = () => {
  return (
    <>
      <div className="header common-header">Working Process: Developing</div>
      <div className="objective item common-text ">
        <p className="common-sub-header">Objective:</p> The development phase involves writing code, building features,
        and integrating components according to the defined architecture and requirements.
      </div>
      <div className="activities item">
        <p className="common-sub-header">Activities:</p>
        <ol className="common-text">
          <li>
            <p>Coding: </p>Write clean, modular code using best practices and coding standards.
          </li>
          <li>
            <p>Feature Implementation: </p>
            Develop individual features and functionalities based on user stories and specifications.
          </li>
          <li>
            <p>Code Reviews: </p>
            Conduct code reviews to ensure code quality, adherence to standards, and maintainability.
          </li>
          <li>
            <p>Continuous Integration: </p>
            Integrate code changes regularly and automate testing and deployment processes.
          </li>
          <li>
            <p>Collaboration:</p>
            Foster collaboration among team members through regular communication and coordination.
          </li>
        </ol>
      </div>
      <div className="deliverables item">
        <p className="common-sub-header">Deliverables:</p>
        <ul className="common-text">
          <li>Source Code Repository</li>
          <li>Feature Implementation Reports</li>
          <li>Code Review Feedback</li>
          <li>Continuous Integration Setup</li>
          <li>Team Collaboration Guidelines</li>
        </ul>
      </div>
    </>
  );
};
const testing = () => {
  return (
    <>
      <div className="header common-header">Working Process: Testing</div>
      <div className="objective item common-text">
        <p className="common-sub-header"> Objective:</p> The testing phase involves validating the functionality,
        performance, and usability of the system to ensure it meets the defined requirements and quality standards.
      </div>
      <div className="activities item">
        <p className="common-sub-header">Activities:</p>
        <ol className="common-text">
          <li>
            <p>Test Planning: </p>Develop a comprehensive test plan outlining test scenarios, test cases, and testing
            strategies.
          </li>
          <li>
            <p>Unit Testing: </p>
            Write and execute unit tests to validate individual components and functions.
          </li>
          <li>
            <p>Integration Testing: </p>
            Test the integration of various modules and components to ensure interoperability.
          </li>
          <li>
            <p>System Testing: </p>
            Conduct end-to-end testing to validate the entire system's functionality and user experience.
          </li>
          <li>
            <p>Performance Testing:</p>
            Measure system performance under different load conditions and optimize as necessary.
          </li>
        </ol>
      </div>
      <div className="deliverables item">
        <p className="common-sub-header">Deliverables:</p>
        <ul className="common-text">
          <li>Test Plan Document</li>
          <li>Test Cases and Scenarios</li>
          <li>Test Execution Reports</li>
          <li>Performance Test Results</li>
          <li>Bug Reports and Issue Tracking</li>
        </ul>
      </div>
    </>
  );
};
const deployment = () => {
  return (
    <>
      <div className="header common-header">Working Process: Deployment</div>
      <div className="objective item common-text">
        <p className="common-sub-header">Objective:</p> The deployment phase involves deploying the application to the
        production environment and making it available to end-users.
      </div>
      <div className="activities item">
        <p className="common-sub-header">Activities:</p>
        <ol className="common-text">
          <li>
            <p>Environment Setup: </p>Configure the production environment, including servers, databases, and
            networking.
          </li>
          <li>
            <p>Deployment Automation: </p>
            Automate the deployment process to streamline releases and minimize downtime.
          </li>
          <li>
            <p>Rollout Strategy: </p>
            Define a rollout strategy, such as phased deployment or blue-green deployment, to minimize risk.
          </li>
          <li>
            <p>Monitoring Setup: </p>
            Implement monitoring tools and alerts to track system performance and availability post-deployment.
          </li>
          <li>
            <p>User Training:</p>
            Provide training and documentation to end-users to ensure a smooth transition to the new system.
          </li>
        </ol>
      </div>
      <div className="deliverables item">
        <p className="common-sub-header">Deliverables:</p>
        <ul className="common-text">
          <li>Deployment Plan</li>
          <li>Deployment Automation Scripts</li>
          <li>Rollout Strategy Documentation</li>
          <li>Monitoring Setup Guide</li>
          <li>User Training Materials</li>
        </ul>
      </div>
    </>
  );
};
const maintenance = () => {
  return (
    <>
      <div className="header common-header">Working Process: Maintenance</div>
      <div className="objective item common-text">
        <p className="common-sub-header">Objective:</p>The support and maintenance phase involves ongoing monitoring,
        troubleshooting, and updates to ensure the system remains secure, stable, and functional.
      </div>
      <div className="activities item">
        <p className="common-sub-header">Activities:</p>
        <ol className="common-text">
          <li>
            <p>Monitoring and Alerting:</p>Continuously monitor system performance, availability, and security alerts.
          </li>
          <li>
            <p>Issue Resolution: </p>Address and resolve reported issues and bugs in a timely manner.
          </li>
          <li>
            <p>Patch Management: </p>
            Apply security patches and updates to system components and dependencies.
          </li>
          <li>
            <p>Performance Optimization:</p>
            Identify and optimize performance bottlenecks to improve system efficiency.
          </li>
          <li>
            <p>Feedback Collection: </p>
            Implement monitoring tools and alerts to track system performance and availability post-deployment.
          </li>
        </ol>
      </div>
      <div className="deliverables item">
        <p className="common-sub-header">Deliverables:</p>
        <ul className="common-text">
          <li>Monitoring and Alerting Reports</li>
          <li>Issue Resolution Logs</li>
          <li>Patch Management Schedule</li>
          <li>Performance Optimization Recommendations</li>
          <li>User Feedback Analysis</li>
        </ul>
      </div>
    </>
  );
};

export const stepsFunctions = {
  'item-1': discovery,
  'item-2': architecture,
  'item-3': developing,
  'item-4': testing,
  'item-5': deployment,
  'item-6': maintenance,
};

// [(discovery, architecture, developing, testing, deployment, maintenance)];

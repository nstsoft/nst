import "./index.scss";
export function AboutUs() {
  return (
    <div className="AboutUs">
      <h1 className="SectionHeader">About Us</h1>
      <div className="aboutUsBody">
        <div className="content">
          <div className="text">
            Welcome to our IT company, where we are passionate about web
            development using JavaScript. Our team of experts is dedicated to
            creating innovative and efficient solutions for our clients. At our
            company, we pride ourselves on our attention to detail, creativity,
            and commitment to delivering high-quality results. We believe in
            staying ahead of the curve, constantly learning and adapting to the
            ever-changing technology landscape.
          </div>
        </div>
        <div className="aboutUsImage">
          <div className="background"></div>
          <div className="blur-overlay"></div>
          {/* <img src="../../../assets/monitor.jpg" /> */}
        </div>
      </div>
    </div>
  );
}

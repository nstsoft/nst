import { ReactNode } from "react";
import "./index.scss";

// Define the type for the children prop
interface ChildComponentProps {
  children: ReactNode;
}

export const Layout: React.FC<ChildComponentProps> = ({ children }) => {
  return (
    <div className="SubHeader">
      <div className="image-background">
        <img src="./assets/code.jpg" className="background" />

        <div className="title">
          <p>
            <h1 className="nst">NST</h1>
            <h1 className="soft">soft</h1>
          </p>

          <h4>Empowering Growth Through Customized Web Solutions" </h4>
          {/*We're passionate about crafting digital experiences that leave a lasting
          impression. As a leading web development company, we blend creativity
          with cutting-edge technology to deliver exceptional solutions tailored
          to your unique needs. */}
        </div>
      </div>
      <section>{children}</section>
    </div>
  );
};

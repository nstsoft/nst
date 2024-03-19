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
        <img src="./assets/staff.jpeg" className="background" />

        <h1 className="title">
          We're passionate about crafting digital experiences that leave a
          lasting impression. As a leading web development company, we blend
          creativity with cutting-edge technology to deliver exceptional
          solutions tailored to your unique needs.
        </h1>
      </div>
      <section>{children}</section>
    </div>
  );
};

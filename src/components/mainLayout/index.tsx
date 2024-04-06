import { ReactNode, FC } from "react";
import "./index.scss";

// Define the type for the children prop
interface ChildComponentProps {
  children: ReactNode;
}

export const Layout: FC<ChildComponentProps> = ({ children }) => {
  return (
    <div className="CONTENT">
      <div className="image-background">
        <img src="./assets/bytes.jpg" className="background" />

        <div className="title">
          <p>
            <h1 className="nst proxima-h">NST</h1>
            <h1 className="soft proxima-h">soft</h1>
          </p>

          <h4>Empowering Growth Through Customized Web Solutions </h4>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

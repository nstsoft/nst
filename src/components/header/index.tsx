import { Layout, Menu } from "antd";
import "./index.scss";
const { Header: AntDHeader } = Layout;

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <AntDHeader className="Header">
      <div className="logo">
        <img width={50} src="./assets/transparent_full.png" />
      </div>
      <Menu
        theme="dark"
        className="Menu"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px", width: "300px" }}
      >
        <Menu.Item key="1">
          <a href="#about-us" onClick={() => scrollToSection("AboutUs")}>
            About us
          </a>
        </Menu.Item>

        <Menu.Item key="2" onClick={() => scrollToSection("Services")}>
          Services
        </Menu.Item>
        <Menu.Item key="3" onClick={() => scrollToSection("ContactUs")}>
          Contacts
        </Menu.Item>
      </Menu>
    </AntDHeader>
  );
}

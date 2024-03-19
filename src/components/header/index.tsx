import { Layout, Menu } from "antd";
import "./index.scss";
const { Header: AntDHeader } = Layout;

export function Header() {
  return (
    <AntDHeader className="Header">
      <div className="logo">
        <img width={50} src="./assets/transparent_full.png" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <a href="#about-us">About us</a>
        </Menu.Item>
        <Menu.Item key="2">Testimonials</Menu.Item>
        <Menu.Item key="3">Contacts</Menu.Item>
      </Menu>
    </AntDHeader>
  );
}

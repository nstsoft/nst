import "./index.scss";
const { Header: AntDHeader } = Layout;
import { MenuOutlined } from "@ant-design/icons";

import { Row, Col, Layout, Menu } from "antd";

export function Header() {
  const gotoPage = (s: any) => {
    console.log("dddd", s);
  };

  return (
    <Row justify="center">
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <AntDHeader className="header-fixed Header">
          <Row>
            <Col xl={12} lg={12} md={12} sm={22} xs={22}>
              <div className="logo">
                <img width={50} src="./assets/transparent_full.png" />
              </div>
            </Col>
            <Col xl={12} lg={12} md={12} sm={2} xs={2}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["item1"]}
                overflowedIndicator={<MenuOutlined />}
                className="header-menu Menu"
              >
                <Menu.Item key="item1" onClick={() => gotoPage("item1")}>
                  About us
                </Menu.Item>
                <Menu.Item key={"item2"} onClick={() => gotoPage("item2")}>
                  Services
                </Menu.Item>
                <Menu.Item key={"item3"} onClick={() => gotoPage("item3")}>
                  Contact us
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </AntDHeader>
      </Col>
    </Row>
  );
  // return (
  //   <AntDHeader className="Header">
  //     <div className="logo">
  //       <img width={50} src="./assets/transparent_full.png" />
  //     </div>
  //     <Menu
  //       theme="dark"
  //       className="Menu"
  //       mode="horizontal"
  //       defaultSelectedKeys={["1"]}
  //     >
  //       <Menu.Item key="1">
  //         <a href="#about-us" onClick={() => scrollToSection("AboutUs")}>
  //           About us
  //         </a>
  //       </Menu.Item>

  //       <Menu.Item key="2" onClick={() => scrollToSection("Services")}>
  //         Services
  //       </Menu.Item>
  //       <Menu.Item key="3" onClick={() => scrollToSection("ContactUs")}>
  //         Contacts
  //       </Menu.Item>
  //     </Menu>
  //   </AntDHeader>
  // );
}

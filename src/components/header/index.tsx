import './index.scss';
import { MenuOutlined } from '@ant-design/icons';
import { Row, Col, Layout, Menu } from 'antd';

const { Header: AntDHeader } = Layout;

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Row justify="center">
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <AntDHeader className="header-fixed Header">
          <Row className="header-row">
            <Col xl={5} lg={5} md={5} sm={5} xs={22}>
              <div className="logo">
                <img width={50} src="./assets/transparent_full.png" />
              </div>
            </Col>
            <Col xl={16} lg={16} md={16} sm={2} xs={2}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['item1']}
                overflowedIndicator={<MenuOutlined />}
                className="header-menu Menu"
              >
                <Menu.Item key="item1" onClick={() => scrollToSection('about-us')}>
                  About us
                </Menu.Item>
                <Menu.Item key={'item2'} onClick={() => scrollToSection('why-we')}>
                  Why We
                </Menu.Item>
                <Menu.Item key={'item3'} onClick={() => scrollToSection('services')}>
                  Services
                </Menu.Item>
                <Menu.Item key={'item4'} onClick={() => scrollToSection('technologies')}>
                  Technologies
                </Menu.Item>
                <Menu.Item key={'item5'} onClick={() => scrollToSection('process')}>
                  Developing process
                </Menu.Item>
                <Menu.Item key={'item6'} onClick={() => scrollToSection('our-works')}>
                  Our works
                </Menu.Item>
                <Menu.Item key={'item7'} onClick={() => scrollToSection('contact-us')}>
                  Contact us
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </AntDHeader>
      </Col>
    </Row>
  );
}

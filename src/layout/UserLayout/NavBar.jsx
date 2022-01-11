import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Avatar, Row, Col, Typography, Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { SubMenu } = Menu;
const { Header } = Layout;

export default function NavBar({ collapsed, toggle }) {
  const navigate = useNavigate();
  return (
    <Header className="site-layout-background" style={{ paddingLeft: "5px" }}>
      <Row justify="space-between" align="middle">
        <Col sm={2} xl={16}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Col>

        <Col sm={6} xl={3}>
          <Menu mode="horizontal">
            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Settings">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting1">Option 1</Menu.Item>
                <Menu.Item key="setting2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting3">Option 3</Menu.Item>
                <Menu.Item key="setting4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Col>
        <Col sm={6} xl={3}>
          <div className="NavCol">
            <Title level={5}>TekBoox</Title>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          </div>
        </Col>

        <Col sm={6} xl={2}>
          <div
            className="NavCol"
            onClick={() => {
              navigate("/");
            }}
          >
            <Title level={5}>Logout</Title>
            <LogoutOutlined />
          </div>
        </Col>
      </Row>
    </Header>
  );
}

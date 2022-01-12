import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Layout } from "antd";
import { UserOutlined, SettingOutlined, HomeOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
export default function SideBar({ collapsed }) {
  return (
    <div>
      <div className="siderlogo" />
      <Menu mode="inline" defaultSelectedKeys={["Home"]}>
        <Menu.Item key="Home" icon={<HomeOutlined />}>
          <Link to="home">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="users">Users</Link>
        </Menu.Item>
        <SubMenu
          key="SettingSubMenu"
          icon={<SettingOutlined />}
          title="Settings"
        >
          <Menu.Item key="sub1">
            <Link to="settings/email-setting">Email Setting</Link>
          </Menu.Item>
          <Menu.Item key="sub2">
            <Link to="settings/sms-config">SMS Setting</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

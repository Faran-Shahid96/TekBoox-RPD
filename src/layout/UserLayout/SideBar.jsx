import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Layout } from "antd";
import {
  UserOutlined,
  UploadOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
export default function SideBar({ collapsed }) {
  return (
    <div >
        <div className="siderlogo" />
        <Menu  mode="inline" defaultSelectedKeys={["Home"]}>
          <Menu.Item key="Home" icon={<HomeOutlined />}>
            <Link to="home">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="users">Users</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <SubMenu key="submenu1" icon={<UserOutlined />} title="SubMenu 1">
            <Menu.Item key="sub1">option1</Menu.Item>
            <Menu.Item key="sub2">option2</Menu.Item>
            <Menu.Item key="sub3">option3</Menu.Item>
            <Menu.Item key="sub4">option4</Menu.Item>
          </SubMenu>
        </Menu>
    </div>
  );
}

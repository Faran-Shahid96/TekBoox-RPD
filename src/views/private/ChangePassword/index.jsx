import React from "react";
import { Card, Form, Input, Button, Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";
const { Title } = Typography;
export default function index() {
  const onSubmitForm = (values) => {
    return null;
  };
  return (
    <div>
      <Title level={4}>
        <SettingOutlined />
        Change Password
      </Title>
      <Card hoverable={true} style={{ width: 550 }}>
        <Form
          name="ChangePasswordForm"
          layout="horizontal"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 16 }}
          onFinish={onSubmitForm}
        >
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label=" Confirm Password"
            name="confrimpassword"
            rules={[
              {
                required: true,
                message: "Please input Confirm Password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Confirm
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

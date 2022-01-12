import React from "react";
import { Card, Form, Input, Button, Typography, Switch } from "antd";
import { SaveOutlined, SettingOutlined } from "@ant-design/icons";
const { Title } = Typography;
export default function EmailConfigSetting({ formData }) {
  const onSubmitForm = (values) => {
    return null;
  };

  return (
    <div>
      <Title level={4}>
        <SettingOutlined />
        EMAIL CONFIGURATION
      </Title>
      <Card hoverable={true} style={{ width: 600 }}>
        <Form
          name="EmailSettingForm"
          layout="horizontal"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          /*  initialValues={{
          name: formData?.hostname,
          display_name: formData?.display_name,
          description: formData?.description,
        }} */
          onFinish={onSubmitForm}
        >
          <Form.Item
            label="Host Name"
            name="hostname"
            rules={[
              {
                required: true,
                message: "Please input Host Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Port No."
            name="display_name"
            rules={[
              {
                required: true,
                message: "Please input Port No.!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Sender Email"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input Sender Email!",
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Sender Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input Sender Password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Recipient Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input Recipient Email",
                type: "email",
              },
            ]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item label="SSL" name="SSL" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

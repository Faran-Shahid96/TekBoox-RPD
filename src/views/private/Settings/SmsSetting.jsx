import React from "react";
import { Card, Form, Input, Button, Typography } from "antd";
import { SaveOutlined, SettingOutlined } from "@ant-design/icons";
const { Title } = Typography;
export default function SmsSetting({ formData }) {
  const onSubmitForm = (values) => {
    return null;
  };

  return (
    <div>
      <Title level={4}>
        <SettingOutlined />
        SMS CONFIGURATION SETTINGS
      </Title>
      <Card hoverable={true} style={{ width: 600 }}>
        <Form
          name="SmsSettingForm"
          layout="horizontal"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 16 }}
          /*  initialValues={{
          name: formData?.hostname,
          display_name: formData?.display_name,
          description: formData?.description,
        }} */
          onFinish={onSubmitForm}
        >
          <Form.Item
            label="SMSAPI Key"
            name="hostname"
            rules={[
              {
                required: true,
                message: "Please input SMSAPI Key!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="SMSAPI Secret"
            name="display_name"
            rules={[
              {
                required: true,
                message: "Please input SMSAPI Secret!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="SMSFrom Number"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input SMSFrom Number!",
              },
            ]}
          >
            <Input />
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

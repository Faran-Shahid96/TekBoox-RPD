import React from "react";
import { Card, Form, Input, Button } from "antd";
const { TextArea } = Input;
export default function EmailSetting({ formData }) {
  const onSubmitForm = (values) => {
    return null;
  };

  return (
    <div>
      <Card hoverable={true}>
        <Form
          name="RoleForm"
          layout="vertical"
          initialValues={{
            name: formData?.hostname,
            display_name: formData?.display_name,
            description: formData?.description,
          }}
          onFinish={onSubmitForm}
        >
          <Form.Item
            label="hostname"
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
            label="Role Display Name"
            name="display_name"
            rules={[
              {
                required: true,
                message: "Please input Role Display Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Role Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input Role Description!",
              },
            ]}
          >
            <TextArea rows={3} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

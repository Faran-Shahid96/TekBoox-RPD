import React from "react";
import { Card, Form, Input, Button } from "antd";
const { TextArea } = Input;
function AddUpdateRole({ formData, AddRole, UpdateRole }) {
  const onSubmitForm = (values) => {
    if (formData?.id) {
      UpdateRole(formData?.id, values);
      console.log("update", values);
    } else {
      AddRole(values);
      console.log("add", values);
    }
  };

  return (
    <Card hoverable={true}>
      <Form
        name="RoleForm"
        layout="vertical"
        initialValues={{
          name: formData?.name,
          display_name: formData?.display_name,
          description: formData?.description,
        }}
        onFinish={onSubmitForm}
      >
        <Form.Item
          label="Role Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input Role Name!",
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
  );
}
export default AddUpdateRole;

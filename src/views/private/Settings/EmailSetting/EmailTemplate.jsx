import React, { useEffect, useState } from "react";
import TextEditor from "../../../../components/TextEditor";
import { Card, Form, Input, Button, Typography, Select } from "antd";
import { SaveOutlined, SettingOutlined } from "@ant-design/icons";
import { EditorState, convertToRaw, ContentState } from "draft-js";

import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
const { Title } = Typography;
const { Option } = Select;
export default function EmailTemplate({ formData }) {
  const [form] = Form.useForm();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    HtmlToEditor();
  }, []);

  const HtmlToEditor = (
    html = "<p>Hey this <strong>editor</strong> rocks 😀</p>"
  ) => {
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  };
  const onSubmitForm = (values) => {
    return null;
  };
  const onCheck = async () => {
    try {
      const values = await form.getFieldValue();
      const editorText = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );
      if (editorText != "" && editorText != "<p></p>\n") {
        values.EmailBody = editorText;
      } else {
        values.EmailBody = undefined;
      }
      console.log("Success:", values);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  return (
    <div>
      <Title level={4}>
        <SettingOutlined />
        EMAIL TEMPLATE
      </Title>
      <Card hoverable={true} style={{ width: 700 }}>
        <Form
          form={form}
          name="EmailTemplate"
          layout="horizontal"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
          /*  initialValues={{
          name: formData?.hostname,
          display_name: formData?.display_name,
          description: formData?.description,
        }} */
          onFinish={onSubmitForm}
        >
          <Form.Item
            label="Template Name"
            name="hostname"
            rules={[
              {
                required: true,
                message: "Please input Template Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Subject"
            name="display_name"
            rules={[
              {
                required: true,
                message: "Please input Subject!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Token"
            name="description"
            rules={[
              {
                required: true,
                message: "Please select Token!",
              },
            ]}
          >
            <Select placeholder="Please select a Token">
              <Option value="112233rre">112233rr</Option>
              <Option value="aaaaaa">ggfgfgf</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Email Body"
            name="EmailBody"
            rules={[
              {
                required: true,
                message: "Please input Email Body!",
              },
            ]}
          >
            <TextEditor
              editorState={editorState}
              setEditorStateHandle={setEditorState}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
              onClick={onCheck}
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

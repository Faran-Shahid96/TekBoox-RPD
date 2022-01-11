import React from "react";
import { Row, Col, Card, Form, Input, Button, Typography, message } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import "./Login.scss";

const { Title } = Typography;

export default function ForgetPassword() {
  const onFinish = async (values) => {
    try {
      if (values.email == values.confrimEmail) {
      } else {
        message.error("Email does not Matched!");
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <Row justify="center" align="middle" style={{ width: "80%" }} id="Login">
      <Card id="loginCard">
        <Row gutter={100}>
          <Col sm={10}>
            <figure className="d-flex">
              <img src={Logo} className="m-auto" />
            </figure>
          </Col>
          <Col sm={14}>
            <Title level={2}>Forget Password</Title>
            <Form
              layout="vertical"
              name="normal_login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>
              <Form.Item
                label="Confrim Email"
                name="confrimEmail"
                rules={[
                  {
                    required: true,
                    message: "Please Confrim Email!",
                  },
                ]}
              >
                <Input.Password prefix={<MailOutlined />} />
              </Form.Item>
              <Row>
                <Col span={12}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Col>
                <Col span={12} style={{ textAlign: "right" }}>
                  <Link to="/">Go Back?</Link>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
    </Row>
  );
}

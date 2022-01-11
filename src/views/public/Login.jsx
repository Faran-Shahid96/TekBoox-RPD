import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../core/redux/Slices/UserSlice";
import { Row, Col, Card, Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import "./Login.scss";
import { UserLogin } from "../../core/utilities/apis/PublicApis";

const { Title } = Typography;

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);
  const onFinish = async (values) => {
    try {
      const result = await UserLogin(values);
      const token = result?.response?.data?.access_token;

      if (result?.status == 200 && token) {
        const userObj = JSON.parse(atob(token.split(".")[1]));
        userObj.token = token;
        dispatch(login(userObj));
        navigate("home");
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
            <Title level={2}>Login to Continue</Title>
            <Form
              layout="vertical"
              name="normal_login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                label="UserName"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password prefix={<LockOutlined />} />
              </Form.Item>
              <Row>
                <Col span={12}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Log in
                    </Button>
                    <br />
                    Or <a href="">register now!</a>
                  </Form.Item>
                </Col>
                <Col span={12} style={{ textAlign: "right" }}>
                  <Link to="forgetpassword">Forgot password?</Link>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
    </Row>
  );
}

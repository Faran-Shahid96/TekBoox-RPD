import React from "react";
import { Row, Col } from "antd";
import Roles from "./Roles";
export default function index() {
  return (
    <Row gutter={[16, 24]}>
      <Col span={24}>
        <Roles />
      </Col>
    </Row>
  );
}

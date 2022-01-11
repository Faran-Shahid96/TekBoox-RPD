import React from "react";
import { Row, Col, Modal } from "antd";
export default function index({ isModalVisible, title, component, onHide }) {
  return (
    <Modal
      destroyOnClose={true}
      title={title}
      visible={isModalVisible}
      onCancel={onHide}
      footer={null}
    >
      <Row style={{ justifyContent: "center" }}>
        <Col xs={24} xl={22}>
          {component}
        </Col>
      </Row>
    </Modal>
  );
}

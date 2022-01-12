import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Skeleton,
  Popconfirm,
  message,
  Typography,
} from "antd";
import RoleForm from "./AddUpdateRole.jsx";
import Modal from "../../../../components/Modal";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import {
  getRoles,
  AddRoles,
  UpdateRoles,
  DeleteRole,
} from "../../../../core/utilities/apis/PrivateApis/RolesApi.js";
const { Title } = Typography;

function Roles() {
  const [rolesData, SetRolesData] = useState([]);
  const [loadingData, SetLoadingData] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [roleFormData, setRoleFormData] = useState(null);

  const GetRoleFun = () => {
    try {
      getRoles().then((res) => {
        SetLoadingData(false);
        SetRolesData(res?.response?.data);
      });
    } catch (EX) {
      console.log("Get Role Exception", EX);
    }
  };
  const AddRoleFun = (values) => {
    try {
      AddRoles(values).then((res) => {
        message.success(res?.response?.meta?.message);
        onHideModal();
        SetLoadingData(true);
        GetRoleFun();
      });
    } catch (EX) {
      console.log("Add Roles Exception", EX);
    }
  };
  const UpdateRoleFun = (id, values) => {
    try {
      UpdateRoles(id, values).then((res) => {
        message.success(res?.response?.meta?.message);
        onHideModal();
        SetLoadingData(true);
        GetRoleFun();
      });
    } catch (EX) {
      console.log("Update Roles Exception", EX);
    }
  };
  const DeleteRoleFun = (id) => {
    try {
      DeleteRole(id).then((res) => {
        message.success(res?.response?.meta?.message);
        SetLoadingData(true);
        GetRoleFun();
      });
    } catch (EX) {
      console.log("DeleteRole Exception", EX);
    }
  };
  const onHideModal = () => {
    setRoleFormData(null);
    setModalShow(false);
  };

  useEffect(() => {
    GetRoleFun();
  }, []);

  return (
    <>
      <Row gutter={16}>
        <Col xs={24}>
          <Title level={3}>
            <PlusCircleOutlined
              style={{ position: "relative", top: "-5px" }}
              className="ico-lg-left"
              onClick={() => {
                setModalShow(true);
              }}
            />
            Roles
          </Title>
          <Card>
            <Row gutter={16}>
              <Skeleton loading={loadingData} active>
                {rolesData.length > 0 &&
                  rolesData.map((item) => (
                    <Col key={item?.id}>
                      <Card
                        hoverable={true}
                        title={item?.display_name}
                        style={{ width: 230, marginTop: 16 }}
                        actions={[
                          <EditOutlined
                            key="edit"
                            onClick={(event) => {
                              event.stopPropagation();
                              setRoleFormData(item);
                              setModalShow(true);
                            }}
                          />,
                          <Popconfirm
                            placement="bottom"
                            title={"Are you sure to delete this Role?"}
                            okText="Yes"
                            cancelText="No"
                            onConfirm={() => DeleteRoleFun(item?.id)}
                          >
                            <DeleteOutlined key="delete" />
                          </Popconfirm>,
                          <KeyOutlined
                            key="permission"
                            onClick={(event) => {
                              event.stopPropagation();
                            }}
                          />,
                        ]}
                      >
                        {item?.description}
                      </Card>
                    </Col>
                  ))}
              </Skeleton>
            </Row>
          </Card>
        </Col>
      </Row>
      <Modal
        isModalVisible={modalShow}
        title={"Role Form"}
        component={
          <RoleForm
            formData={roleFormData}
            AddRole={AddRoleFun}
            UpdateRole={UpdateRoleFun}
          />
        }
        onHide={onHideModal}
      />
    </>
  );
}

export default Roles;

import React from "react";
import EmailConfigSetting from "./EmailConfigSetting";
import EmailTemplate from "./EmailTemplate";
import { Tabs } from "antd";
const { TabPane } = Tabs;
export default function Index() {
  return (
    <div>
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="EMAIL CONFIGURATION" key="1">
          <EmailConfigSetting />
        </TabPane>
        <TabPane tab="EMAIL TEMPLATE" key="2">
          <EmailTemplate />
        </TabPane>
      </Tabs>
    </div>
  );
}

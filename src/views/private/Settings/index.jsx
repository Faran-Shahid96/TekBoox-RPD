import React from "react";
import { Tabs } from "antd";
import Box from "@mui/material/Box";
import EmailSetting from "./EmailSetting";
const { TabPane } = Tabs;
export default function index() {
  return (
    <div>
      <Box
        sx={{
          padding: 4,
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
        }}
      >
        <Tabs tabPosition="left">
          <TabPane tab="Tab 1" key="1">
            <EmailSetting />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </Box>
    </div>
  );
}

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
// import DashboardLayout from './Layout';
import SeatPlan from './SeatPlan';
import Settings from './Settings';
import Courses from './Courses';
import { CalendarMonth, DashboardCustomize, EventSeatOutlined, RoomPreferences, SettingsOutlined, SubjectOutlined } from '@mui/icons-material';
import Rooms from './Rooms';
import DateSheet from './DateSheet';
import DashboardHome from './DashboardHome';

const { Header, Sider, Content } = Layout;
const Adminlayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey,setSelectedKey] = useState()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const Component = {
     '1': <DashboardHome/>,
     '2':< Courses/>,
     '3':<Rooms/>,
  '4': < SeatPlan />,
  '5':<DateSheet/>,
  '6': <Settings />,
  
  }
  const items = [
            {
              key: '1',
              icon: <DashboardCustomize/>,
              label: 'Home',
            },
            {
              key: '2',
              icon: <SubjectOutlined />,
              label: 'Courses',
            },
            {
              key: '3',
              icon: <RoomPreferences />,
              label: 'Rooms',
            },
            {
              key: '4',
              icon: <EventSeatOutlined/>,
              label: 'Seat Plan',
            },
            {
              key: '5',
              icon: <CalendarMonth/>,
              label: 'Datesheet',
            }, {
              key: '7',
              icon: <SettingsOutlined/>,
              label: 'Settings',
            },
          ]
  return (
    <>
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
          onClick={(e)=>{
            console.log("items",e?.key)
            setSelectedKey(e?.key)
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {Component[selectedKey]}
        </Content>
      </Layout>
    </Layout>


    </>
  )
}

export default Adminlayout
import React from 'react';
import { Menu } from 'antd';
import { Layout } from 'antd';
import {
    UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout

const MainSider = ({ collapsed }) => {
    const navigate = useNavigate()

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<UserOutlined />} onClick={() => {
                    navigate('/dashboard')
                }}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />} onClick={() => {
                    navigate('/user')
                }}>
                    User
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default MainSider;
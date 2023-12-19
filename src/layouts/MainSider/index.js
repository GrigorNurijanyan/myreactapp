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

    const items = [
        {
            key: '/dashboard',
            icon: <UserOutlined />,
            label: 'Dashboard'
        },
        {
            key: '/category',
            icon: <UserOutlined />,
            label: 'Category'
        },
        {
            key: '/products/list',
            icon: <UserOutlined />,
            label: 'Products'
        },
    ]

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["/dashboard"]}
                items={items}
                onClick={(e) => {
                    navigate(e.key)
                }}
            />
        </Sider>
    );
};

export default MainSider;
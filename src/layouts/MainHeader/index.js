import React from 'react';
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";


const { Header } = Layout

const MainHeader = ({ collapsed, setCollapsed }) => {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className="trigger" onClick={() => {
                setCollapsed(!collapsed)
            }}>
                {
                    collapsed ?
                        <MenuUnfoldOutlined />
                        :
                        <MenuFoldOutlined />
                }
            </div>
        </Header>
    );
};

export default MainHeader;
import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MainSider from "../MainSider";
import MainHeader from "../MainHeader";
import styles from './MainLayout.module.css'
import MainFooter from "../MainFooter";

const { Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className={styles.main_layout}>
            <MainSider collapsed={collapsed} />
            <Layout className={styles.site_layout}>
                <MainHeader
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                />
                <Content
                    className={styles.site_layout_background}
                >
                    <Outlet />
                </Content>
                <MainFooter />
            </Layout>
        </Layout>
    );
};

export default MainLayout;

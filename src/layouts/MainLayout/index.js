import React from "react";
import { Layout } from "antd";
import MainSider from "../MainSider";
import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";
import { node, bool } from "prop-types";
import styles from './MainLayout.module.css'
import { connect } from "react-redux";

const { Content } = Layout;

const MainLayout = (props) => {
    return (
        <Layout className={styles.main_layout}>
            <MainSider collapsed={props.menuOpen} />
            <Layout className={styles.site_layout}>
                <MainHeader
                    collapsed={props.menuOpen}
                />
                <Content
                    className={styles.site_layout_background}
                >
                    {props.children &&
                        React.cloneElement(props.children, {
                            menuOpen: props.menuOpen,
                            ...props
                        })}
                </Content>
                {!props.footer && < MainFooter />}
            </Layout>
        </Layout>
    );
};

MainLayout.propsType = {
    children: node,
    footer: bool,
    menuOpen: bool,
}

const mapStateToProps = (state) => {
    const { menuOpen } = state
    return {
        menuOpen: menuOpen,
    }
}

export default connect(mapStateToProps, null)(MainLayout)

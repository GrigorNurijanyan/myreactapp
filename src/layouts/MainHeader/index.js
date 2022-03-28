import React from 'react';
import { Layout } from 'antd';
import reduxActions from '../../redux/reduxActions';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import styles from './MainHeader.module.css'


const { Header } = Layout

const MainHeader = ({ collapsed }) => {
    return (
        <Header className={styles.main_header}>
            <div style={{ cursor: 'pointer' }} className="trigger" onClick={() => {
                reduxActions.setMenuOpen(!collapsed)
            }}>
                {
                    collapsed ?
                        <MenuUnfoldOutlined style={{ fontSize: '20px' }} />
                        :
                        <MenuFoldOutlined style={{ fontSize: '20px' }} />
                }
            </div>
        </Header>
    );
};

export default MainHeader;
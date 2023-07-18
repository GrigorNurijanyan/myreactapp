import React from 'react';
import { Layout } from 'antd';
import reduxActions from '../../redux/reduxActions';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import styles from './MainHeader.module.css'
import i18n from '../../translation/languageInit';
import MainSelect from '../../components/Select';
import { useTranslation } from 'react-i18next';
import {
    SettingOutlined
} from '@ant-design/icons';

const { Header } = Layout

const MainHeader = ({ collapsed }) => {
    const { t } = useTranslation()

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
            <div className='language'>
                <MainSelect
                    options={[
                        {
                            label: t('English'),
                            value: 'en'
                        },
                        {
                            label: t('Armenian'),
                            value: 'hy'
                        }
                    ]}
                    onSelect={(value) => {
                        i18n.changeLanguage(value)
                    }}
                    prefixIcon={<SettingOutlined style={{ fontSize: '20px' }} />}
                />
            </div>
        </Header>
    );
};

export default MainHeader;
import React from 'react';
import PageCard from '../../components/Card/Card';
import FullPage from '../../components/FullPage/FullPage';
import componentStyles from '../../styles/Components.module.css';
import style from './Login.module.css';

const Login = (props) => {
    return (
        <FullPage className={`${componentStyles.d_flex_align_center} ${style.login_page}`}>
            <PageCard title={'Login'} span={6}>
                Body
            </PageCard>
        </FullPage>
    );
};

export default Login;
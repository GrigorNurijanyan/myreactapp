import React from 'react';
import PageCard from '../../components/Card/Card';
import FullPage from '../../components/FullPage/FullPage';
import componentStyles from '../../styles/Components.module.css';
import style from './Login.module.css';
import MainForm from '../../components/Forms/MainForm/MainForm';
import FormInput from '../../components/Forms/FormInput/FormInput';
import FormInputPassword from '../../components/Forms/FormInputPassword/FormInputPassword';
import MainButton from '../../components/Button/MainButton';
import { Form } from 'antd';
import { notifyError } from '../../components/Notify/Notify';
import { useNavigate } from 'react-router-dom';
import Center from '../../components/Center/Center';

const Login = (props) => {

    const [form] = Form.useForm()
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log("values=>", values);
        if (values.username === 'admin' && values.password === 'admin') {
            navigate('/dashboard')
        } else {
            notifyError('Please check your username or password')
        }
    }

    const onFinishFailed = (errorInfo) => {
        if (errorInfo.errorFields.length > 0) {
            console.log("Error");
        }
    }

    return (
        <FullPage className={`${componentStyles.d_flex_align_center} ${style.login_page}`}>
            <PageCard title={'Login'} span={6}>
                <MainForm
                    form={form}
                    name='formLogin'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <FormInput
                        name={'username'}
                        label={'Username'}
                    />
                    <FormInputPassword
                        name={'password'}
                        label={'Password'}
                    />
                    <Center>
                        <MainButton
                            formName={'formLogin'}
                            buttonText={'Login'}
                        />
                    </Center>
                </MainForm>
            </PageCard>
        </FullPage>
    );
};

export default Login;
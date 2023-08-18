import React from 'react';
import PageCard from '../../components/Card/Card';
import FullPage from '../../components/FullPage/FullPage';
import componentStyles from '../../styles/Components.module.css';
import style from './Login.module.css';
import MainForm from '../../components/Forms/MainForm/MainForm';
import FormInput from '../../components/Forms/FormInput/FormInput';
import FormInputPassword from '../../components/Forms/FormInputPassword/FormInputPassword';
import MainButton from '../../components/Button/MainButton';
import { Form, Space } from 'antd';
import { notifyError } from '../../components/Notify/Notify';
import { useNavigate } from 'react-router-dom';
import Center from '../../components/Center/Center';

const Login = (props) => {

    const [form] = Form.useForm()
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        };
        fetch(`${process.env.REACT_APP_NODE_DOMAIN}/login`, requestOptions)
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.success) {
                    navigate('/dashboard')
                } else {
                    notifyError(responseData.error)
                }
            })
            .catch((error) => {
                console.error('Error making POST request:', error);
            });
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
                        <Space>
                            <MainButton
                                formName={'formLogin'}
                                buttonText={'Login'}
                            />
                            <MainButton
                                htmlType={'buttom'}
                                type="dashed"
                                buttonText={'Register'}
                                onClick={() => {
                                    navigate('/register')
                                }}
                            />
                        </Space>
                    </Center>
                </MainForm>
            </PageCard>
        </FullPage>
    );
};

export default Login;
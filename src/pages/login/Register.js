import React from 'react';
import PageCard from '../../components/Card/Card';
import FullPage from '../../components/FullPage/FullPage';
import componentStyles from '../../styles/Components.module.css';
import style from './Login.module.css';
import MainForm from '../../components/Forms/MainForm/MainForm';
import FormInput from '../../components/Forms/FormInput/FormInput';
import FormInputEmail from '../../components/Forms/FormInputEmail/FormInputEmail';
import FormInputPassword from '../../components/Forms/FormInputPassword/FormInputPassword';
import MainButton from '../../components/Button/MainButton';
import { Form, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import Center from '../../components/Center/Center';
import FormInputPasswordConfirm from '../../components/Forms/FormInputPassword/FormInputPasswordConfirm';
import { notifyError, notifySuccess } from '../../components/Notify/Notify';
import { getEncriptedPassword } from '../../utils/settings';
import { urlPostMethod } from '../../utils/utilsUrls';

const Register = (props) => {

    const [form] = Form.useForm()
    const navigate = useNavigate();

    const onFinish = async (values) => {
        values.password = getEncriptedPassword(values.password)
        const result = await urlPostMethod('/register', values)
        if (result.success) {
            notifySuccess('You Registered Successfully')
        } else {
            notifyError(result.errMsg)
        }
    }

    const onFinishFailed = (errorInfo) => {
        if (errorInfo.errorFields.length > 0) {
            console.log("Error");
        }
    }

    return (
        <FullPage className={`${componentStyles.d_flex_align_center} ${style.login_page}`}>
            <PageCard title={'Register'} span={6}>
                <MainForm
                    form={form}
                    name='formRegister'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <FormInput
                        name={'username'} 
                        label={'Username'}
                        required
                    />
                    <FormInputEmail
                        name={'email'}
                        label={'Email'}
                        required
                    />
                    <FormInputPassword
                        name={'password'}
                        label={'Password'}
                        required
                    />
                    <FormInputPasswordConfirm
                        name={'confirm_password'}
                        label={'Confirm Password'}
                        required
                    />
                    <Center>
                        <Space>
                            <MainButton
                                formName={'formRegister'}
                                buttonText={'Register'}
                            />
                            <MainButton
                                htmlType={'buttom'}
                                type="dashed"
                                buttonText={'Login'}
                                onClick={() => {
                                    navigate('/login')
                                }}
                            />
                        </Space>
                    </Center>
                </MainForm>
            </PageCard>
        </FullPage>
    );
};

export default Register;
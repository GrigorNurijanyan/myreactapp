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
import { getEncriptedPassword } from '../../utils/settings';
import { urlPostMethod } from '../../utils/utilsUrls';
import reduxActions from '../../redux/reduxActions';

const Login = (props) => {

    const [form] = Form.useForm()
    const navigate = useNavigate();

    const onFinish = async (values) => {
        values.password = getEncriptedPassword(values.password)
        const result = await urlPostMethod('/login', values)
        if (result.success) {
            localStorage.setItem('token', result.accessToken);
            reduxActions.setAccessToken(result.accessToken)
            navigate('/dashboard')
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
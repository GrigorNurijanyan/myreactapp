import React from 'react';
import FullPage from '../../components/FullPage/FullPage';
import MainForm from '../../components/Forms/MainForm/MainForm';
import { Form } from 'antd';
import FormInput from '../../components/Forms/FormInput/FormInput';
import FormSelect from '../../components/Forms/FormSelect/FormSelect';
import FormInputNumber, { AMD, AMD_FORMMATER_REGEX, AMD_PARSER } from '../../components/Forms/FormInputNumber/FormInputNumber';

const ProductEdit = () => {

    const [form] = Form.useForm()

    const onFinish = async (values) => {
        console.log("____values", values)
    }

    const onFinishFailed = (errorInfo) => {
        if (errorInfo.errorFields.length > 0) {
            console.log("Error");
        }
    }

    return (
        <FullPage>
            <MainForm
                form={form}
                name='formCreateProduct'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <FormInput
                    name={'name'}
                    label={'Product Name'}
                    placeholder={'Enter Product Name'}
                />
                <FormSelect
                    name={'category'}
                    label={'Category'}
                    placeholder={'Select Category'}
                />
                <FormInputNumber
                    name={'price'}
                    label={'Price'}
                    placeholder={'Enter Product Price'}
                    formatter={(value) => `${AMD} ${value}`.replace(AMD_FORMMATER_REGEX, ',')}
                    parser={(value) => value.replace(AMD_PARSER, '')}
                />
            </MainForm>
        </FullPage>
    );
};

export default ProductEdit;
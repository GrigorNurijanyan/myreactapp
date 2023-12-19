import React, { useState } from 'react';
import PageModal from '../../components/Modal/Modal';
import MainButton from '../../components/Button/MainButton';
import { useTranslation } from 'react-i18next';
import MainForm from '../../components/Forms/MainForm/MainForm';
import FormInput from '../../components/Forms/FormInput/FormInput';
import { Form, Image } from 'antd';
import PageTable from '../../components/Table/Table';
import FormDraggerUpload from '../../components/Forms/FormUpload/FormDraggerUpload';


const Category = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uploadImage, setUploadImgae] = useState('');
    const [tableData, setTableData] = useState([]);

    const [form] = Form.useForm()

    const showModal = () => {
        form.resetFields()
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async (values) => {
        setTableData((oldList) => {
            oldList.push({
                key: Math.random(1000),
                name: values.name,
                image: <Image width={100} height={100} src={values.image[0].thumbUrl} />
            })
            return [...oldList]
        })
        setIsModalOpen(false);
    }

    const onFinishFailed = (errorInfo) => {
        if (errorInfo.errorFields.length > 0) {
            console.log("Error");
        }
    }

    return (
        <>
            <PageModal
                trigger={<MainButton htmlType={'buttom'} buttonText={t('CreateCategory')} onClick={showModal} />}
                open={isModalOpen}
                handleCancel={handleCancel}
                title={t('CreateCategory')}
                formName={'createCategoryForm'}
            >
                <MainForm
                    form={form}
                    name={'createCategoryForm'}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // initialValues={{name: '', image: ''}}
                >
                    <FormInput
                        name={'name'}
                        label={t('Name')}
                        required
                    />
                    <FormDraggerUpload 
                        name={'image'} 
                        mediaData={uploadImage}
                        maxCount={1} 
                        label={'Upload your category photo'} 
                        onUpload={(file) => {
                            setUploadImgae(file.url)
                        }} 
                    />
                </MainForm>
            </PageModal>
            <PageTable
                style={{ marginTop: '20px' }}
                columns={[
                    {
                        title: 'Image',
                        dataIndex: 'image',
                    },
                    {
                        title: 'Name',
                        dataIndex: 'name',
                    }]}
                data={tableData}
            />
        </>
    );
};
export default Category;
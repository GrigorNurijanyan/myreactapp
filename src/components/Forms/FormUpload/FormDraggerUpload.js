import React, { useState } from 'react';
import Dragger from 'antd/lib/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
import { bool, func, node, number, object, string } from 'prop-types';
import PageModal from '../../Modal/Modal';
import { Form } from 'antd';

const FormDraggerUpload = ({ inboxIcon, uploadText, uploadSupportText, className, style, listType, maxCount, formClassName, label, formStyle, hasFeedback, name }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const props = {
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
        onPreview: async (file) => {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj);
            }
            setPreviewImage(file.url || file.preview);
            setPreviewOpen(true);
        },
        maxCount: maxCount,
        listType: listType,
    };
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e
        }
        return e && e?.fileList
    }
    return (
        <>
            <Form.Item
                className={formClassName}
                label={label}
                name={name}
                style={formStyle}
                hasFeedback={hasFeedback}
                rules={[
                    {
                        required: false,
                        message: `Please upload your ${label}!`,
                    },
                ]}
                valuePropName='fileList'
                getValueFromEvent={normFile}
            >
                <Dragger {...props} style={{ padding: '10px', ...style }} className={`custom-table-wrapper ${className}`} multiple={false}>
                    <p className="ant-upload-drag-icon">
                        {inboxIcon}
                    </p>
                    <p className="ant-upload-text">{uploadText}</p>
                    <p className="ant-upload-hint">
                        {uploadSupportText}
                    </p>
                </Dragger>
            </Form.Item>
            <PageModal trigger={''} open={previewOpen} footer={[]} handleCancel={() => setPreviewOpen(false)}>
                <img
                    alt="modal-img"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </PageModal>
        </>
    );
};

FormDraggerUpload.defaultProps = {
    inboxIcon: <InboxOutlined />,
    uploadText: 'Click or drag file to this area to upload',
    onChange: () => { },
    className: '',
    style: {},
    uploadSupportText: 'Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.',
    listType: 'picture-card',
    showUploadList: true,
    maxCount: 10,
    formClassName: '',
    label: "Label",
    required: false,
    allowClear: true,
    hasFeedback: true,
}

FormDraggerUpload.propTypes = {
    inboxIcon: node,
    uploadText: string,
    uploadSupportText: string,
    className: string,
    style: object,
    onChange: func,
    listType: string,
    showUploadList: bool,
    maxCount: number,
    formClassName: string,
    label: string,
    required: bool,
    allowClear: bool,
    hasFeedback: bool,
    name: string
}

export default FormDraggerUpload;
import React, { useState } from 'react';
import Dragger from 'antd/lib/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
import { array, bool, func, node, number, object, string } from 'prop-types';
import PageModal from '../../Modal/Modal';
import { Form } from 'antd';
import { urlGetImagesUrl } from '../../../utils/utilsUrls';
import { notifyError } from '../../Notify/Notify';

const FormDraggerUpload = ({ inboxIcon, uploadText, uploadSupportText, className, style, listType, maxCount, formClassName, label, formStyle, hasFeedback, name, onStartUpload, onUpload, mediaData }) => {
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
            console.log("____file00000", file)
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj);
            }
            setPreviewImage(file.url || file.preview);
            setPreviewOpen(true);
        },
        customRequest: async (media) => {
            const { file } = media
            const reader = new FileReader()
            let NewFile = {
                url: '',
                mediaUrl: '',
                name: file.name,
                id: new Date().getTime(),
                uid: new Date().getTime(),
                _id: new Date().getTime() + '_' + file.name,
                key: new Date().getTime(),
                mediaContentType: file.type,
                status: 'uploading',
                percent: 68,
              }
              onStartUpload && onStartUpload(NewFile)
              reader.onabort = () => console.log('file reading was aborted')
              reader.onerror = () => console.log('file reading has failed')
              reader.onload = async() => {
                urlGetImagesUrl('/upload-file', file ).then((res) => {
                  if (res.success) {
                    NewFile.status = 'done'
                    NewFile.url = res.data
                    NewFile.mediaUrl = res.data
                    NewFile.file = file
                    onUpload(NewFile)
                  } else {
                    NewFile.status = 'error'
                    notifyError(res.errMsg)
                  }
                })
              }
              reader.readAsArrayBuffer(file)
        },
        maxCount: maxCount,
        listType: listType,
        fileList: mediaData,
    };
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e; // If e is already an array, return it as is
        }
        if (e && e.fileList && Array.isArray(e.fileList)) {
            return e.fileList; // If e has a fileList property that is an array, return it
        }
        // If none of the above conditions are met, return an empty array
        return [];
    };
    
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
    fileList: []
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
    name: string,
    fileList: array,
}

export default FormDraggerUpload;
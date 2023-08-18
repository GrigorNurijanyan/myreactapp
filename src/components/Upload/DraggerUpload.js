import React, { useState } from 'react';
import Dragger from 'antd/lib/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
import { array, bool, func, node, number, object, string } from 'prop-types';
import PageModal from '../Modal/Modal';

const DraggerUpload = ({ inboxIcon, uploadText, uploadSupportText, className, style, setFileList, fileList, listType, maxCount }) => {
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
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        onChange: ({ fileList: newFileList }) => {
            setFileList(newFileList);
        },
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
    return (
        <>
            <Dragger {...props} style={{ padding: '10px', ...style }} className={`custom-table-wrapper ${className}`} >
                <p className="ant-upload-drag-icon">
                    {inboxIcon}
                </p>
                <p className="ant-upload-text">{uploadText}</p>
                <p className="ant-upload-hint">
                    {uploadSupportText}
                </p>
            </Dragger>
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

DraggerUpload.defaultProps = {
    inboxIcon: <InboxOutlined />,
    uploadText: 'Click or drag file to this area to upload',
    onChange: () => { },
    className: '',
    style: {},
    uploadSupportText: 'Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.',
    fileList: [],
    setFileList: () => { },
    listType: 'picture-card',
    showUploadList: true,
    maxCount: 10,
}

DraggerUpload.propTypes = {
    inboxIcon: node,
    uploadText: string,
    uploadSupportText: string,
    className: string,
    style: object,
    fileList: array,
    setFileList: func,
    onChange: func,
    listType: string,
    showUploadList: bool,
    maxCount: number
}

export default DraggerUpload;
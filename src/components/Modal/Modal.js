import React from 'react';
import { Modal } from 'antd';
import { array, bool, func, node, object, string } from 'prop-types';
import MainButton from '../Button/MainButton';

const PageModal = ({ trigger, title, open, handleOk, handleCancel, style, className, children, formName, footer }) => {
    return (
        <>
            {trigger}
            <Modal
                className={className}
                style={style}
                title={title}
                visible={open}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={footer || [
                    <MainButton htmlType={'button'} key={'cancel'} buttonText={'Cancel'} onClick={handleCancel} />,
                    <MainButton formName={formName} htmlType={'submit'} key={'save'} buttonText={'Save'} />,
                ]}
            >
                {children}
            </Modal>
        </>
    );
};

PageModal.defaultProps = {
    title: 'My Modal',
    trigger: 'Open Modal',
    open: false,
    handleOk: () => { },
    handleCancel: () => { },
    type: 'primary',
    children: 'Modal Body'
}

PageModal.propTypes = {
    title: string,
    trigger: node,
    open: bool,
    handleOk: func,
    handleCancel: func,
    className: string,
    style: object,
    children: node,
    formName: string,
    footer: array,
}

export default PageModal;
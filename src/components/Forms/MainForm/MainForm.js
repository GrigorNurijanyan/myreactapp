import React from 'react';
import { Form } from 'antd';
import { func, node, object, string, array } from 'prop-types'
import './MainForm.css';

const MainForm = ({ form, size, name, children, initialValues, onFinish, onFinishFailed, validateTrigger, className }) => {
    return (
        <Form
            form={form}
            size={size}
            name={name}
            initialValues={initialValues}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            scrollToFirstError
            validateTrigger={validateTrigger || ['onBlur']}
            layout="vertical"
            className={`mat-form ${className || ''}`}
        >
            {children}
        </Form>
    )
}

MainForm.defaultProps = {
    name: "formSubmit",
    size: "middle",
    initialValues: {},
    onFinish: () => { },
    onFinishFailed: () => { },
}

MainForm.propTypes = {
    form: object,
    size: string,
    name: string,
    initialValues: object,
    children: node,
    onFinish: func,
    onFinishFailed: func,
    validateTrigger: array,
    className: string,
}

export default MainForm;
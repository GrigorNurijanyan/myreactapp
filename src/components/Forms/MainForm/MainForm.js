import React from 'react';
import { Form } from 'antd';
import { object, string } from 'prop-types'
import './MainForm.css';

const MainForm = ({ form, size }) => {
    return (
        <Form
            form={form}
            size={size}
            name={name}
            initialValues={props.initialValues}
            onFinish={props.onFinish}
            onFinishFailed={props.onFinishFailed}
            scrollToFirstError
            validateTrigger={props.validateTrigger || ['onBlur']}
            layout="vertical"
            className={`mat-form ${props.className || ''}`}
        >
            {props.children}
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
    name: string
}

export default MainForm;
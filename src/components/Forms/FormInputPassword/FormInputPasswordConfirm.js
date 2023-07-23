import React from "react";
import { Form, Input } from "antd";
import { func, bool, object, string } from "prop-types";
import { LockOutlined } from '@ant-design/icons';

const FormInputPasswordConfirm = ({
  label,
  required,
  name,
  placeholder,
  formStyle,
  formClassName,
  size,
  onChange,
  className,
  onBlur,
  onPressEnter,
  allowClear,
  hasFeedback
}) => {
  return (
    <Form.Item
      className={formClassName}
      label={label}
      name={name}
      hasFeedback={hasFeedback}
      style={formStyle}
      dependencies={['password']}
      rules={[
        {
          required: required,
          message: 'Please confirm your password!',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('The new password that you entered do not match!'));
          },
        }),
      ]}
    >
        <Input.Password
            placeholder={label || placeholder}
            size={size}
            className={className}
            onChange={(e) => {
                onChange && onChange(e)
            }}
            prefix={<LockOutlined />}
            onBlur={onBlur}
            allowClear={allowClear}
            onPressEnter={onPressEnter}
        />
    </Form.Item>
  );
};

FormInputPasswordConfirm.defaultProps = {
  label: "Label",
  placeholder: "Placeholder",
  size: 'middle',
  required: false,
  allowClear: true,
  hasFeedback: true,
};

FormInputPasswordConfirm.propTypes = {
  label: string,
  name: string,
  placeholder: string,
  formStyle: object,
  formClassName: object,
  size: string,
  required: bool,
  allowClear: bool,
  hasFeedback: bool,
  className: string,
  onChange: func,
  onBlur: func,
  onPressEnter: func,
};

export default FormInputPasswordConfirm;

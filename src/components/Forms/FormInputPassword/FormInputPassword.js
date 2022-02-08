import React from "react";
import { Form, Input } from "antd";
import { func, bool, object, string } from "prop-types";
import { LockOutlined } from '@ant-design/icons';

const FormInputPassword = ({
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
      rules={[
        {
          required: required,
          message: `Please input your ${label}!`,
        },
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

FormInputPassword.defaultProps = {
  label: "Label",
  placeholder: "Placeholder",
  size: 'middle',
  required: false,
  allowClear: true,
  hasFeedback: true,
};

FormInputPassword.propTypes = {
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

export default FormInputPassword;

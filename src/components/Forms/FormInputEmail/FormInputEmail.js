import React from "react";
import { Form, Input } from "antd";
import { func, bool, object, string } from "prop-types";

const FormInputEmail = ({
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
      style={formStyle}
      hasFeedback={hasFeedback}
      rules={[
        {
          type: 'email',
          required: required,
          message: 'The input is not valid E-mail!',
        },
      ]}
    >
        <Input
            placeholder={label || placeholder}
            size={size}
            className={className}
            allowClear={allowClear}
            onChange={(e) => {
                onChange && onChange(e)
            }}
            onBlur={onBlur}
            onPressEnter={onPressEnter}
            type={'email'}
        />
    </Form.Item>
  );
};

FormInputEmail.defaultProps = {
  label: "Label",
  placeholder: "Placeholder",
  size: 'middle',
  required: false,
  allowClear: true,
  hasFeedback: true,
};

FormInputEmail.propTypes = {
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
  type: string
};

export default FormInputEmail;

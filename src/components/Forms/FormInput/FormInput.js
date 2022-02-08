import React from "react";
import { Form, Input } from "antd";
import { func, bool, object, string } from "prop-types";

const FormInput = ({
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
          required: required,
          message: `Please input your ${label}!`,
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
        />
    </Form.Item>
  );
};

FormInput.defaultProps = {
  label: "Label",
  placeholder: "Placeholder",
  size: 'middle',
  required: false,
  allowClear: true,
  hasFeedback: true,
};

FormInput.propTypes = {
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

export default FormInput;

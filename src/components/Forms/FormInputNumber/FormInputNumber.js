import React from "react";
import { Form, InputNumber } from "antd";
import { func, bool, object, string } from "prop-types";
import './FormInputNumber.scss'

export const AMD = "֏"
export const AMD_FORMMATER_REGEX = /\B(?=(\d{3})+(?!\d))/g
export const AMD_PARSER = /\֏\s?|(,*)/g

const FormInputNumber = ({
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
  hasFeedback,
  formatter,
  parser
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
      <InputNumber
        placeholder={placeholder || label}
        size={size}
        className={className}
        allowclear={allowClear}
        formatter={formatter}
        parser={parser}
        onChange={(e) => {
          onChange && onChange(e)
        }}
        onBlur={onBlur}
        onPressEnter={onPressEnter}
      />
    </Form.Item>
  );
};

FormInputNumber.defaultProps = {
  label: "Label",
  placeholder: "Placeholder",
  size: 'middle',
  required: false,
  allowClear: true,
  hasFeedback: true,
};

FormInputNumber.propTypes = {
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
  formatter: func,
  parser: func,
};

export default FormInputNumber;

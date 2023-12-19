import { Form, Select } from 'antd';
import { bool, func, node, string } from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { object } from 'prop-types';

const FormSelect = ({ onChange, options, placeholder, showArrow, suffixIcon, onSelect, value, prefixIcon, onlyIcon, formClassName, name, label, formStyle, hasFeedback, required }) => {
    const { t } = useTranslation()

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
            <Select
                className={'main-select'}
                placeholder={t(placeholder)}
                optionFilterProp="children"
                onChange={(value) => {
                    onChange && onChange(value)
                }}
                value={value}
                filterOption={false}
                showarrow={showArrow}
                suffixIcon={suffixIcon}
                onSelect={(value) => {
                    onSelect && onSelect(value)
                }}
            >
                {
                    options.map((option, index) => (
                        <Select.Option key={option.value + '_' + index} value={option.value}>{option.label}</Select.Option>
                    ))
                }
            </Select>
        </Form.Item>
    );
};

FormSelect.propTypes = {
    onChange: func,
    placeholder: string,
    showArrow: bool,
    suffixIcon: node,
    onSelect: func,
    value: string,
    prefixIcon: node,
    onlyIcon: bool,
    formClassName: object,
    formStyle: object,
    name: string,
    label: string,
    hasFeedback: bool,
    required: bool,
}

FormSelect.defaultProps = {
    onChange: () => { },
    onSelect: () => { },
    placeholder: 'Select Item',
    label: 'Select Item',
    showarrow: true,
    onlyIcon: false,
    hasFeedback: true,
    required: false,
    options: []
}

export default FormSelect;
import { Select } from 'antd';
import { bool, func, node, string } from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './mainSelect.scss';

const MainSelect = ({ onChange, options, placeholder, showArrow, suffixIcon, onSelect, value, prefixIcon, onlyIcon }) => {
    const { t } = useTranslation()

    return (
        <div className={`main_select_wrapper ${onlyIcon ? 'main-select-only-icon' : ''}`}>
            {
                prefixIcon && <div className={'prefixIcon'}>{prefixIcon}</div>
            }
            <Select
                className={'main-select'}
                placeholder={t(placeholder)}
                optionFilterProp="children"
                onChange={(value) => {
                    onChange && onChange(value)
                }}
                value={value}
                filterOption={false}
                showArrow={showArrow}
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
        </div>
    );
};

MainSelect.propTypes = {
    onChange: func,
    placeholder: string,
    showArrow: bool,
    suffixIcon: node,
    onSelect: func,
    value: string,
    prefixIcon: node,
    onlyIcon: bool,
}

MainSelect.defaultProps = {
    onChange: () => { },
    onSelect: () => { },
    placeholder: 'Select Item',
    showArrow: true,
    onlyIcon: false,
}

export default MainSelect;
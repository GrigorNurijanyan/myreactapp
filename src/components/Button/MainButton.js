import React from 'react';
import { Button } from 'antd';
import { object, string, node, bool, func } from 'prop-types'

const MainButton = ({ buttonText, formName, onClick, htmlType, icon, style, className, disabled, size, shape, type }) => {
    return (
        <Button
            type={type}
            onClick={onClick}
            form={formName}
            htmlType={htmlType}
            icon={icon}
            style={style}
            className={className}
            disabled={disabled}
            size={size}
            shape={shape}
        >
            {buttonText}
        </Button>
    );
};

MainButton.defaultProps = {
    buttonText: 'Main Button',
    formName: 'formSubmit',
    htmlType: 'submit',
    size: 'middle',
    shape: 'default',
    type: 'primary',
}

MainButton.propTypes = {
    buttonText: string,
    form: string,
    onClick: func,
    icon: node,
    style: object,
    className: string,
    disabled: bool,
    shape: string,
    type: string,
}

export default MainButton;
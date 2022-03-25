import React from 'react';
import { Button } from 'antd';
import { object, string, node, bool, func } from 'prop-types'

const MainButton = ({ buttonText, formName, onClick, htmlType, icon, style, className, disabled, size, shape }) => {
    return (
        <Button
            type="primary"
            onClick={onClick}
            formname={formName}
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
    formname: 'formSubmit',
    htmlType: 'submit',
    size: 'middle',
    shape: 'default'
}

MainButton.propTypes = {
    buttonText: string,
    formname: string,
    onClick: func,
    icon: node,
    style: object,
    className: string,
    disabled: bool,
    shape: string,
}

export default MainButton;
import React from 'react';
import { Button } from 'antd';
import { object, string, node, bool } from 'prop-types'
import styles from './Card.module.css';

const MainButton = ({ buttonText, formName, onClick, htmlType, icon, style, className, disabled, size }) => {
    return (
        <Button 
            type="primary"
            onClick={onClick}
            formName={formName}
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

MatButton.defaultProps = {
    buttonText: 'Main Button',
    formName: 'formSubmit',
    htmlType: 'submit',
    size: 'middle',
    shape: 'default'
}

MainButton.propTypes = {
    buttonText: string,
    formName: string,
    onClick: func,
    icon: node,
    style: object,
    className: string,
    disabled: bool,
    shape: string,
}

export default MainButton;
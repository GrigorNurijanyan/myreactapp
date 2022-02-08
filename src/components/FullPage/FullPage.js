import React from 'react';
import { node, object, string } from 'prop-types'
import styles from './FullPage.module.css';

const FullPage = ({ children, className, style }) => {
    return (
        <div className={`${styles.app_fullPage} ${className || ''}`} style={style}>
            {children}
        </div>
    );
};

FullPage.propTypes = {
    children: node,
    className: string,
    style: object,
}

export default FullPage;
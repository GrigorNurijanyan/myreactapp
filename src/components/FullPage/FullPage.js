import React from 'react';
import PropTypes from 'prop-types'
import styles from './FullPage.module.css';

const FullPage= ({children, className}) => {
    return (
        <div className={`${styles.app_fullPage} ${className || ''}`}>
            {children}
        </div>
    );
};

FullPage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default FullPage;
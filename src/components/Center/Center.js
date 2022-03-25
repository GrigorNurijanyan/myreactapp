import React from 'react';
import { node, string } from 'prop-types';
import styles from './Center.module.css';

const Center = ({ className, children }) => {
    return (
        <div className={`${styles.center_item} ${className || ''}`}>
            {children}
        </div>
    );
};

Center.propTypes = {
    className: string,
    children: node
}

export default Center;
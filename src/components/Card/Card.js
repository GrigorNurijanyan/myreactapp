import React from 'react';
import { Card, Col } from 'antd';
import { object, number, string, node } from 'prop-types'
import styles from './Card.module.css';

const PageCard = ({ children, className, style, span, offset, title }) => {
    return (
        <Col span={span} offset={offset}>
            <Card title={title} className={`${styles.page_card} ${className || ''}`} style={style}>
                {children}
            </Card>
        </Col>
    );
};

PageCard.propTypes = {
    children: node,
    className: string,
    style: object,
    span: number,
    offset: number,
    title: string,
}

export default PageCard;
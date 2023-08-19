import { Table } from 'antd';
import { array, func, object, string } from 'prop-types';
import React from 'react';

const PageTable = ({ columns, data, onChange, className, style }) => {
    return (
        <Table style={style} className={`custom-table-wrapper ${className}`} columns={columns} dataSource={data} onChange={onChange} />
    );
};

PageTable.defaultProps = {
    columns: [],
    data: [],
    onChange: () => { },
    className: '',
    style: {}
}

PageTable.propTypes = {
    title: array,
    data: array,
    onChange: func,
    className: string,
    style: object
}

export default PageTable;
import React from 'react';
import { object, string } from 'prop-types'
import { useNavigate } from 'react-router-dom';
import MainButton from '../Button/MainButton';
import './PageHeader.scss';

const PageHeader = ({ title, buttonText, url }) => {
    const navigate = useNavigate()
    return (
        <div className='page-header'>
            <div className='page-header-left'>
                <p>{title}</p>
            </div>
            <div className='page-header-right'>
                <MainButton htmlType={'buttom'} buttonText={buttonText} onClick={() => navigate(url)} />
            </div>
        </div>
    );
};

PageHeader.propTypes = {
    title: string,
    buttonText: string,
    className: string,
    url: string,
    style: object,
}


export default PageHeader;
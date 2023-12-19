import React from 'react';
import FullPage from '../../components/FullPage/FullPage';
import PageHeader from '../../components/PageHeader';

const ProductsList = () => {
    return (
        <FullPage>
            <PageHeader
                title={'Products list'}
                buttonText={'Create Product'}
                url={'/product/create'}
            />
        </FullPage>
    );
};

export default ProductsList;
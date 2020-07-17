import React from 'react';
import { MasterDetail } from '@react-force/core';
import { ProductMaster } from './ProductMaster';
import { ProductDetail } from './ProductDetail';
import { ProductStoreProvider } from './ProductContext';

export const ProductEditor = () => {
    return (
        <ProductStoreProvider>
            <MasterDetail
                MasterComponent={ProductMaster}
                DetailComponent={ProductDetail}
                masterWidth={400}
            />
        </ProductStoreProvider>
    );
};

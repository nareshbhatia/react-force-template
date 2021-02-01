import React from 'react';
import Box from '@material-ui/core/Box';
import { MasterDetailChildProps, MaterialTable } from '@react-force/core';
import { findProduct, Product, sortProducts } from '@react-force/mock-data';
import { ColumnDef } from '@react-force/models';
import { useProductStore } from './ProductContext';

export const ProductMaster = ({
    selectionContext,
    onEntitySelected,
}: MasterDetailChildProps) => {
    const productStore = useProductStore();

    const columnDefs: Array<ColumnDef<Product>> = [
        {
            field: 'name',
            headerName: 'Product',
            width: 250,
        },
        {
            field: 'manufacturer',
            headerName: 'Company',
        },
    ];

    const handleEntityClicked = (entity: Product) => {
        onEntitySelected(entity.id);
    };

    // Sort a copy of products by manufacturer
    const products = sortProducts(productStore.products);

    return (
        <Box p={1}>
            <MaterialTable<Product>
                entityList={products}
                columnDefs={columnDefs}
                selectedEntity={findProduct(
                    products,
                    selectionContext.entityId
                )}
                onEntityClicked={handleEntityClicked}
            />
        </Box>
    );
};

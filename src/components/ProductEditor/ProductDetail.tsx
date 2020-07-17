import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { MasterDetailChildProps, useMessageSetter } from '@react-force/core';
import {
    addProduct,
    findProduct,
    newProduct,
    Product,
    updateProduct,
} from '@react-force/mock-data';
import { MessageFactory } from '@react-force/models';
import { useProductStore, useProductStoreSetter } from './ProductContext';
import { ProductForm } from './ProductForm';

export const ProductDetail = ({
    selectionContext,
    onEntitySelected,
    onEntityUpdated,
}: MasterDetailChildProps) => {
    const { isNew, entityId } = selectionContext;
    const setMessage = useMessageSetter();
    const productStore = useProductStore();
    const setProductStore = useProductStoreSetter();

    const { products, ...rest } = productStore;
    const product = isNew ? newProduct() : findProduct(products, entityId);
    if (!product) {
        return null;
    }

    const handleSave = async (product: Product) => {
        try {
            if (isNew) {
                setProductStore({
                    products: addProduct(products, product),
                    ...rest,
                });
                setMessage(MessageFactory.success('Product added'));
                onEntitySelected(product.id);
            } else {
                setProductStore({
                    products: updateProduct(products, product),
                    ...rest,
                });
                setMessage(MessageFactory.success('Product saved'));
                onEntityUpdated();
            }
        } catch (error) {
            setMessage(MessageFactory.error(error.message));
        }
    };

    return (
        <Box px={2} py={1}>
            <Typography variant="h6" component="h2">
                {isNew ? 'Add Product' : 'Edit Product'}
            </Typography>
            <ProductForm product={product} onSave={handleSave} />
        </Box>
    );
};

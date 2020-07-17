import React, { ReactNode, useContext, useState } from 'react';
import { Product, productData } from '@react-force/mock-data';

// ---------- ProductStore ----------
interface ProductStore {
    products: Array<Product>;
}

const defaultProductStore: ProductStore = {
    products: productData,
};

// ---------- ProductStoreContext ----------
type ProductStoreSetter = (store: ProductStore) => void;

const ProductStoreContext = React.createContext<ProductStore | undefined>(
    undefined
);
const ProductStoreSetterContext = React.createContext<
    ProductStoreSetter | undefined
>(undefined);

// ---------- Hooks ----------
function useProductStore(): ProductStore {
    const productStore = useContext(ProductStoreContext);
    if (productStore === undefined) {
        /* istanbul ignore next */
        throw new Error(
            'useProductStore must be used within a ProductStoreProvider'
        );
    }
    return productStore;
}

function useProductStoreSetter(): ProductStoreSetter {
    const setProductStore = useContext(ProductStoreSetterContext);
    if (setProductStore === undefined) {
        /* istanbul ignore next */
        throw new Error(
            'useProductStoreSetter must be used within a ProductStoreProvider'
        );
    }
    return setProductStore;
}

// ---------- ProductStoreProvider ----------
interface ProductStoreProviderProps {
    children: ReactNode;
    value?: ProductStore;
}

const ProductStoreProvider = ({
    children,
    value = defaultProductStore,
}: ProductStoreProviderProps) => {
    const [productStore, setProductStore] = useState<ProductStore>(value);

    return (
        <ProductStoreContext.Provider value={productStore}>
            <ProductStoreSetterContext.Provider value={setProductStore}>
                {children}
            </ProductStoreSetterContext.Provider>
        </ProductStoreContext.Provider>
    );
};

export { ProductStoreProvider, useProductStore, useProductStoreSetter };

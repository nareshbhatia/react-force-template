import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormActions, TextField } from '@react-force/formik-mui';
import { Product } from '@react-force/mock-data';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

export interface ProductFormProps {
    product: Product;
    onSave: (product: Product) => void;
}

export const ProductForm = ({ product, onSave }: ProductFormProps) => {
    const classes = useStyles();

    const validationSchema = yup.object().shape({
        name: yup.string().required(),
        department: yup.string().required(),
        manufacturer: yup.string().required(),
        price: yup.number().required(),
    });

    return (
        <Formik<Product>
            initialValues={product}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                onSave(values);
                actions.setSubmitting(false);
            }}
        >
            {() => (
                <Form className={classes.form}>
                    <TextField
                        name="name"
                        type="text"
                        label="Name"
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        name="department"
                        type="text"
                        label="Department"
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        name="manufacturer"
                        type="text"
                        label="Manufacturer"
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        name="price"
                        type="number"
                        label="Price"
                        margin="normal"
                        fullWidth
                    />

                    <FormActions submitLabel="Save" />
                </Form>
            )}
        </Formik>
    );
};

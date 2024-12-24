import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const ProductGrid = () => {
    const products = [
        { name: 'Product 1', price: '$10' },
        { name: 'Product 2', price: '$20' },
        { name: 'Product 3', price: '$30' },
    ];

    return (
        <Grid container spacing={2}>
            {products.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">{product.name}</Typography>
                        <Typography variant="body1">{product.price}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductGrid;

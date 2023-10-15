import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Cart from './Cart'; 

function CartList() {
    const { cartItems } = useSelector((state) => state.cart);

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={item.id}>
                            <Cart item={item} />
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <h1>Sepet Boş</h1>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}

export default CartList;

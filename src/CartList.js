import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Cart from "./Cart";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { deleteItems } from "./redux/CartSlice";

function CartList() {
  const { cartItems, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
            <Typography variant="h4" component="div">
              Sepet Boş
            </Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center' }}>
            TOTAL PRICE: {total}
          </Typography>
          <Button variant="contained" color="primary" style={{ padding: '10px 20px' }} onClick={() => dispatch(deleteItems())}>
            Tümünü Sil
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CartList;
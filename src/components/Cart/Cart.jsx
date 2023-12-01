import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import CartItem from './CartItem/CartItem';
import { Link } from "react-router-dom";

import useStyles from './styles';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    const classes = useStyles();

    const emptyCart = () => (
        <Typography align='center' variant="subtitle1">You have no item in your shopping cart.
            <Link to="/" className={ classes.link }>Please add some items.</Link>
        </Typography>
    );

    const filledCart = () => (
        <>
            <Grid container spacing={ 2 }>
                { cart.line_items.map((item) => (
                    <Grid item xs={ 12 } md={ 6 } sm={ 4 } key={ item.id }>
                        <CartItem item={ item } onUpdateCart={ handleUpdateCartQty } onRemoveFromCart={ handleRemoveFromCart } />
                    </Grid>
                )) }
            </Grid>
            <div className={ classes.cardDetails }>
                <Typography variant="h4">
                    Subtotal: { cart.subtotal.formatted_with_symbol }
                </Typography>
                <div>
                    <Button className={ classes.emptyButton } size='large' type='button' variant='contained' color='secondary' onClick={ handleEmptyCart }>Empty Cart</Button>
                    <Button component={ Link } to="/checkout" className={ classes.checkoutButton } size='large' type='button' variant='contained' color='primary'>Checkout</Button>
                </div>
            </div>
        </>

    );

    if (!cart.line_items) return "Loading..."

    return (
        <Container>
            <div className={ classes.toolbar } />
            <Typography className={ classes.title } variant='h4' gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items.length ? emptyCart() : filledCart() }
        </Container>
    )
}

export default Cart;
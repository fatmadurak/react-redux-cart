import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';

function CartList() {
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <Cart item={item} />
                    </div>
                ))
            ) : (
                <h1>Sepet Boş</h1>
            )}
        </>
    );
}

export default CartList;
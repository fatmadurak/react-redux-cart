import React from 'react';
import Cart from './Cart';
import { useSelector } from 'react-redux';

function CartList() {
    const { cartItems} = useSelector((state) => state.cart);

    return (
        <>
            {cartItems.length > 0 ? (
                <div>
                    {cartItems.map((item) => (
                        <Cart key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <h1>Sepet Boş</h1>
            )}
        </>
    );
}

export default CartList;
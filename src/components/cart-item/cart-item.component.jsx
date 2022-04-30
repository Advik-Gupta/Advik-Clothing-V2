import React from 'react'
import { CartItemContainer, ItemDeatilsContainer } from './cart-item.styles.jsx'

const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDeatilsContainer>
                <span className="name">{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </ItemDeatilsContainer>
        </CartItemContainer>
    )
}

export default CartItem
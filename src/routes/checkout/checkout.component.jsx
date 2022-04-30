import React, { useContext } from 'react'
import { CheckoutContainer, CheckoutHeader, HeaderBlock} from './checkout.styles.jsx'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckOut = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <span className='total'>Total: ${cartTotal}</span>
        </CheckoutContainer>
    )
}

export default CheckOut
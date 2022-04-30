import React, { useContext } from 'react'
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
        <CartItems>
          {
            cartItems.length ? (
              cartItems.map(item => (
                <CartItem key={item.id} cartItem={item} />
              ))
            ) : (
              <EmptyMessage>Your cart is empty</EmptyMessage>
            )
          }
        </CartItems>
        <Button onClick={goToCheckoutHandler} >CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
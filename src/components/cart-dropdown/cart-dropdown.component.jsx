import React from 'react'
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.actions.js';
import { selectCartItems } from '../../store/cart/cart.selectors.js'

const CartDropdown = () => {
  const dispatch = useDispatch();  
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    dispatch(setIsCartOpen(false));
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
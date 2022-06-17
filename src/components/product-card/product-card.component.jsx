import React from 'react'
import { ProductCardContainer, Footer } from './product-card.styles.jsx'
import Button, { BUTTON_TYPES } from '../button/button.component'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.actions.js';
import { selectCartItems } from '../../store/cart/cart.selectors.js';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();    
    const { name, price, imageUrl, id } = product;
    const cartItems = useSelector(selectCartItems)

    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product));
    }

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </Footer>
            <Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart} >Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard
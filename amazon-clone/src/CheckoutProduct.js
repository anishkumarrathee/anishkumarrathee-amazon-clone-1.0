import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, tittle, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        }
        )
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src= {image}
             alt=""/>

            <div className='checkoutProduct__info'>
                 <p className='checkoutProduct__tittle'>{tittle}</p>
                 <p className='checkoutProduct__price'>
                     <small>₹</small>
                     <strong>{price}</strong>
                 </p>
                 <div className="checkoutProduct__rating">
                     {Array(rating)
                     .fill()
                     .map((_, i) => (
                     <p>🌟</p>
                     ))}
                 </div>
                    <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>

        

    )
}

export default CheckoutProduct

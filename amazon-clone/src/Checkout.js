import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";


//Dispatch not needed
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad" 
                    src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" 
                    alt=""
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__tittle">
                        Your Shopping Basket
                    </h2>

                    
                     {basket.map(item => (
                       
                        <CheckoutProduct
                        id={item.id}
                        tittle={item.tittle}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                        
                    ))}
                    
                </div>
            </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>
        </div>
    )
}

export default Checkout

import {Link} from "react-router-dom"
import { useState } from "react"

import "./ProductCard.css"

export default function ProductCard({
    product,
    removeFromCart,
    addToCart,
    shoppingCart,
    GetQuantity,
    setShoppingCart

}) {
    function pricingDisplay(price) {
        let dollarCount = price 

        return `$${dollarCount.toFixed(2)}`
     }

     var quantity

var currentID
     if (shoppingCart != null) {
     shoppingCart.map((element) => {
        if (element.itemId === product.id)
        {
currentID = element.itemId
          quantity = element.quantity
        }
      })}


     

return (
    
    <div className="product-card">

        

        <Link to={"/products/" + product.id} >
        <div className="media">
            { 
            
                    <img src={product.image}/> 

            }
        </div>
        </Link>

        <div className="product-info">
            <div className="main-info">
                <p className="product-name">
                    {product.name}
                </p>

                <p className="product-price">
                    {pricingDisplay( product.price)}
                </p>
            </div>

            <div className="actions">
                <div className="buttons">
                    <Link to="/">
                    <i className="material-icons test" onClick={() => {
                            
                            addToCart(product.id); GetQuantity(product.id);
 
                        }
                    }>add</i>
                    </Link>
                    <Link to="/">

                    <i className="material-icons" onClick={() => {removeFromCart(product.id); GetQuantity(product.id)}}>remove</i>
                    </Link>

                </div>
                <span className="quantity">
                    {currentID == product.id &&
                    <span className="amt"> {quantity}</span>
                    }
                </span>

            </div>

        </div>
    </div>
)


}
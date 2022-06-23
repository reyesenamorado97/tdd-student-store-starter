import {Link} from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard({
    product,
    quantity,
    removeFromCart,
    addToCart,
    shoppingCart,
    GetQuantity

}) {

    function pricingDisplay(price) {
        let dollarCount = price 

        return `$${dollarCount.toFixed(2)}`
     }



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
                    <i className="material-icons test" onClick={() => {addToCart(product.id); GetQuantity(product.id)}}>add</i>

                    <i className="material-icons" onClick={() => {removeFromCart(product.id); GetQuantity(product.id)}}>remove</i>
                </div>
                <span className="quantity">
                    <span className="amt">{quantity}</span>

                </span>

            </div>

        </div>
    </div>
)


}
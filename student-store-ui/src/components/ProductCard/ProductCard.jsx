import {Link} from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard({
    product,
    quantity,
    removeFromCart,
    addToCart
}) {

    function pricingDisplay(price) {
        let dollarCount = price 

        return `$${dollarCount.toFixed(2)}`
     }
    
return (
    
    <div className="product-card">

        

        <Link to={"/products/" + product.id}>
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
                    <i className="material-icons test" onClick={addToCart}>add</i>

                    <i className="material-icons" onClick={removeFromCart}>remove</i>
                </div>

            </div>

        </div>
    </div>
)


}
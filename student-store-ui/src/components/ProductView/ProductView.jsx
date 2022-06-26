import {useParams} from "react-router-dom";
import {useEffect, useState} from "react"
import "./ProductView.css"
import axios from "axios";


import "./ProductView.css";

export default function ProductView(
    handleAddItemToCart,
    handleRemoveItemFromCart,
    shoppingCart ,
    GetQuantity,
   // product
    
    ) {
       
    const {productID} = useParams()
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState("Error!")

const [product, setProduct] = useState({})
    
useEffect(() => {
        axios.get("http://localhost:3001/store/" + productID)

      .then((response) => {
          setProduct(response.data.product)
      })
      
      .catch((error)=>{
        setError(error)
        console.log(error)
      })
      setIsFetching(false)
  },[])

      function setPricingDisplay(price) {
        let dollarCount = price 

        return `$${parseFloat(dollarCount).toFixed(2)}`
     }




        if (shoppingCart){
        shoppingCart.map((element) => {
            if (element.itemId === productID)
            {
    currentID = element.itemId
            quantity = element.quantity
            }
        })}

  return (
    <div>
      <div className="product-detail">
          
        <div className="product-view">
            <h1 className="product-id">Product # {productID}</h1>
        </div>
        <div className="product-view-card2">
            <div className="product-card2">
                <div className="media2">
                    <img className="img2" src={product.image} alt={`${product.name} image`} />
                </div>
                <div className="product-info2">
                    <div className="main-info2">
                        <p className="product-name2">
                            {product.name}
                        </p>
                        <p>
                        {setPricingDisplay( product.price)}
                        </p>
                    </div>
                    <div className="desc2">
                        <p className="product-description2">{product.description}</p>
                    </div>
                    <div className="actions2">
                        <div className="buttons2">
                            <button className="add2">
                                <i className="material-icons2"  onClick={() => {addToCart(productID); GetQuantity(productID)}} >add</i>
                            </button>
                            <button className="remove2" >
                            <i className="material-icons2"  onClick={() => {removeFromCart(productID); GetQuantity(productID)}}>remove</i>
                            </button>

                            <span className="quantity">
                                {productID &&
                                     <span className="amt"> 0</span>
                                }
                </span>
                        </div>

                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
}
import axios from "axios"
import  "./ProductDetail.css"
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"
import ProductView from "../ProductView/ProductView"

import  "./ProductDetail.css"


export default function ProductDetail ({

    handleAddItemToCart,
    handleRemoveItemFromCart,
    shoppingCart,
    GetQuantity,
    setError


})
{
    var res
    const {productID} = useParams()
const [product, setProduct] = useState({});
const [isFetching, setIsFetching]= useState(false)


useEffect(() => {
    setIsFetching(true)
        axios.get("http://localhost:3001/store/" + productID)

      .then((response) => {
          setProduct(response.data.product)
setIsFetching(false)

      })
      
      .catch((error)=>{
        setError(error)
        console.log(error)
      })
      setIsFetching(false)
  },[])
  console.log(product)

  if (shoppingCart.length != null){
    shoppingCart.map((element) => {
        if (element.itemId === productID)
        {
currentID = element.itemId
        quantity = element.quantity
        }
    })}

return (
    <div className="product-detail">

        {isFetching &&
                <h1 className="loading">Loading...</h1>
        }

        {!isFetching &&

            
            <ProductView

                handleAddItemToCart = {handleAddItemToCart}
                handleRemoveItemFromCart = {handleRemoveItemFromCart}
                shoppingCart = {shoppingCart}
                GetQuantity = {GetQuantity}
                setIsFetching = {setIsFetching}
                product = {product}
                isFetching= {isFetching}   
                                setError = {setError}
         
            >

            </ProductView>

            

        }
    </div>



)}
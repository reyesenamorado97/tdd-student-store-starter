import {useParams} from "react-router-dom";
import {useEffect, useState} from "react"
import "./ProductView.css"


import "./ProductView.css";
import axios from "axios";

export default function ProductView(
    shoppingCart
    ) {
        const [isFetching, setIsFetching] = useState(false)
        const [error, setError] = useState("Error!")

    const {productID} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        setIsFetching(true)
            axios.get("https://codepath-store-api.herokuapp.com/store/" + productID)
    
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
                                <i className="material-icons2">add</i>
                            </button>
                            <button className="remove2">
                            <i className="material-icons2">remove</i>
                            </button>

                        </div>

                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
}
import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import "./App.css"
import {useState, useEffect} from "react"
import NoPage from "../NoPage/NoPage"
import ProductView from "../ProductView/ProductView"

import axios from "axios"


//-------------------------------------------


export default function App() {

  // Initialize State Variables
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState("Error!")
  const [isOpen, setIsOpen] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState()
  const [searchText, setSearchText] = useState("")
  const [category, setCategory] = useState("all")
  const [isEmpty, setIsEmpty] = useState(false)
  const [quantity, setQuantity] = useState(0)



  //-------------------------------------------

  useEffect(() => {
    setIsFetching(true)
        axios.get("https://codepath-store-api.herokuapp.com/store")

      .then((response) => {setProducts(response.data.products)
      })
      .catch((error)=>{setError(error)
        console.log(error)
      })
      setIsFetching(false)
  },[])

  // Handlers -------------------------------------------
  

  
  const handleOnSearchTextChange = (event) => {

    setSearchText(event.target.value)
  }

  const handleOnToggle = ( ) => {setIsOpen(!isOpen)}

  const showLabel = () => {
    if (shoppingCart.length == 0)   {
      setIsEmpty(true)
    } 
    else{
      setIsEmpty(false)
  
    }
  }

  // Add handle add to cart stuff!

  
  const handleAddItemToCart = (productId) => {
    var selectedItem = shoppingCart.find((element) => {
      if (element.itemId == productId) {

        return true
      }
    })
    if (selectedItem == null) {
      // Add to cart array
      shoppingCart.push({ itemId: productId, quantity: 1,    })
      console.log("new item type added to cart")
    } else {
      shoppingCart.map((element) => {

        if (element.itemId == productId) {
          element.quantity = element.quantity + 1
        }
      })
    }
    showLabel()
console.log(shoppingCart)
  }
  

  const handleRemoveItemFromCart = (productId) => {
    var value = shoppingCart.find((element) => {
      if (element.itemId == productId) {
        return true
      }
    })
    if (value != null) {
      shoppingCart.map((element) => {
        if (element.itemId == productId) {
          if (element.quantity > 0)
          {
            element.quantity = element.quantity - 1
          }
           if (element.quantity <= 0)
            {
              shoppingCart.pop(element)
            }
        }
      })
    } 
    showLabel()
  }

  const GetQuantity = (productId) =>{
    if (shoppingCart.length !=0 ){
       shoppingCart.map((element) => {
        products.map((product) => {

          if (element.itemId == product.id) {
              console.log(element.quantity)
              setQuantity(element.quantity)
              return element.quantity

          }
        })

         }
         )
    }
    else if (shoppingCart.length == 0 || shoppingCart == null){
      console.log(0)

      setQuantity(0)
      return 0
    }
   }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/"element={
                <>

                <Navbar />
                <Sidebar 
                handleOnToggle={handleOnToggle} 
                isOpen={isOpen} 
                shoppingCart={shoppingCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                handleAddItemToCart={handleAddItemToCart}   
                             isEmpty={isEmpty}
                />


                
                
                <Home products={products}
                      
                      error={error}
                      isFetching={isFetching}

                      searchText={searchText}
                      handleOnSearchTextChange={handleOnSearchTextChange}
                      category={category}
                      setCategory={setCategory}
                      shoppingCart={shoppingCart}
                      GetQuantity={GetQuantity}

                      quantity={quantity}
                      removeFromCart={handleRemoveItemFromCart}
                      addToCart={handleAddItemToCart}
                />
                </>
              }
            />
            <Route
              path="/products/:productID"
              element={
                <>
                  <Navbar />
                  <Sidebar 
                    handleOnToggle={handleOnToggle}
                    isOpen={isOpen}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    handleAddItemToCart={handleAddItemToCart}
                    isEmpty={isEmpty}/>

                  <ProductView
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  handleAddItemToCart={handleAddItemToCart}
                  shoppingCart={shoppingCart}


                  />
                  
                </>
              }
           />
          <Route path="*" element={<NoPage/>}> </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

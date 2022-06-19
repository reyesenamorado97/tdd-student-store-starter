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
  // Add handle add to cart stuff!

  

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/"element={
                <>

                <Navbar />
                <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen}/>


                
                
                <Home products={products}
                      
                      error={error}
                      isFetching={isFetching}

                      searchText={searchText}
                      handleOnSearchTextChange={handleOnSearchTextChange}
                      category={category}
                      setCategory={setCategory}
                />

                
                </>
              }
            />
            <Route
              path="/products/:productID"
              element={
                <>
                  <Navbar />
                  <Sidebar />
                  <ProductView/>
                  
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

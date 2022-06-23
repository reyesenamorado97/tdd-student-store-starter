import * as React from "react"
import Hero from "../Hero/Hero"
import Subbar from "../Subbar/Subbar"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"


import { useEffect } from "react";
import {useLocation} from "react-router-dom"

import "./Home.css"


export default function Home( {
  products,
   isFetching,
    searchText, 
    handleOnSearchTextChange,
     category,
      setCategory,
    addToCart,
    removeFromCart,
    quantity,
    shoppingCart,
    GetQuantity



}){

  // NAV routing
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (evt) {
        evt.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location.hash])



  return (

    
    
    <div className="home">


<Hero>

</Hero>

<Subbar  searchText={searchText} handleOnSearchTextChange={handleOnSearchTextChange} products={products} 
category={category}
setCategory={setCategory} >
    
</Subbar>

<ProductGrid  
  isFetching={isFetching} 
  products={products} 
  searchText={searchText} 
  category={category}
  quantity={quantity}
  addToCart={addToCart}
  removeFromCart={removeFromCart}
  shoppingCart={shoppingCart}
  GetQuantity={GetQuantity}


  />

<About>

</About>

<Contact>

</Contact>

<Footer>

</Footer>
    

    </div>
  )
}

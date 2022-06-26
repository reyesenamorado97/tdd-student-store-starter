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
import ProductDetail from "../ProductDetail/ProductDetail"


//-------------------------------------------


export default function App() {

  // Initialize State Variables
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState("Error!")
  const [isOpen, setIsOpen] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState({name: "", email: ""})
  const [searchText, setSearchText] = useState("")
  const [category, setCategory] = useState("all")
  const [isEmpty, setIsEmpty] = useState(false)
  const [submitted, setSubmitted] = useState(0)



  //-------------------------------------------
  useEffect(() => {
    setIsFetching(true)

    
        axios.get("http://localhost:3001/store")

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

  const handleOnCheckoutFormChange = (event) => {
    setCheckoutForm({...checkoutForm, [event.target.name]: event.target.value})
    console.log(checkoutForm)
  }
  
  const handleOnSubmit = () => {

    {checkoutForm.name == "" || checkoutForm.email == "" &&
    console.log("no submit");
      
   
}
    axios.post("http://localhost:3001/store", {user: checkoutForm, shoppingCart })
    .then((response) => {setCheckoutForm(checkoutForm)
      setSubmitted(1)
    
    })
.catch((error)=>{setError(error)
  setSubmitted(-1)
  console.log(submitted)

})
setCheckoutForm({
  name: "",
  email: "",
});
setShoppingCart([])

return(<div className="error">
             <p>Please ensure the the correct forms are filled!
             </p>
          </div>
)
  }
  
  const handleOnToggle = ( ) => {setIsOpen(!isOpen)}

  // CREDIT TO Kiara!
  const handleAddItemToCart = (productId) => {

  
    let addItem = false;

    const newItem = {
      itemId: productId,
      quantity: 1
    }
    if (shoppingCart.length != 0) {
      addItem =  shoppingCart.some(item => (item.itemId === productId))
    
    if (addItem){

const newState = shoppingCart.map((item) =>{

  if (item.itemId === productId){
    return {...item, quantity: ++item.quantity}
  }
  return item
}) 
setShoppingCart(newState)

}else {

setShoppingCart([...shoppingCart, newItem]);

}
    }
    else{

      setShoppingCart([newItem])

    }
    }
  
  
 // CREDIT TO Kiara!
function handleRemoveItemFromCart (productId) {
  
  let containsItem = shoppingCart.some(item => (item.itemId == productId));
    let removeItem = false;

    if (containsItem) {
      let newState = shoppingCart.map((item) => {
        if (item.itemId == productId) {
          if (item.quantity-1 == 0) {
          removeItem = true;
          return item;
        }
        return {...item, quantity: --item.quantity};
        }
        return item;
     })
    if (removeItem){
     newState = newState.filter(item => item.itemId !=
      productId);
    }
    setShoppingCart(newState);

    }
}

  const GetQuantity = () =>{
    if (shoppingCart.length !=0 ){
       shoppingCart.map((element) => {
        products.map((product) => {

          if (element.itemId == product.id) {
              console.log(element.quantity)

              return element.quantity

          }
        })

         }
         )
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
                             setShoppingCart={setShoppingCart}
                             products={products}
                             handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    checkoutForm={checkoutForm}
                    handleOnSubmit={handleOnSubmit}
                    submitted={submitted}

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

                      removeFromCart={handleRemoveItemFromCart}
                      addToCart={handleAddItemToCart}
                      setShoppingCart={setShoppingCart}
                      handleOnSubmit={handleOnSubmit}

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
                    isEmpty={isEmpty}
                    setShoppingCart={setShoppingCart}
                    products={products}
                    shoppingCart={shoppingCart}
                    handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    checkoutForm={checkoutForm}
                    handleOnSubmit={handleOnSubmit}
                    submitted={submitted}


                    />


                  <ProductDetail
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  handleAddItemToCart={handleAddItemToCart}
                  shoppingCart={shoppingCart}
                  GetQuantity={GetQuantity}
                setError = {setError}

                  />
                  
                </>
              }
           />
          <Route path="*" element={<NoPage></NoPage>}> </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

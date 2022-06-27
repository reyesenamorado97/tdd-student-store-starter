import * as React from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


import "./Sidebar.css"

export default function Sidebar({
  isOpen,
  handleOnToggle,
  handleRemoveItemFromCart,
  handleAddItemToCart,
  isEmpty,
  shoppingCart,
  products,
  setShoppingCart,
  handleOnCheckoutFormChange,
  checkoutForm,
  handleOnSubmit,
  submitted,
  receipt,
  


  
})

{  

  console.log(receipt)
  return (
    <section className={`sidebar ${isOpen ? 'open' : 'closed'}`}>

      <div className="wrapper">


        <button className={`toggle-button button ${isOpen ? 'open' : 'closed'}`} >
          <i className="material-icons md-48" onClick={() => {
            handleOnToggle(isOpen);
            }}>
            arrow_forward
          </i>
          
        </button>


          <ShoppingCart 
          isOpen={isOpen}
          handleOnToggle={handleOnToggle}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          handleAddItemToCart={handleAddItemToCart}
          isEmpty={isEmpty}
          shoppingCart={shoppingCart}
          products={products}
          setShoppingCart={setShoppingCart}
          handleOnSubmit={handleOnSubmit}
          handleOnCheckoutFormChange={handleOnCheckoutFormChange}
          checkoutForm={checkoutForm}
          submitted={submitted}
          receipt={receipt}


          
          >
          </ShoppingCart>
          <div>
        </div>
      </div>
    </section>
  )
}




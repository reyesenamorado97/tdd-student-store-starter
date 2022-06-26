import "./ShoppingCart.css"
import { useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";



export default function ShoppingCart({
    isOpen,
    handleOnToggle,
    handleRemoveItemFromCart,
    handleAddItemToCart,
    isEmpty,
    setShoppingCart,
    products,
    shoppingCart,
    handleOnSubmit,
    checkoutForm,
    handleOnCheckoutFormChange,
    submitted
  })
  {  

    // State variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [clickedCheckout, setClickedCheckout] = useState(false);


    // Handlers
    const handleCheckBox = (event) => {
        if (event.target.checked) {
            setIsChecked(true);
        }
        else {
            setIsChecked(false)
        }
      };

      function handleOnCheckout() {
        setClickedCheckout(!clicked);
        if (clicked == true && (name.length < 1 || email.length < 1)) {

        } else if (clicked == true && (name.length > 0 || email.length > 0)) {

        }
      }

      var purchasedCart = []


      if (shoppingCart != undefined && products != undefined){
      for (let i = 0; i < shoppingCart.length; i++) {
        products.map((element) => {
          if (element.id == shoppingCart[i].itemId) {
            purchasedCart.push({
              name: element.name,
              price: element.price,
              quantity: shoppingCart[i].quantity,
            });
          }
        });
      }
    }

    if (shoppingCart != undefined){
      console.log("Purchased stuff..." + purchasedCart);
    }

    var clicked = false

    
      let subtotal = 0
    

        for(let i = 0; i< shoppingCart.length; i++){
         console.log (shoppingCart[i].itemId  )
            subtotal += (shoppingCart[i].quantity * products[shoppingCart[i].itemId-1].price) 
        }

       let taxesAndFees = subtotal * 0.0875
        
        let total = taxesAndFees + subtotal


return (


<div className={`shopping-cart ${isOpen ? 'open' : 'closed'}`}>
              

              <div className="cart-icons">
        
                <span className={`cart-icon icon button `}>
                
                <div className="open"> 
                  {isOpen && shoppingCart.length !=0 && <h3 className="banner">Shopping Cart
                  <i  className="material-icons md48">
                    add_shopping_cart
                  </i>
  
  
                  </h3> 
  }
                  
                  {!isOpen &&
                  <i  className="material-icons md48">
                    add_shopping_cart  
                  </i>
                  }
                {isOpen && shoppingCart.length !=0 &&
               
               <div className="CartTable">

               <div className="header">
                   <div className="header-row">
                       <span className="flex-2">Name</span>
                       <span className="center">Quantity</span>
                       <span className="center">Unit Price</span>
                       <span className="center">Cost</span>
                   </div>

                   {shoppingCart.map((item, key) => {
                       console.log(item.itemId)
                     return (
                         <div key={key} className="product-row">

                     <span key={key}>
                     <span className="flex-2 cart-product-name">{products[item.itemId-1].name}</span>
                     <span className='cart-product-quantity'>{item.quantity}</span>
                     <span className='center cart-product-price'>${products[item.itemId-1].price.toFixed(2)}</span>
                     <span className='center subtotal'>${(products[item.itemId-1].price * item.quantity).toFixed(2)}</span>

                     </span>
                     </div>

                     )
                 
                     })}
                 </div>

                     
                 
                         <div className='receipt'>
                             <div className='receipt-subtotal'>
                                 <span className='label'>Subtotal</span>
                                 <span></span>
                                 <span></span>
                                 <span className='center subtotal'>${subtotal.toFixed(2)}</span>

                             </div>
                             <div className='receipt-subtotal'>
                                 <span className='label'>Taxes and Fees</span>
                                 <span></span>
                                 <span></span>
                                 <span className='center subtotal'>${taxesAndFees.toFixed(2)}</span>

                             </div>
                             <div className='total-price'>
                                 <span className='label'>Total</span>
                                 <span></span>
                                 <span></span>
                                 <span className='center subtotal'>${total.toFixed(2)}</span>

                             </div>
                         </div>     

             
                 </div>  

  }

                  {isOpen && shoppingCart.length == 0 &&
                  <div className="notification">
                    No items added to cart yet. Start shopping now!
                  </div>}
  
                  
                  
                </div>
                </span>
                
  
                <span className="cart-icon icon button">
                {isOpen && 
                  <div className="checkout-form">
                    <h3>Payment Info &nbsp;
                  <i className="material-icons md48">
                    monetization_on
                  </i>
                  </h3>
                </div>}
                {!isOpen &&
                <i className="material-icons md48">
                    monetization_on
                  </i>
  }
                </span>
                
               
  <CheckoutForm
  isOpen={isOpen}
  shoppingCart={shoppingCart}
  checkoutForm={checkoutForm}
  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
  handleOnSubmit={handleOnSubmit}
  isEmpty={isEmpty}
  >


  </CheckoutForm>
                
  
                
                
  
                <span className="cart-icon icon button">
                {isOpen && 
                  <div className="checkout-form">
                    <h3>Checkout Info &nbsp;
                  <i className="material-icons md48">
                  fact_check
                  </i>
                  </h3>
                </div>}
                {!isOpen &&
                <i className="material-icons md48">
                    fact_check
                  </i>
  
                  
  
    
                } 
                </span>
  
                {isOpen && !submitted &&
                <div className="content7">
  
                A confirmation email will be sent to you so that you can confirm this order. 
                Once you have confirmed the order, it will be delivered to your dorm room.
                </div>
  
                }

                {isOpen && submitted == 1 &&
                                <div className="success">
                                 Success! Thank you for your submission.
                                </div>

                }

                {isOpen && submitted == -1 &&
                                <div className="error">
                                 Failure! Please enter both a name and email!
                                </div>

                }

                
  
              </div>
            </div>
            
  )}
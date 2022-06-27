
import "./CheckoutForm.css"
import { useState } from "react";


export default function CheckoutForm({
    isOpen,
    shoppingCart,
    checkoutForm,
    handleOnCheckoutFormChange,
    handleOnSubmit,
    isEmpty
  })
  {

return(

                <div className="checkout-form">

                  

{isOpen && 
                <div className="input-field">

                  <label className="label">Name</label>
                  <div className="control">
                    <input 
                     className="checkout-form-input"
                     name="name" 
                     type="text" 
                     placeholder="Student Name"
                     onChange={handleOnCheckoutFormChange}
                     value={checkoutForm.name}
                     />
                  </div>
  
                </div>
  
                }


  
                {isOpen && 
                  <div className="input-field2">
                    <label className="label">Email</label>
                    <div className="control2">
                      <input 
                      className="checkout-form-input"
                      name="email" 
                      type="email" 
                      placeholder="student@codepath.org"
                      onChange={handleOnCheckoutFormChange}
                      value={checkoutForm.email}
                      />
                    </div>
  
                  </div>
  
                }

{isOpen && 
                    <div className="field">
                      <div className="control3">
                        <input 
                        className="checkbox"
                        name="termsAndConditions" 
                        type="checkbox" 
                        onChange={console.log("hi")}
                        />
                        <span>I agree to the &nbsp;
                         <a href="#terms-and-conditions">terms and conditions</a> 
                          </span>
                      </div>
    
                    </div>
                        }

{isOpen &&
                <div className="field2">
                  <div className="control4">
                    { shoppingCart.length != 0 &&
                    <button className="checkout-button" onClick={() => {
                      handleOnSubmit();
                      }}>Checkout</button>
                    }
                    { shoppingCart.length == 0 &&
                    <div className="is-danger"> No cart or items in cart found to checkout</div>
                    }
                  </div>
                </div> 
                }

                    </div>
)
    }
import * as React from "react"


import "./Sidebar.css"

export default function Sidebar({
  isOpen,
  handleOnToggle,
  handleRemoveItemFromCart,
  handleAddItemToCart,
  isEmpty

})

{  


  var clicked = false

  function handleOnCheckout(isEmpty, clicked) {
    if (!isEmpty){
      clicked = false
  
    }
    else{
      clicked = true
      return  <div className="is-danger"> No cart or items in cart found to checkout</div>
      
    }
    }
  return (
    <section className={`sidebar ${isOpen ? 'open' : 'closed'}`}>

      <div className="wrapper">


        <button className={`toggle-button button ${isOpen ? 'open' : 'closed'}`} >
          <i className="material-icons md-48" onClick={() => {
            handleOnToggle(isOpen);
            handleRemoveItemFromCart();
            }}>
            arrow_forward
          </i>
          
        </button>

          <div className={`shopping-cart ${isOpen ? 'open' : 'closed'}`}>
              
            <div className="cart-icons">
            
            

              <span className={`cart-icon icon button `}>
              
              <div className="open"> 
                {isOpen ? <h3 className="banner">Shopping Cart
                <i  className="material-icons md48">
                  add_shopping_cart
                </i>


                </h3> 
                
                
                : 
                <i  className="material-icons md48">
                  add_shopping_cart

                 
                </i>
                }

                {isOpen && isEmpty &&
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
              
              {isOpen && 
              <div className="input-field">
                <label className="label">Name</label>
                <div className="control">
                  <input 
                   className="checkout-form-input"
                   name="name" 
                   type="text" 
                   placeholder="Student Name"
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
                    type="text" 
                    placeholder="student@codepath.org"
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
                  { !isEmpty &&
                  <button className="button2" onClick={handleOnCheckout}>Checkout</button>
                  }
                  { isEmpty &&
                  <div className="is-danger"> No cart or items in cart found to checkout</div>
                  }
                </div>
              </div> 
              }

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

              {isOpen &&
              <div className="content7">

              A confirmation email will be sent to you so that you can confirm this order. 
              Once you have confirmed the order, it will be delivered to your dorm room.
              </div>

              }

            </div>
          </div>
          <div>
        </div>
      </div>
    </section>
  )
}




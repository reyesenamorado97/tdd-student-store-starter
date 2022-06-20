import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({
  isOpen,
  handleOnToggle

}) {
  console.log(isOpen)
  return (
    <section className={`sidebar ${isOpen ? 'open' : 'closed'}`}>

      <div className="wrapper">


        <button className={`toggle-button button ${isOpen ? 'open' : 'closed'}`} >
          <i className="material-icons md-48" onClick={() => handleOnToggle(isOpen)}>
            arrow_forward
          </i>
        </button>

          <div className={`shopping-cart closed`}>

            <div className="cart-icons">
              <span className="cart-icon icon button">
                <i  className="material-icons md48">
                  add_shopping_cart
                </i>
              </span>

              <span className="cart-icon icon button">
                <i className="material-icons md48">
                  monetization_on
                </i>
              </span>

              <span className="cart-icon icon button">
                <i className="material-icons md48">
                  fact_check
                </i>
              </span>

            </div>
          </div>
          <div>
        </div>
      </div>
    </section>
  )
}

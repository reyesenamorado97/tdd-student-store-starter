import "./Hero.css"
import Icon from "../../assets/store_icon.svg"

export default function Hero() {
    return (
        <div className="Hero">

            <div className="container">

                <div className="info">
                    <h1>Welcome! <br /> 
                        Find your merch!
                    </h1>
                    <p>We have all kinds of goodies. Click on any of the items to 
                        start filling up your  <br /> 
                        shopping cart. Checkout whenever you're ready.
                    </p>

                </div>

                <div className="media">
                    <img className="store-icon" src={Icon} alt="store icon" />
                   

                </div>

                
            </div>



        </div>


    )
}

import "./Subbar.css"
import {Link} from "react-router-dom";
import {useState} from "react"



export default function Subbar({searchText, handleOnSearchTextChange, category, setCategory }) {

    const [isOpened, setOpen] = useState(true)

    const handleOpening = () => {
        if (isOpened) {
            setOpen(false)
        }
        else {
            setOpen(true)
        }
    }
    
    return (
        <nav className="subbar">

            <div className="container">

                <div className="row">
                    <div className="search-bar">
                        <input 
                        type="text"  
                        name="search" 
                        placeholder="Search" 
                        value={searchText} 
                        onChange={handleOnSearchTextChange}
                    />
                        <i className="material-icons">search</i>         
                    </div>

                    <div className="links">
                        <span className="help">
                            <i className="material-icons">
                                help
                            </i>
                            Help
                        </span>

                        <div className="cart">
                            <Link to="/">
                                My Cart &nbsp; 
                                <i className="material-icons"> shopping_cart</i>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="hamburger-menu">
                        <i className="material-icons" onClick={() => handleOpening()}>menu</i>
                    </div>
                    
                    <ul className={`category-menu ${isOpened ? `open` : `closed`}`}>

                        <li><button className={category === "all" ? "highlight" : "not__highlight" } onClick={() => setCategory("all")} >All Categories</button></li>
                        <li><button className={category === "clothing" ? "highlight" : "not__highlight" } onClick={()=> setCategory("clothing")}>Clothing</button></li>
                        <li><button className={category === "food" ? "highlight" : "not__highlight" } onClick={()=> setCategory("food")}>Food</button></li>
                        <li><button className={category === "accessories" ? "highlight" : "not__highlight" } onClick={()=> setCategory("accessories")}>Accessories</button></li>
                        <li><button className= {category === "tech" ? "highlight" : "not__highlight" }onClick={()=> setCategory("tech")}>Tech</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
import Home from "../Home/Home";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductView from "../ProductView/ProductView";
import Subbar from "../Subbar/Subbar"

import "./NoPage.css"


function NoPage({
    
    handleOnSearchInputChange,
    searchInputValue,
  }) {
    return (
    <div className="only">
     
        <h1>404 ERROR</h1>
        <p>Oopsie! Page not found!</p>
    </div>
    )
};

export default NoPage;
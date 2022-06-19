import Subbar from "../Subbar/Subbar"

import "./NoPage.css"


function NoPage({
    
    handleOnSearchInputChange,
    searchInputValue,
  }) {
    return (
    <div className="only">
        <Subbar
        user={user}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        handleOnSearchInputChange={handleOnSearchInputChange}
        searchInputValue={searchInputValue}
      />
        <h1>404 ERROR</h1>
        <p>Oopsie! Page not found!</p>
    </div>
    )
};

export default NoPage;
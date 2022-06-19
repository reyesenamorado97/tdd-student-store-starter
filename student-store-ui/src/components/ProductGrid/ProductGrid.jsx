import ProductCard from "../ProductCard/ProductCard"
import   "./ProductGrid.css"

export default function ProductGrid({products, searchText, category}) {

    return (

        <div id="Buy" className="product-grid">
            <div className="content">
                <h3>Best Selling Products</h3>

                <div className="grid">

                      { products.filter((product) => {
                         if (category == "food" && product.category == "food") {
                            return product
                        }
                        if (category == "clothing" && product.category == "clothing") {
                            return product
                        }
                        if (category == "accessories" && product.category == "accessories") {
                            return product
                        }
                        if (category == "tech" && product.category == "tech") {
                            return product
                        }
                        else if (category == "all") {
                            return product
                      }       
                        })
                      
                      .filter((product) => {

                        if (searchText == "") {

                            return product
                        }
                        else if (product.name.toLowerCase().includes(searchText.toLowerCase())) {

                            return product
                        }
                    }).map((product) => {
                        return(
                            
                            <ProductCard
                                product={product}
                                key={product.id}
                            />
                        )
                       })
                  }
                </div>
            </div>
        </div>
    )
}
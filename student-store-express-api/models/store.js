const {storage} = require("../data/storage")

class Store {

    static async listProducts() {
        const products = storage.get("products").value()
        return products
    }
}

module.exports = Store
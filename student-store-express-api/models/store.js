const { BadRequestError } = require("../utils/errors")
const {storage} = require("../data/storage")

class Store {

    static async listProducts() {
        const products = storage.get("products").value()
        return products
    }

    static async listReceipts() {
      // list all items in the receipts array
      const receipts = storage.get("purchases").value()
      return receipts
    }


    static async fetchProductById(productId) {
        // fetch a single transaction
        const product = storage
          .get("products")
          .find({ id: Number(productId) })
          .value()
        return product
      }

      static async recordReceipt(user, shoppingCart) {

       
        // create a new receipt
        const receipts = await Store.listReceipts()
        const receiptID = receipts.length + 1
        const buyTime = new Date().toISOString()

        const newReceipt = {receiptID, buyTime, user, shoppingCart }

      
        storage.get("purchases").push(newReceipt).write()

        return newReceipt
         
        }

     
  }


module.exports = Store
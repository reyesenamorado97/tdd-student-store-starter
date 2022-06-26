const express = require("express")
const Store = require("../models/store")
const router = express.Router()
const data = require("../data/db.json")
const { NotFoundError } = require("../utils/errors")



// health check
router.get("/", async  (req, res, next) => {
  res.status(200).json({ping: "pong"})
})


router.get("/store",  (req, res, next) => {
      res.status(200).json(data)
})

router.get("/store/:productId", async (req, res, next) => {
    try {
        const productID = req.params.productId
        const product = await Store.fetchProductById(productID)
        if (!product) {
          throw new NotFoundError("Product not found")
        }
        res.status(200).json({ product })
      } catch (err) {
        next(err)
      }
})

// create new receipt
router.post("/store", async (req, res, next) => {

  try  {
    
    const user = req.body.user
    const shoppingCart = req.body.shoppingCart
    console.log = (user)
    if (user.name != "" && user.email != "") {
    const newReceipt = await Store.recordReceipt(user, shoppingCart)
    res.status(201).json({ "purchases": newReceipt })
    }
    else {
      throw new NotFoundError("name not found")
    }
  
  } catch (err) {

    console.log("newReceipt")
    next(err)
  }
})



module.exports = router;
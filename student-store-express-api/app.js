const express = require("express");
const morgan = require("morgan");

//const storeRouter = require("./routes/store");

const app = express();

app.use(express.json);
app.use(morgan("tiny"));
//app.use("/store", storeRouter);

// health check
app.get("/",  (req, res, next) => {
    res.status(200).json({ping: "pong"})
})



module.exports = app;


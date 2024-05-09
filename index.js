const express = require("express");
const { default: mongoose } = require("mongoose");
const productRouter = require("./router/product/route");
const app = express();

const mongoURI =
  "mongodb+srv://yoyovishalpathak2004:BsaYdQOHHMsh9qjt@base-code-cluster.oc55jml.mongodb.net/ServerCode?retryWrites=true&w=majority";

mongoose.connect(mongoURI).then(
  (v) => {
    app.use(express.json());
    app.use("/product", productRouter);
    app.listen(3000, () => {
      console.log("Listening to PORT 3000");
    });
  },
  (err) => {}
);

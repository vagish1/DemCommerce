const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    productDescription: {
      type: String,
      required: true,
    },

    productAttachments: [
      {
        type: String,
      },
    ],

    productOriginalPrice: {
      type: Number,
    },
    productSellingPrice: {
      type: Number,
    },
  },
  { collection: "ProductSchema", timestamps: true }
);

const ProductSchema = new mongoose.model("ProductSchema", productSchema);
module.exports = ProductSchema;

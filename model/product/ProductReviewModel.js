const { default: mongoose } = require("mongoose");

const productReviewModel = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "ProductSchema",
    },

    rating: {
      type: Number,
      required: true,
    },

    review: {
      type: String,
      default: "",
    },

    attachment: [{ type: String }],
  },
  { collection: "ProductReviews", timestamps: true }
);

const ProductReview = new mongoose.model("ProductReviews", productReviewModel);

module.exports = ProductReview;

const ProductSchema = require("../model/product/ProductModel");
const ProductReview = require("../model/product/ProductReviewModel");
const ReturnCode = require("../utils/ReturnCode");
const UtilController = require("./UtilController");

module.exports = {
  createProduct: async (req, res, next) => {
    try {
      const body = req.body;
      const product = ProductSchema(body);
      await product.save();

      UtilController.sendSuccess(res, {
        result: product,
      });
    } catch (err) {
      UtilController.sendError(res, {
        message: err.message,
        // details: err.details || err,
      });
    }
  },

  getProduct: async (req, res, next) => {
    try {
      console.log(req.params);
      const recordId = req.query.productId;

      const productDetails = await ProductSchema.findById(recordId);

      if (UtilController.isEmpty(productDetails)) {
        UtilController.sendSuccess(res, {
          message: "No Record Found",
          returnCode: ReturnCode.noRecord,
        });
        return;
      }

      const reviews = await ProductReview.find({
        productId: recordId,
      }).select("-createdAt -updatedAt -__v -productId");

      UtilController.sendSuccess(res, {
        result: {
          reviews: reviews,
          productDetails: productDetails,
        },
      });
    } catch (err) {
      UtilController.sendError(res, {
        message: err.message,
        // details: err.details || err,
      });
    }
  },

  createReview: async (req, res, next) => {
    try {
      const body = req.body;
      const product = ProductReview(body);
      await product.save();

      UtilController.sendSuccess(res, {
        result: product,
      });
    } catch (err) {
      UtilController.sendError(res, {
        message: err.message,
        // details: err.details || err,
      });
    }
  },
};

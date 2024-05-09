const ReturnCode = require("../utils/ReturnCode");

module.exports = {
  sendSuccess: async (res, data, statusCode = 200) => {
    res.status(statusCode).json({
      message: "Success",
      code: ReturnCode.success,
      data: data,
    });
  },

  sendError: async (res, data, statusCode = 500) => {
    res.status(statusCode).json({
      message: "Failure",
      code: ReturnCode.failure,
      data: data,
    });
  },

  isEmpty: (data) => {
    return data === null || data === undefined || data.length === 0;
  },
};

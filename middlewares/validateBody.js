const { HttpError } = require("../helpers/HttpError");

const validateBody = (schema) => {
  return async (req, res, next) => {
    const { error } = schema(req.body, schema);
    if (error) next(HttpError(400, error.message));
    next();
  };
};

module.exports = validateBody;

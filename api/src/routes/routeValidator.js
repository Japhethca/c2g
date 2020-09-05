const joi = require("joi");

module.exports = function validatorMiddleWare(schema) {
  return (req, res, next) => {
    let hasError = false;
    Object.keys(schema).forEach((field) => {
      const result = schema[field].validate(
        { ...req[field] },
        {
          presence: "required",
          abortEarly: true,
          language: {
            key: `[{{key}}] in request ${field} `,
          },
          convert: true,
        }
      );
      if (result.error) {
        hasError = true;
        const errors = result.error.details.map((error) => error.message);
        res.status(422).json({
          message: `Validation Error in request ${field}`,
          errors,
        });
      }
    });

    if (hasError) {
      return hasError;
    }
    return next();
  };
};

const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().required(),
});

const updateFavoritesSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  contactSchema,
  updateFavoritesSchema,
};

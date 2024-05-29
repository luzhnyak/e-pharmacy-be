import Joi from "joi";

// ========================== Joi schemas

const productSchema = Joi.object({
  name: Joi.string().required(),
  suppliers: Joi.string(),
  stock: Joi.string(),
  price: Joi.string(),
  category: Joi.string(),
  photo: Joi.string(),
});

export default { productSchema };

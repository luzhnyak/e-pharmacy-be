import Joi from "joi";

// ========================== Joi schemas

const orderSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  photo: Joi.string().required(),
  price: Joi.number(),
  products: Joi.number(),
  status: Joi.string().required(),
  order_date: Joi.string().required(),
});

export default { orderSchema };

const Joi = require('joi'); 


module.exports.comicSchema = Joi.object({
    name: Joi.string().required().messages({
        'any.required': "Please enter a comic book name", 
        'string.empty': "Comic book name cannot be empty" 
    }),
    author: Joi.string().required().messages({
        'any.required': "Please enter the author's name",
        'string.empty': "Author's name cannot be empty"
    }),
    year: Joi.number().integer().min(1900).max(new Date().getFullYear()).required().messages({
        'any.required': "Please enter the year of publication",
        'number.base': "Year must be a number",
        'number.min': "Year must be at least 1900",
        'number.max': `Year cannot be greater than ${new Date().getFullYear()}`
    }),
    price: Joi.number().required().min(0).messages({
        'any.required': "Please enter the price",
        'number.base': "Price must be a number",
        'number.min': "Price cannot be negative"
    }),
    discount: Joi.number().min(0).max(100).optional().messages({
        'number.base': "Discount must be a number",
        'number.min': "Discount cannot be negative",
        'number.max': "Discount cannot exceed 100"
    }),
    pages: Joi.number().required().min(1).messages({
        'any.required': "Please enter the number of pages",
        'number.base': "Pages must be a number",
        'number.min': "Pages must be at least 1"
    }),
    condition: Joi.string().valid('new', 'used').required().messages({
        'any.required': "Condition is required",
        'any.only': "Condition must be either 'new' or 'used'"
    }),
    description: Joi.string().optional(),
   
}); 

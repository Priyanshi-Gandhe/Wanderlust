const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string(),
        description: Joi.string(),
        location: Joi.string(),
        country: Joi.string(),
        price: Joi.number().min(0),
        image: Joi.string().allow("", null),
    }),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number(),
        comment: Joi.string(),
    }),
});
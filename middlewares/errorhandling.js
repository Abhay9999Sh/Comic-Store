// middlewares/validationMiddleware.js
const { comicSchema } = require("../schema"); // Adjust the path as necessary

exports.validateCreate = (req, res, next) => {
    const { error } = comicSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }
    next();
};

exports.validateUpdate = (req, res, next) => {
    const { error } = comicSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }
    next();
};

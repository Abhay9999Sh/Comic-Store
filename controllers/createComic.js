const Comic = require("../models/comic");

exports.createComic = async (req, res, next) => {
    try {
        const comic = await Comic.create(req.body);
        res.status(201).json({
            success: true,
            data: comic,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};



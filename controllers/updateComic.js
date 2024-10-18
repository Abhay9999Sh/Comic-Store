const Comic = require("../models/comic");

exports.updateComic = async (req, res, next) => {
    try {
        const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!comic) {
            return res.status(404).json({
                success: false,
                message: "Comic book not found",
            });
        }

        res.status(200).json({
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



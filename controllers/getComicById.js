const Comic = require("../models/comic");

exports.getComicById = async (req, res, next) => {
    try {
        const comic = await Comic.findById(req.params.id);

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
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};



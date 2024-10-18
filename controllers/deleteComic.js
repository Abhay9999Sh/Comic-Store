const Comic = require("../models/comic");

exports.deleteComic = async (req, res, next) => {
    try {
        const comic = await Comic.findByIdAndDelete(req.params.id);

        if (!comic) {
            return res.status(404).json({
                success: false,
                message: "Comic book not found",
            });
        }

        res.status(200).json({
            success: true,
            data: null,
            message: "Comic book deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};



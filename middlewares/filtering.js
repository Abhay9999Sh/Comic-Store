// middlewares/filteringMiddleware.js
const Comic = require("../models/comic");

exports.filterComics = async (req, res, next) => {
    try {
        let query = Comic.find();

        const { author, year, condition, sort, page, limit } = req.query;

        if (author) {
            query = query.find({ author });
        }
        if (year) {
            query = query.find({ year });
        }
        if (condition) {
            query = query.find({ condition });
        }

        if (sort) {
            const sortBy = sort.split(',').join(' ');
            query = query.sort(sortBy);
        }

        const pageNumber = parseInt(page) || 1;
        const limitNumber = parseInt(limit) || 10;
        const skip = (pageNumber - 1) * limitNumber;

        query = query.skip(skip).limit(limitNumber);

        const comics = await query;

        req.comics = comics;
        req.pageInfo = {
            total: await Comic.countDocuments(),
            currentPage: pageNumber,
            totalPages: Math.ceil(await Comic.countDocuments() / limitNumber),
        };

        next();
    } catch (error) {
        console.error("Error in filtering comics:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error while filtering comics"
        });
    }
};

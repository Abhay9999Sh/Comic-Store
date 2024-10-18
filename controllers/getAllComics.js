const Comic = require("../models/comic");

exports.getAllComics = async (req, res, next) => {
    try {
       
        const isFiltered = Object.keys(req.query).length > 0;
       
        const limitedComics = req.comics.map((comic) => {
            
            if (!isFiltered) {
                return {
                    _id: comic._id,
                    name: comic.name,
                    author: comic.author,
                    year: comic.year,
                    price: comic.price,
                    description: comic.description,
                };
            }
           
            return {
                _id: comic._id,
                name: comic.name,
                author: comic.author,
                year: comic.year,
                price: comic.price,
                description: comic.description,
                condition: comic.condition,
                discount: comic.discount,
                pages: comic.pages,
                summary: comic.summary
            };
        });

        const totalComics = await Comic.countDocuments(req.queryObject || {});
  
        res.status(200).json({
            success: true,
            count: limitedComics.length,
            total: totalComics, 
            data: limitedComics, 
        });
    } 

    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

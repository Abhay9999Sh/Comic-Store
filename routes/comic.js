
const express = require("express");

const { createComic } = require("../controllers/createComic");
const { deleteComic } = require("../controllers/deleteComic");
const { updateComic } = require("../controllers/updateComic");
const { getAllComics } = require("../controllers/getAllComics");
const { getComicById } = require("../controllers/getComicById");


const { validateCreate, validateUpdate } = require("../middlewares/errorhandling");
const { filterComics } = require("../middlewares/filtering");

const router = express.Router();


router.route("/")
  .post(validateCreate, createComic)
  .get(filterComics, getAllComics);



router.route("/:id")
  .get(getComicById)
  .put(validateUpdate, updateComic)
  .delete(deleteComic);

  
module.exports = router;

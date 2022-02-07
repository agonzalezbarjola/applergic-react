const RatingRoutes = require("express").Router();
const { isAuth } = require("../../middleware/auth");
const { getRating, postRating } = require("../controllers/rating.controller");

RatingRoutes.get("/ratings", [isAuth], getRating);
RatingRoutes.post("/voterating", [isAuth], postRating);

module.exports = RatingRoutes;

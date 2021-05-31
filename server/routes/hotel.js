import express, { Router } from "express";
import formidable from "express-formidable";

const router = express.Router();

import { requireSignin, hotelOwner } from "../middlewares";
import {
  create,
  hotels,
  image,
  sellerHotels,
  remove,
  read,
  update,
  searchListings,
  createQuery,
  queries,
  readQuery,
  postBid,
  allTravelerQueries,
  seeBids,
} from "../controllers/hotel";

router.post("/create-hotel", requireSignin, formidable(), create);
router.get("/hotels", hotels);
router.get("/hotel/image/:hotelId", image);
router.get("/seller-hotels", requireSignin, sellerHotels);
router.delete("/delete-hotel/:hotelId", requireSignin, hotelOwner, remove);
router.get("/hotel/:hotelId", read);
router.put(
  "/update-hotel/:hotelId",
  requireSignin,
  hotelOwner,
  formidable(),
  update
);
router.post("/search-listings", searchListings);
router.post("/post-a-query", requireSignin, formidable(), createQuery);
router.get("/queries", queries);
router.get("/answer-query/:queryId", formidable(), readQuery);
router.post("/answer-query/:queryId", requireSignin, formidable(), postBid);
router.get("/traveler-active-queries", requireSignin, allTravelerQueries);
router.get("/see-bids", requireSignin, seeBids);

module.exports = router;

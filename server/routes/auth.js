import express from "express";
// const express = require("express");

const router = express.Router();

import {
  login,
  register,
  travelAgencyRegister,
  travelAgencyLogin,
  agencyProfileDetails,
} from "../controllers/auth";

router.post("/register", register);
router.post("/travel-agency-register", travelAgencyRegister);
router.post("/login", login);
router.post("/travel-agency-login", travelAgencyLogin);
router.get("/travel-agency/:userId", agencyProfileDetails);

// export default router;
module.exports = router;

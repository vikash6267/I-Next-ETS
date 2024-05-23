const express = require("express");
const { contactCtrl } = require("../controllers/contactCtrl");
const { careerCtrl } = require("../controllers/career");
const router = express.Router();



router.post("/contact", contactCtrl);
router.post("/career", careerCtrl);
module.exports = router;
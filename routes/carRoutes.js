const express = require("express");
const router = express.Router();
const { createCar } = require("../controllers/carController");
const auth = require("../middlewares/auth");
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // Configure Cloudinary or AWS S3

router.post("/", auth, upload.array("images", 10), createCar);

module.exports = router;

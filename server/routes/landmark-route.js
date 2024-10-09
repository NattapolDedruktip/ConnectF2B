const express = require("express")
const { createLandmark, getAllLandmark } = require("../controllers/landmark-controller")
const router = express.Router()

router.post("/createLandmark",createLandmark)
router.get("/getAllLandmark",getAllLandmark)

module.exports = router
const express = require("express")
const router = express.Router()

//import middleware
const {auth} = require("../middlewares/auth")

//Joi
const {registerValidator,loginValidator} = require("../middlewares/validator")

const authController = require("../controllers/auth-controller")

// @ENDPOINT http://localhost:5000/api/register
// @ACCESS public

router.post("/register", registerValidator ,authController.register)
router.post("/login", loginValidator ,authController.login)


// @ACCESS private
router.post("/current-user", auth ,authController.currentUser)

module.exports = router
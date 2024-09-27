const express = require("express")
const router = express.Router()

const {auth} = require("../middlewares/auth")

const {listMember,updateMemberById,deleteMemberById} = require("../controllers/member-controller")

// @ENDPOINT http://localhost:5000/api/member
// @ACCESS Private

// router.get("/member" , auth , listMember)
router.get("/member"  , listMember)

router.patch("/member/:memberId" , auth , updateMemberById)

router.delete("/member/:memberId" , auth , deleteMemberById)

module.exports = router
const { userData, getuser } = require("../controller/formController")
const { register, loginCheck } = require("../controller/userController")
const { feeddata, getfeed } = require("../controller/feedbackController")
// const {userData} = require("../controller/formController")

const router = require("express").Router()


router.post("/register", register)

router.post("/userData", userData)

router.post("/loginCheck", loginCheck)

router.get("/getuser", getuser)

router.post("/feeddata", feeddata)

router.get("/getfeed", getfeed)


router.get("*", (req,res)=>{
    res.send("check your url")
})


module.exports = router
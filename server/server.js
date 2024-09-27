//step 1 import...
const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const authRouter = require("./routes/auth-route")
const memberRouter = require("./routes/member-route")
const notFoundHandler = require("./middlewares/notFound")
const hdlError = require("./middlewares/error")



//step 3  middleWare
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


//step 4 Routing
app.use("/api",authRouter)
app.use("/api",memberRouter)

app.use(hdlError)
app.use("*",notFoundHandler)


//step 2 start server
app.listen(5000, () => console.log("create server at port 5000"))
const express = require("express")
require("dotenv").config()
const app = express()
const port= process.env.PORT || 5000
app.listen(port,console.log("服务器启动了")
)
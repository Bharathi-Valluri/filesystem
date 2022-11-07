const fs=require('fs')
const router = require('/home/bharathi/filesystem/source/router/router.js')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors=require('cors')

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

function run() {

    app.use("/", router)

    //run server
    app.listen(process.env.PORT, () => {
        console.log(`server is listining at ${process.env.PORT}`)
    })

}
run()

const file_controller =require('../controller/fileController')
const router = require('express').Router()

router.post('/generateFile',file_controller.creatingFile)
router.get('/readingThefile',file_controller.readingFile)
router.post('/movingTheFile',file_controller.movingFile)

module.exports =router

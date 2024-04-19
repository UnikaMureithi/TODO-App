const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

router.post('/', todoController.create)
router.get('/', todoController.read)

module.exports = router
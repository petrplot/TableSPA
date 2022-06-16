
const Router = require('express')
const router = new Router()
const productsController = require('../controllers/productsController')

//прием запросов и передача контроллеру
router.get('/', productsController.getAll)

module.exports = router
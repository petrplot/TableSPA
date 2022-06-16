const Router = require('express')
const router = new Router()
const productsRout = require('./productsRout')

//главный роутер для общей группы запросов
router.use('/products', productsRout)

module.exports = router
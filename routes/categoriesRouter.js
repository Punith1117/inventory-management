const Router = require('express')

const categoriesRouter = Router()

categoriesRouter.get('/', (req, res) => {
    res.render('header')
})

module.exports = categoriesRouter
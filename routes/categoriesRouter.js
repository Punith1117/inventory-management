const Router = require('express')

const categoriesRouter = Router()

categoriesRouter.get('/', (req, res) => res.send('All players'))

module.exports = categoriesRouter
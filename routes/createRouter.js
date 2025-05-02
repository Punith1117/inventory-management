const Router = require('express')
const db = require('../db/queries')
const createRouter = Router()

createRouter.get('/', (req, res) => {
    res.render('create')
})

createRouter.post('/', async (req, res) => {
    if (req.body.type == 'player') {
        await db.addNewPlayer(req.body.createValue)
    } else {
        await db.addNewExpertise(req.body.createValue)
    }
    res.redirect('/expertise')
})

module.exports = createRouter
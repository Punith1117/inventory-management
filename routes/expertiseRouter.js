const Router = require('express')
const db = require('../db/queries')
const expertiseRouter = Router()

expertiseRouter.get('/', async (req, res) => {
    const expertise = await db.getAllExpertise()
    const players = await db.getAllPlayers()
    res.render('allPlayers', {expertise: expertise, players: players})
})

module.exports = expertiseRouter
const Router = require('express')
const db = require('../db/queries')
const destroyRouter = Router()

destroyRouter.get('/', async (req, res) => {
    const players = await db.getAllPlayers()
    const expertise= await db.getAllExpertise()
    res.render('destroy', {expertise: expertise, players: players})
})

destroyRouter.post('/', async (req, res) => {
    if (req.body.expert_in == undefined) {
        await db.destroyPlayer(req.body.player)
    } else {
        await db.destroyExpertise(req.body.expert_in)
    }
    res.redirect('/expertise')
})

module.exports = destroyRouter
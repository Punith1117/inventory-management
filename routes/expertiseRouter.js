const Router = require('express')
const db = require('../db/queries')
const expertiseRouter = Router()

expertiseRouter.get('/', async (req, res) => {
    if ((req.query.expert_in == 'All') || (req.query.expert_in == undefined)) {        
        const expertise = await db.getAllExpertise()
        const players = await db.getAllPlayers()
        res.render('allPlayers', {expertise: expertise, players: players})
    } else {
        const allExpertise = await db.getAllExpertise()
        const players = await db.getPlayersExpertIn(req.query.expert_in)
        res.render('playersExpert_in', {expertise: req.query.expert_in, players: players, allExpertise: allExpertise})
    }
})

module.exports = expertiseRouter
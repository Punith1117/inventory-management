const Router = require('express')
const db = require('../db/queries')
const expertiseRouter = Router()

expertiseRouter.get('/:expert_in_id', async (req, res) => {
    const allExpertise = await db.getAllExpertise()
    const players = await db.getPlayersExpertIn(req.params.expert_in_id)
    const playersToAdd = await db.getPlayersNotExpertIn(req.params.expert_in_id)
    res.render('playersExpert_in', {expertise: players[0].expert_in, expert_in_id: players[0].expert_in_id, players: players, allExpertise: allExpertise, playersToAdd: playersToAdd})
})

expertiseRouter.get('/', async (req, res) => {
    if ((req.query.expert_in_id == 'All') || (req.query.expert_in_id == undefined)) {        
        const expertise = await db.getAllExpertise()
        const players = await db.getAllPlayers()
        res.render('allPlayers', {expertise: expertise, players: players})
    } else {
        res.redirect(`/expertise/${req.query.expert_in_id}`)
    }
})

module.exports = expertiseRouter
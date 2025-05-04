const Router = require('express')
const db = require('../db/queries')
const relationRouter = Router()

relationRouter.post('/:expert_in_id/add/', async (req, res) => {
    await db.addPlayerToExpertise(req.params.expert_in_id, req.body.player_id)
    res.redirect(`/expertise/${req.params.expert_in_id}`)
})

module.exports = relationRouter
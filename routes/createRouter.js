const Router = require('express')
const db = require('../db/queries')
const createRouter = Router()
const { body, validationResult } = require('express-validator');

createRouter.get('/', (req, res) => {
    res.render('create')
})

createRouter.post('/', body('createValue').trim().notEmpty().withMessage('Expertise/Player cannot be empty'), async (req, res) => {
    let result = validationResult(req)
    if (result.isEmpty()) {
        if (req.body.type == 'player') {
            await db.addNewPlayer(req.body.createValue)
        } else {
            await db.addNewExpertise(req.body.createValue)
        }
        res.redirect('/expertise')
    } else {
        res.render('error', {errors: result.array()})
    }
})

module.exports = createRouter
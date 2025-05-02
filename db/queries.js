const pool = require('./pool')

async function getAllExpertise() {
    const { rows } = await pool.query('SELECT * FROM expertise')
    return rows
}

async function getAllPlayers() {
    const { rows } = await pool.query('SELECT * FROM players')
    return rows
}

async function addNewPlayer(name) {
    await pool.query('INSERT INTO players (name) VALUES ($1)', [name])
}

async function addNewExpertise(expertise) {
    await pool.query('INSERT INTO expertise (expert_in) VALUES ($1)', [expertise])
}

module.exports = {
    getAllExpertise,
    getAllPlayers,
    addNewPlayer, 
    addNewExpertise
}
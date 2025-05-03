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

async function destroyPlayer(name) {
    await pool.query('DELETE FROM players WHERE name = ($1)', [name])
}

async function destroyExpertise(expert_in) {
    await pool.query('DELETE FROM expertise WHERE expert_in = ($1)', [expert_in])
}

module.exports = {
    getAllExpertise,
    getAllPlayers,
    addNewPlayer, 
    addNewExpertise,
    destroyPlayer,
    destroyExpertise
}
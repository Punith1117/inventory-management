const pool = require('./pool')

async function getAllExpertise() {
    const { rows } = await pool.query('SELECT * FROM expertise')
    return rows
}

async function getAllPlayers() {
    const { rows } = await pool.query('SELECT * FROM players')
    return rows
}

module.exports = {
    getAllExpertise,
    getAllPlayers
}
const pool = require('./pool')

async function getExpertise(expert_in_id) {
    const { rows } = await pool.query('SELECT * FROM expertise WHERE expert_in_id = ($1);', [expert_in_id])
    return rows
}

async function getPlayer(player_id) {
    const { rows } = await pool.query('SELECT * FROM players WHERE player_id = ($1);', [player_id])
    return rows
}

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

async function getPlayersExpertIn(expert_in_id) {
    const queryArray = [
        'SELECT expert_in, name, ep.expert_in_id, ep.player_id FROM expertise_player AS ep',
        'JOIN expertise AS e ON e.expert_in_id = ep.expert_in_id',
        'JOIN players AS p ON p.player_id = ep.player_id',
        'WHERE e.expert_in_id = ($1)',
        ';'
    ]
    const query = queryArray.join(' ')
    const { rows } = await pool.query(query, [expert_in_id])
    return rows
}

async function getPlayersNotExpertIn(expert_in_id) {
    const queryArray = [
        'SELECT name, player_id FROM players',
        'WHERE name NOT IN',
        '(SELECT name FROM expertise_player AS ep',
        'JOIN expertise AS e ON e.expert_in_id = ep.expert_in_id',
        'JOIN players AS p ON p.player_id = ep.player_id',
        'WHERE e.expert_in_id = ($1))',
        ';'
    ]
    const query = queryArray.join(' ')
    const { rows } = await pool.query(query, [expert_in_id])
    return rows
}

async function addPlayerToExpertise(expert_in_id, player_id) {
    await pool.query('INSERT INTO expertise_player (expert_in_id, player_id) VALUES ($1, $2)', [expert_in_id, player_id])
}

async function removePlayerFromExpertise(expert_in_id, player_id) {
    await pool.query('DELETE FROM expertise_player WHERE expert_in_id = ($1) AND player_id = ($2);', [expert_in_id, player_id])
}

module.exports = {
    getExpertise,
    getPlayer,
    getAllExpertise,
    getAllPlayers,
    addNewPlayer, 
    addNewExpertise,
    destroyPlayer,
    destroyExpertise,
    getPlayersExpertIn,
    getPlayersNotExpertIn,
    addPlayerToExpertise,
    removePlayerFromExpertise
}
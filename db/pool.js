const { Pool } = require("pg");
require('dotenv').config()

module.exports = new Pool({
    connectionString: process.env.EXTERNAL_DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    } // to be removed when deploying it on Render. It is required only when using external database url
});

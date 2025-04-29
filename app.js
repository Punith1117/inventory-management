const express = require('express')
require('dotenv').config()
const path = require("node:path");

const categoriesRouter = require('./routes/categoriesRouter')

const app = express()
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
const PORT = process.env.PORT

app.use('/categories', categoriesRouter)

app.get('/', (req, res) => {
    res.redirect('/categories')
})

app.listen(PORT, () => {
    console.log('App successfully running')
})
const express = require('express')
require('dotenv').config()
const categoriesRouter = require('./routes/categoriesRouter')

const app = express()
const PORT = process.env.PORT
app.use('/categories', categoriesRouter)
app.get('/', (req, res) => {
    res.redirect('/categories')
})

app.listen(PORT, () => {
    console.log('App successfully running')
})
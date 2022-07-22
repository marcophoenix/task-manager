const connectdb = require('./db/connect')
const express = require('express')

const task = require('./routes/task')
const { connect } = require('mongoose')
require('dotenv').config()
const app = express()
const notfound = require('./middleware/notfound')

app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks', task)

app.use(notfound)

// app.get('/hello', (req, res) => {
//     res.send('new task')
// })

const port = 3000
const start = async() => {
    try {
        await connectdb(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log('task server')
        })
    } catch (error) {
        console.log(error)
    }
}

start()
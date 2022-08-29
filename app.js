const express = require('express')
const http = require('http')
const cors = require('cors')
const {sequelize} = require('./models')
const userRouter = require('./routers/user')
const postRouter = require('./routers/post')

const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

//routers
app.use('/users', userRouter)
app.use('/posts', postRouter)

server.listen({port: 5000}, async () => {
    console.log("Server up on http://localhost:5000");
    // await sequelize.sync({ force: true }) //alter: true
    await sequelize.authenticate()
    console.log("Database connected!");
})


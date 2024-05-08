const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');
const app = express();

require('dotenv').config()

const PORT = process.env.PORT || 3004

app.use(cors());

//middlewares
app.use(express.json());

app.use(cors());

//routes
readdirSync('./routes').map((route)=> app.use('/api/v1/',require('./routes/'+ route)))

const server = () => {
    db()
    app.listen(PORT,()=>{
        console.log('listening to port:',PORT)
    })
} 

server()

//mongodb+srv://adityasrivastav863:iamaditya05@cluster0.bqful37.mongodb.net/?retryWrites=true&w=majority

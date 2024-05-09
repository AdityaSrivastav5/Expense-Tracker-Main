const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());

// Routes setup
const routesPath = './routes'; // Define the path to your routes directory

// Dynamically import routes
readdirSync(routesPath).map(route => app.use('/api/v1/', require(`${routesPath}/${route}`)));

// MongoDB connection
const server = () => {
    db();
    app.listen(PORT, () => {
        console.log('Listening to port:', PORT);
    });
};

server();
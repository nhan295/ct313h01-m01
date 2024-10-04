const express = require('express');
const cors = require('cors');

const app =express();

app.use(express.json());
app.use(cors());

app.get('/', (req,res) =>{
    res.json({message: 'Welcome to my API!'});
})

module.exports = app
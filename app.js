"use strict";

const PORT = 3000;
const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, error => {
    if (error) {
        console.log("Error running the server.", error);
    }
    console.log("Server is running on port", PORT);
});
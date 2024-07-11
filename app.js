const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First middleware');
//     next();
// });

// app.use ((req, res, next) => {
//     console.log('Second middleware');
//     res.send('<h1> Home page <h1>');
// });

app.use('/users', (req, res, next) => {
    res.send('<h1> This is users page<h1>');
})

app.use('/', (req, res, next) => {
    res.send('<h1> This is a home page (or any other page at this moment ^.^) <h1>');
})

app.listen(3000);
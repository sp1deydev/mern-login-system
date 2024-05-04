const express = require('express');
const app = express();


app.get('/', (req, res) => {
    console.log('get / in port 8080');
    res.send('Hi');
})


app.listen(8080);

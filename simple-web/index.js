const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('HI there');
});

app.listen(4200, () => {
    console.log('Listening on port 4200')
});
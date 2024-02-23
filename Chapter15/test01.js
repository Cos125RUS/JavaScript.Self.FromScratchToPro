const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen(4000, () => console.log('Express app at localhost:3000'));
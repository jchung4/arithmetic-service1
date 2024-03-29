const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = add(n, m);
        res.json(sum)
});

app.get('/subtract/:n/:m', (req, res) => {
    res.json(Number(req.params.n) - Number(req.params.m));
});

app.get('/multiply/:n/:m', (req, res) => {
    res.json(Number(req.params.n) * Number(req.params.m));
});

app.get('/divide/:n/:m', (req, res) => {
    if(Number(req.params.m) === 0) {
        res.json('Cannot divide by zero');
    } else {
        res.json(Number(req.params.n) / Number(req.params.m));
    }
});

app.listen(port);
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/:operator/:n/:m', (req, res) => {
    const { operator, n, m } = req.params;
    let result;
    switch (operator) {
        case '+':
            result = Number(n) + Number(m);
            break;
        case '-':
            result = Number(n) - Number(m);
            break;
        case '*':
            result = Number(n) * Number(m);
            break;
        case '/':
            if (Number(m) === 0) {
                result = 'Cannot divide by zero';
            } else {
                result = Number(n) / Number(m);
            }
            break;
        default:
            result = 'Invalid operator';
            break;
    }
    res.json(result);
});

app.listen(port);
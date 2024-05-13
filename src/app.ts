import express from 'express';
import { splitString, concatenateStrings, isLeapYear, secretHandshake } from './logic';

const app = express();
const port = 8000;

app.get('/split/:string', (req, res) => {
    const { string } = req.params;
    const revisedString = splitString(string);
    res.json({ revisedString });
});

app.get('/concatenation/:param1/:param2', (req, res) => {
    const { param1, param2 } = req.params;
    const revisedString = concatenateStrings(param1, param2);
    console.log(param1, "\n ", param2, "\n ", revisedString);
    res.json({ revisedString });
});

app.get('/leap/:year', (req, res) => {
    const year = parseInt(req.params.year);
    const isLeap = isLeapYear(year);
    res.json({ year, isLeap });
});

app.get('/secret-handshake/:decimalNumber', (req, res) => {
    try {
        const decimalNumber = parseInt(req.params.decimalNumber);
        const handshake = secretHandshake(decimalNumber);
        res.json({ decimalNumber, handshake });
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logic_1 = require("./logic");
const app = (0, express_1.default)();
const port = 8000;
app.get('/split/:string', (req, res) => {
    const { string } = req.params;
    const revisedString = (0, logic_1.splitString)(string);
    res.json({ revisedString });
});
app.get('/concatenation/:param1/:param2', (req, res) => {
    const { param1, param2 } = req.params;
    const revisedString = (0, logic_1.concatenateStrings)(param1, param2);
    console.log(param1, "\n ", param2, "\n ", revisedString);
    res.json({ revisedString });
});
app.get('/leap/:year', (req, res) => {
    const year = parseInt(req.params.year);
    const isLeap = (0, logic_1.isLeapYear)(year);
    res.json({ year, isLeap });
});
app.get('/secret-handshake/:decimalNumber', (req, res) => {
    try {
        const decimalNumber = parseInt(req.params.decimalNumber);
        const handshake = (0, logic_1.secretHandshake)(decimalNumber);
        res.json({ decimalNumber, handshake });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=app.js.map
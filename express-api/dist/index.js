"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.express)();
const port = 3000;
app.get("/", (req, res) => {
    res.status(201).json({
        ok: true,
        msg: " Nueva respuesta"
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

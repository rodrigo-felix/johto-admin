//Congig
require("dotenv").config();
require("./configs/db.config");

//pacotes
const express = require('express');
const cors = require('cors');

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log(`Server running on port:`, process.env.PORT);
})
//Config
require("dotenv").config();
require("./configs/db.config");

//packages
const express = require("express");
const cors = require("cors");

const app = express();

//import middlewares
const authMiddleware = require('./middlewares/auth.middlewares');

//Middlewares
app.use(express.json());
app.use(cors());

//import_routes
const authRoutes = require('./routes/auth.routes');
const classroomRoutes = require('.routes/classroom.routes');
const studentsRoutes = require('.routes/students.routes');


//public routes
app.use('/auth', authRoutes);

//middleware for auth
app.use(authMiddleware);

//private routes


app.listen(process.env.PORT, () => {
    console.log(`Server running on port:`, process.env.PORT);
})
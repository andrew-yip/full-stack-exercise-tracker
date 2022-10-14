const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // help us connect to mongodb database

require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const exercisesRouters = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouters);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
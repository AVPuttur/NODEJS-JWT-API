const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Import route
const authRoute = require('./routes/auth');

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
	console.log("Connected to DB....");
});

//Middleware
app.use(express.json());

//Route Middleware
app.use('/api/user', authRoute);

app.listen(5000, () => {
	console.log("Server running....");
});
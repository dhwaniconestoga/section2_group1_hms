const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const getAllPatients = require("./routes/api/getAllPatients");
const getPatientByID = require("./routes/api/getPatientByID");
const createPatient = require("./routes/api/createPatient");
const editPatientByID = require("./routes/api/editPatientByID");
const deletePatientByID = require("./routes/api/deletePatientByID");
const signUp = require("./routes/api/signUp");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGOCONNECTION, { useNewUrlParser: true });

app.listen(process.env.PORT, () => {
    console.log("App listening on port " + process.env.PORT);
})

// API that get all patients
app.get('/patients', getAllPatients);

//API that gets a patient by ID
app.get('/patients/:id', getPatientByID);

//API for adding a patient
app.post('/patients', createPatient);

//API for editting a details of the patient by ID 
app.put('/patients/:id', editPatientByID);

//API for deleting a  patient by ID
app.delete('/patients/:id', deletePatientByID);

app.post("/signup", async (req, res) => {
      const { username, email, password, role } = req.body;
});


app.get("/", (req, res) => {
    res.send("hello world");
});

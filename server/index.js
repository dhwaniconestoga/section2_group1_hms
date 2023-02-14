const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require("dotenv").config();

const getAllNurse = require("./routes/api/getAllNurse");
const getNurseByID = require("./routes/api/getNurseByID");
const createNurse = require("./routes/api/createNurse");
const editNurseByID = require("./routes/api/editNurseByID");
const deleteNurseByID = require("./routes/api/deleteNurseByID");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGOCONNECTION, { useNewUrlParser: true });

app.listen(process.env.PORT, () => {
    console.log("App listening on port " + process.env.PORT);
})

// API that get all nurses
app.get('/nurses', getAllNurse);

//API that gets a nurse by ID
app.get('/nurses/:id', getNurseByID);

//API for adding a nurse
app.post('/nurses', createNurse);

//API for editting a details of the nurse by ID 
app.put('/nurses/:id', editNurseByID);

//API for deleting a  nurse by ID
app.delete('/nurses/:id', deleteNurseByID);


app.get("/", (req, res) => {
    res.send("hello world");
});


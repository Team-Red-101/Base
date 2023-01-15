const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://4gent:marlon1209@appcluster.hyyhnjg.mongodb.net/?retryWrites=true&w=majority");

//require route
app.use("/prompts", require("./routes/promptRoutes"));

app.listen(3001, function() {
    console.log("express listening on port 3001");
})
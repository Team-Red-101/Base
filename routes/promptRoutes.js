const express = require('express');
const Prompt = require('../models/models');
const router = express.Router();
const Note = require("../models/models");

router.route('/prompts').get((req,res) => {
    Prompt.find().then(foundPrompt => res.json(foundPrompt))
})

module.exports = router;
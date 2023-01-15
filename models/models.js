const mongoose = require('mongoose');

const promptSchema = {
    prompt: String,
    question: String
}

const Prompt = mongoose.model("Promp", promptSchema);

module.exports = Prompt;
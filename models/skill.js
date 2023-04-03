const mongoose = require('mongoose');

const Schema = mongoose.Schema

const skillSchema = new Schema({
    title: String,
    yearsOfExp: Number,
    description: [String]
});

module.exports = mongoose.model('Skill', skillSchema)
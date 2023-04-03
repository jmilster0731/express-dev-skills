const Skill = require('../models/skill');
const { rawListeners } = require('../server');

module.exports = {
    index,
    new: newSkill,
    create,
    show
}

async function index(req, res) {
    const skills = await Skill.find({})
    res.render('skills/index', {skills})
}

async function show(req, res) {
    const skill = await Skill.findById(req.params.id);
    res.render('skills/show', {title: 'Skill detail', skill})
}

function newSkill(req, res) {
    res.render('skills/new');
};

async function create(req,res) {
    req.body.description.trim();
    if (req.body.description) req.body.description = req.body.description.split(/\s*,\s*/);
    try {
        await Skill.create(req.body);
        res.redirect('/skills')
    } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('/skills/new', { errorMsg: err.message });
    }
};
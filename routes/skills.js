var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index)

// new Skill (GET)
router.get('/new', skillsCtrl.new)

// create movie (post)
router.post('/', skillsCtrl.create)

//show specific skill
router.get('/:id', skillsCtrl.show)

module.exports = router;

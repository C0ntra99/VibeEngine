const express = require('express');
const router = express.Router();
const Teams = require('../models/Teams');
const Teams_helper = require('../helpers/Teams_helper');

var helper = new Teams_helper();

router.get('/', (req, res) => {
    helper.getTeam(req.query, (result) => {
        if(result){
            return res.json(result)
        }
    });
});

router.post('/', (req, res) => {
    helper.insertTeam(req, (results) => {
        if(results){
            return res.json(results)
        }
    })
});

module.exports = router;
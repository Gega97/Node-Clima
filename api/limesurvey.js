const express = require('express');
const router = express.Router();
const limeSurvey = require('node-limesurvey')({
    url:"https://gega12345.limequery.com/index.php/admin/remotecontrol",
    username:"Gega97",
    password:"Gega12345."
});

router.get("/", async(req, res) => {
    const lime = await limeSurvey.getSurveyList();
    res.json({
        lime
    });
});

module.exports = router;

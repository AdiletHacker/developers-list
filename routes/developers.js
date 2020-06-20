const express = require("express");
const router = express.Router();
const Developer = require("../models/developer");

router.get("/", async (req, res) => {
    const developers = await Developer.find();
    res.json(developers);
});

router.post("/", async (req, res) => {
    const devInfo = {
        income: req.body.income,
        position: req.body.position,
        positionType: req.body.positionType,
        location: req.body.location,
        skillsList: req.body.skillsList,
        experience: req.body.experience
    };
    const newDeveloper = await new Developer(devInfo);

    try {
        const savedDeveloper = await newDeveloper.save();
        res.json(savedDeveloper);
    } catch (err) {
        res.json({ message: err.message });
    }
});







module.exports = router;
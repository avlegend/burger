const express = require("express");
const router = express.Router();
const burger = require("../models/burger")


router.get("/", (req, res) => {
    burger.findAll(data => {

        res.render("burgers", {burgers: data})
    })
});

router.post("/api/burger", (req, res) => {
    burger.create(req.body, (data) => {
        res.json({
            message: "burger added",
            data: data
        })
    })
});

// Export routes for server.js to use.
module.exports = router;
const express = require("express");
const router = express.Router();
const Alien = require("../models/Alien");

router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (error) {
    res.send("Error is" + error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien);
  } catch (error) {
    res.send("Error is" + error);
  }
});

router.post("/", async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const aOne = await alien.save();
    res.json(aOne);
  } catch (err) {
    res.send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.sub);
    alien.sub = req.params.sub;
    const aOne = await alien.save();
    res.json(aOne);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const alien = await Alien.remove(req.params.sub);
    alien.sub = req.params.sub;
    const aOne = await alien.save();
    res.json(aOne);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

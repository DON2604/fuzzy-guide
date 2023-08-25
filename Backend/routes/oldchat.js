const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Chats = require("../models/Chats");
const { validationResult } = require("express-validator");

//ROUTE 1: Get all chats using GET: "/api/chats/fetchallchats". Login required
router.get("/fetchallchats", fetchuser, async (req, res) => {
  try {
    const chats = await Chats.find({ user: req.user.id });
    res.json(chats);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});


//ROUTE 2: Add a new chat using POST: "/api/chats/addchats". Login required
router.post(
  "/addchat",
  fetchuser,
  async (req, res) => {
    try {
        const { title } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const chat = new Chats({
            title, user: req.user.id
        })

        const savedChat = await chat.save()

        res.json(savedChat)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router
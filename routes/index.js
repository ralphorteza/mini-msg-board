var express = require('express');
var router = express.Router();

// Require controller modules.
const message_controller = require("../controllers/messageController");

//// MESSAGE ROUTES ////

// GET message homepage.
router.get("/", message_controller.message_list);

// GET request for creating a message. NOTE this must come before routes that display Messages (uses id).
router.get("/new-message", message_controller.message_create_get);

// POST request for creating message.
router.post("/new-message", message_controller.message_create_post);

module.exports = router;

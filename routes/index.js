var express = require('express');
var router = express.Router();

// Require controller modules.
const message_controller = require("../controllers/messageController");


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    date: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    date: new Date()
  }
];

// router.get('/', (req, res, next) => {
//   res.render('index',
//   {
//     title: 'Mini Messageboard',
//     messages: messages
//   });
// });

//// MESSAGE ROUTES ////

// GET message homepage.
router.get("/", message_controller.message_list);


// GET request for creating a message. NOTE this must come before routes that display Messages (uses id).
router.get("/message/new", message_controller.message_create_get);

// POST request for creating message.
router.get("/message/new", message_controller.message_create_post);


module.exports = router;

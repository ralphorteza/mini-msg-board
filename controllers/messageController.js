const { body, validationResult } = require("express-validator");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");

// Displays all of the messages.
exports.message_list = asyncHandler(async (req, res, next) => {
  const allMessages = await Message.find().sort({ date: 1}).exec();
  res.render(
    "message_list",
    {
      title: "mini-message board",
      messages: allMessages,
    }
  );
});

// Display Message create form on GET.
exports.message_create_get = asyncHandler(async (req, res, next) => {
  // res.send("NOT IMPLEMENTED: Message create GET");
  res.render("form", { title: "New Message"});
});

exports.message_create_post = [
  // Validate and sanitize fields.
  body("user")
    .trim()
    .isLength({ min: 1})
    .escape()
    .withMessage("Username must be specified.")
    .isAlphanumeric()
    .withMessage("First name has non-alphanumeric characters"),
  body("text", "Text must not be empty.")
    .trim()
    .isLength({ min: 1})
    .escape(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);
    const date = new Date();
    // Create Author object with escaped and trimmed data.
    const message = new Message({
      user: req.body.user,
      text: req.body.text,
      date: date,
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      res.render("form", {
        title: "New Message",
        message: message,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid; save message and redirect to homepage.
      await message.save();
      res.redirect('/');
    }
  }),
];


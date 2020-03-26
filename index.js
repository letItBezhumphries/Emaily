const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieSession = require("cookie-session");
const passport = require("passport");
//this or just require
// const passportConfig = require('./services/passport');
require("./models/User"); //needs to be before requiring and running passport.js
require("./services/passport");
const authRoutes = require("./routes/authRoutes");

mongoose.connect(process.env.MONGO_URI);

const app = express();

//middleware
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);

//end result is User model instance is added to the req.user
app.use(passport.initialize());
app.use(passport.session());

//then make sure to call authRoutes and pass in app
authRoutes(app);
//or could just require the authRoutes file and invoke it with app passed in
// require('./routes/authRoutes')(app);

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5006;

app.listen(PORT);

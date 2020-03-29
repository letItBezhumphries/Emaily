const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
//this or just require
// const passportConfig = require('./services/passport');
require("./models/User"); //needs to be before requiring and running passport.js
require("./services/passport");
// const authRoutes = require("./routes/authRoutes");

mongoose.connect(keys.mongoURI);

const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

//middleware
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//end result is User model instance is added to the req.user
app.use(passport.initialize());
app.use(passport.session());

//then make sure to call authRoutes and immediately invoke it with app passed in
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5006;

app.listen(PORT);

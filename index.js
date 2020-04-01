const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
//this or just require
// const passportConfig = require('./services/passport');
require("./models/User"); //needs to be before requiring and running passport.js
require("./models/Survey");
require("./services/passport");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

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
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //serve production assets
  app.use(express.static("client/build"));

  // if it doesn't recognize route serve up index.html
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5006;

app.listen(PORT);

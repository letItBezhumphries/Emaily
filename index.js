const express = require("express");
const passport = require("passport");
require("dotenv").config();

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL //route user sent to after they grant permissions
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("in index.js accessToken:", accessToken);
      console.log("in index.js accessToken:", refreshToken);
      console.log("in index.js accessToken:", profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5006;

app.listen(PORT);

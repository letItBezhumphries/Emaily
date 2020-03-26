const passport = require("passport");
require("dotenv").config();
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = mongoose.model("users");

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

      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //user exists already
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });

      const newUser = new User({ googleId: profile.id });
      newUser.save();
    }
  )
);

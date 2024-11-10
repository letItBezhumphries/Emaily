const passport = require("passport");
const keys = require("../config/keys");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = mongoose.model("users");

//grabs the user model instance that's passed in the callback
//which passport will then turn into a cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//takes the serialized user from the cookie and turns it back into a user model
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", //this will be endpoint user is sent to after they grant permission
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("in index.js accessToken:", accessToken);
      console.log("in index.js accessToken:", refreshToken);
      console.log("in index.js accessToken:", profile);

      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        //user exists already
        return done(null, existingUser);
      } else {
        const user = await new User({ googleId: profile.id })
          .save()
          .done(null, user);
      }
    }
  )
);




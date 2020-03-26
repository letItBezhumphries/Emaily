const passport = require("passport");
//way to get the app constant from index.js to be available in this file is use module.exports

//create arrow function and export it from this file
module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
};

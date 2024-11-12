const passport = require("passport");
//way to get the app constant from index.js to be available in this file is use module.exports

//create arrow function and export it from this file
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      keepSessionInfo: true
    }),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    //logout() is a function that is attached to the req object by passport that destroys the cookie
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    console.log('req.user:', req.user);
    res.send(req.user);
  });
};


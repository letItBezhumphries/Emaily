if (process.env.NODE_ENV === "production") {
  //we are in production - return the production keys
  module.exports = require("./prod");
} else {
  //we in development - return the dev keys
  module.exports = require("./dev");
}

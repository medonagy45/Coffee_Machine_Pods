var configuredApp = require("./app.config.js");

configuredApp.listen(3000, () =>
  console.log("Web App listening on port 3000! Serving Over HTTP")
);

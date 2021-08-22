const app = require("./app");
const config = require("./config/server");
const port = config.port;

app.listen(process.env.PORT || port, () =>
   console.log(`Running in ${port}`)
);
const app = require("./src/server");
require("dotenv").config();

const port = 4000 || process.env.PORT;

app.listen(port, console.log(`Te estoy escuchando por el puerto ${port}!`));
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("build"));
app.listen(PORT, () => console.log("Servidor front-end em execução!"));
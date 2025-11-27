const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Tu app premium está funcionando! 🚀");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Servidor activo en puerto " + port);
});

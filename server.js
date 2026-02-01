const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend VM" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});

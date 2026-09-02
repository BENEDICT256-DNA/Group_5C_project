require("dotenv").config();
const express = require("express");
const patchProduct = require("./routes/patch");
const errorHandler = require("./middleware/error_handler");
const inventory = require("./routes/data/inventory");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', patchProduct);

// Error handler must be last
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
const express = require("express");
const bodyParser = require("body-parser");
const invoiceRouter = require("./routes/invoiceRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/invoices", invoiceRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

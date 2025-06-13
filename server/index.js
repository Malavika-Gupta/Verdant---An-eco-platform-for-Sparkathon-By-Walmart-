/* external imports */
const mongoose = require("mongoose");
require("dotenv").config();

/* internal imports */
const app = require("./app");
const consoleMessage = require("./utils/console.util");
const port = process.env.PORT || 3000;

/* database connection */
mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => consoleMessage.successMessage("✅ Sparkathon connected to MongoDB."))
  .catch((error) => consoleMessage.errorMessage(`❌ MongoDB connection error: ${error.message}`));

/* establish server port */
app.listen(port, () => {
  consoleMessage.warningMessage(`⚡️ Sparkathon server is running on port ${port}.`);
});

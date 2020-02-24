const app = require("./src/app");
const { DB_URI } = require("./src/config");
const mongoose = require("mongoose");
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: });

app.listen(3000, () => {
  console.log("Videos service is running on port 3000");
});

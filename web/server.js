const app = require("./express/app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Web service is running on port ${port}`);
});

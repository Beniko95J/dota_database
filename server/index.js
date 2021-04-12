const express = require("express");

const app = express();

require('./routes/admin/index')(app)

app.listen(3000, () => {
  console.log('Hello, world!');
})

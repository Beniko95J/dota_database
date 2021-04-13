const express = require("express");

const app = express();

express.json();

require('./routes/admin/index')(app)

app.listen(3000, () => {
  console.log('Hello, world!');
})

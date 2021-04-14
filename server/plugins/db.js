module.exports = app => {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/my_database', {
    useUnifiedTopology: true ,
    useNewUrlParser: true,
    useFindAndModify: false
  });
}

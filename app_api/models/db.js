const mongoose = require('mongoose');
const dbURI = "mongodb+srv://georgefotabong52:w8T2sgA54CQYblHL@cluster0.00wzfxg.mongodb.net/MovieApp?retryWrites=true&w=majority";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./movies');

const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/node-api",
    { useNewUrlParser: true, useUnifiedTopology: true, },
    (err) => {
        (!err) ? console.log("Mongodb connected") : console.log("connection error" + err)
    }
)
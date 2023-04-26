const express = require('express');
const route = require('./route/route');

const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


app.use(cors())
app.use(express.json());



mongoose.connect("mongodb+srv://vaibhav_:DP5cPU2UQSOB14RT@cluster0.27uy03s.mongodb.net/Project4_usrlShortner?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);



app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});
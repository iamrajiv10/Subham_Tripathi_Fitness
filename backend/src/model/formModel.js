const mongoose =require('mongoose');

let formSchema = new mongoose.Schema({
    Name: {
        type:"string",
        require:true
    },
    Age: {
        type:"number",
        require:true
    },
    Gender: {
        type:"string",
        require:true
    },
    Height: {
        type:"number",
        require:true
    },
    Weight: {
        type: "number",
        require: true
    },
    Goal:{
        type:"string",
        require:true
    },
    Currentstats: {
        type:"string",
        require:true
    }
})

module.exports = mongoose.model("form",formSchema);
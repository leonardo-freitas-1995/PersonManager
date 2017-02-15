const mongoose = require('mongoose');

module.exports =  function(){

    var personSchema = mongoose.Schema({
        name: String,
        gender: String,
        age: Number,
        email: String,
        numbers: [{
            description: String,
            number: Number
        }]
    });

    return mongoose.model('Person', personSchema);
};

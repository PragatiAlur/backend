const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slot = new Schema({
    date : {
        type : String,
        required : true
    },
        time : {
            
        }
})
const rating = new Schema({
    patient_id : {
        type : String,
        required : true
    },
    star : {
        type : Number,
        required : true
    }
})

const address = new Schema({
    street : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    pincode : {
        type : Number,
        required : true
    }
})

const doctorSchema = new Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : true
    },
    phone_no : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    clinic_address : [
        address
    ],
    license_number : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    speciality : {
        type : String,
        required : true
    },
    age : {
        type : String,
        required : true
    },
    experience_in_years : {
        type : Number,
        required : true
    },
    qualifications : [{
        type : String,
        required : false
    }],
    slots : [slot],
    ratings : [{
        rating
    }]


})


module.exports = mongoose.model('doctor', doctorSchema);
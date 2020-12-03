const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
	patient_id : {
        type : String,
        required : true
    },
    doctor_id :{
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    slot_timing : {
        type : String,
        required : true
    },
    appointment_booking_date : {
        type : String,
        required : true
    },
    appointment_booking_time : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('appointment', appointmentSchema);
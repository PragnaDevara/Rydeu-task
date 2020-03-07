const db = require('mongoose');
const Vehicle_schema = new db.Schema({
 // field_name:Vehicle_Id
 vehicle_id: {
    type: Number,
    required: true,
    maxlength: 12,
},

// field_name:Vehicle_type
vehicle_type: {
    type: String,
    required:true,
    maxlength: 12,
},
// field_name:Vehicle_description
vehicle_descrp: {
    type: String,
    maxlength: 12,
}
});

const vehicle = db.model('vehicle', Vehicle_schema);

exports.vehicle = vehicle;
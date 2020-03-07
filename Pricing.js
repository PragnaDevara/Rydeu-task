const db = require('mongoose');
const Pricing_schema = new db.Schema({
 // field_name:Vehicle_Id
 /*id: {
    type: Number,
    required: true,
    maxlength: 12,
},*/

// field_name:organisation_id
organisation_id: {
    type: Number,
    required:true,
    maxlength: 12,
},
// field_name:Vehicle_id
vehicle_id: {
    type: Number,
    required:true,
    maxlength: 12,
},
// field_name:city
city:{
    type:String,
    required:true,
    maxlength:12,
},
// field_name:totaldistance
totaldistance:{
    type:Number,
    $gte:10,
    required:true,
    maxlength:12,
},
});

const pricing = db.model('pricing', Pricing_schema);

exports.pricing = pricing;                  
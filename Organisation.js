const db = require('mongoose');
const Organisation_schema = new db.Schema({
 // field_name:organisation_Id
 organisation_id: {
    type: Number,
    required: true,
    maxlength: 12,
},

// field_name:organisation_name
organisation_name: {
    type: String,
    maxlength: 6,
},
});

const organisation = db.model('organisation', Organisation_schema);

exports.organisation = organisation;
const {model, schema, Schema} = require('mongoose');

const studentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            street: String,
            number: Number,
            neiborhood: String
        },
        absences: {
            type: Number,
            required: false,
        },
        grades: {
            type: String,
        },
    },
    {
        timestamps: true,
    });

module.exports = model('Students', studentSchema);
const {model, schema, Schema} = require('mongoose');

const userSchema = new Schema(
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
            type: [Grades],
        },
    },
    {
        timestamps: true,
    });

module.exports = model('Students', studentSchema);
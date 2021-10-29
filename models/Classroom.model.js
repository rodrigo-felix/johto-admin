const {model, schema, Schema} = require('mongoose');

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        startdate: {
            type: Date,
            required: true,
        },
        teacher: {
            type: String,
            required: true,
        },
        students: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    });

module.exports = model('Classroom', classroomSchema);
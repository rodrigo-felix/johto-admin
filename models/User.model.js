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
            unique: true,
        },
        passwordHash: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    });

module.exports = model('User', userSchema);
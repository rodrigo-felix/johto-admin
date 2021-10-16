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
        role: {
            type: String,
            required: true,
            enum: ["Professor", "Professor Eventual", "Diretor", "Coordenador", "Assistente"],
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
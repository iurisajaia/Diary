const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema
const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'http://subhagamirealestate.com/wp-content/u1.png'
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    questions: {
        type: Array
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("users", UserSchema);
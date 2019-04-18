const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema
const DiarySchema = new Schema({
    question: {
        type: Array,
        required: true
    },
    answer: {
        type: Array,
        required: true
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },

    to: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    sticker: {
        type: String,
        default: false
    },


    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Diary = mongoose.model("diary", DiarySchema);
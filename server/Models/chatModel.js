const mongoose = require("mongoose");

const memberInfo = new mongoose.Schema(
    {
        firstId: String
    },
    {
        secondId: String
    }
);

const chatSchema = new mongoose.Schema(
    {
        members: Array,
    },
    {
        timestamps: true
    }
);

const chatModel = mongoose.model('Chat', chatSchema);
module.exports = chatModel;
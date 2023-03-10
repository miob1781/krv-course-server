const {model, Schema } = require("mongoose")

const noteModel = new Schema({
    text: {
        type: String,
        required: true
    },
    paragraphId: {
        type: String,
        required: true
    }
})

const lessonNotesModel = new Schema({
    notes: [noteModel],
    lessonId: {
        type: String,
        required: true
    }
})

const userModel = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    lessonIds: [{
        type: String
    }],
    notes: [lessonNotesModel]
})

const User = model("User", userModel)

module.exports = User
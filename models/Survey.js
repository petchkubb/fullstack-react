const mongoose = require('mongoose')
const { Schema, model } = mongoose
const recipientSchema = require('./Recipients')

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [recipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
})

model('surveys', surveySchema)
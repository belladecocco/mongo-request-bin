const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

const schema = new Schema({
    receivedDateTime: {
        type: Date,
        default: Date.now
    },
    body: Mixed,
    headers: Mixed
});


module.exports = mongoose.model('Webhook', schema);
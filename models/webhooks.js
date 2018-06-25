const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

const schema = new Schema({
    body: Mixed
});


module.exports = mongoose.model('Webhook', schema);
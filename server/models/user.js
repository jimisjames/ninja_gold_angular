
const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    user_name: { type: String, required: true, minlength: 1 },
    gold: { type: Number, default: 0 },
    log: []
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} })

mongoose.model('User', UserSchema);
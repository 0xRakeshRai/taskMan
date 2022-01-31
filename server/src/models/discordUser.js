const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    discordId: { type: String, required: true },
    userName: { type: String, required: true },
    guilds: { type: Array, required: true }
});

const DiscordUser = module.exports = mongoose.model('DiscordUser', UserSchema)
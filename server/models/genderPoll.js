var mongoose = require("mongoose");

var GenderPollSchema = new mongoose.Schema({
	male: {type: Number, default: 0},
	female: {type: Number, default: 0},
	created_at: {type: Date, default: Date.now}
});
mongoose.model("GenderPoll", GenderPollSchema)
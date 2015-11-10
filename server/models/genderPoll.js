var mongoose = require("mongoose");
var findOrCreate = require('mongoose-findorcreate')

var GenderPollSchema = new mongoose.Schema({
	male: {type: Number, default: 0},
	female: {type: Number, default: 0},
	created_at: {type: Date, default: Date.now}
});
GenderPollSchema.plugin(findOrCreate);
mongoose.model("GenderPoll", GenderPollSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Team_schema = new Schema(
    {
        team_name: String,
        team_number: String,
        uid: String,
        instances: [{type: mongoose.Schema.Types.ObjectId, ref:'Instances'}], 
        rounds: Array
    },
    {timestamps: true}
)

module.exports = mongoose.model("Teams", Team_schema)
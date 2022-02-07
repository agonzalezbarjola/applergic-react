const mongoose= require('mongoose');

const Schema = monotype.Schema;

const ratingsSchema = new Schema (
    {
        rating: {type: number},
        user: {type: mongoose.Types.ObjectId, ref: 'User'},
    },
    {
        timestamp: true,
    }
)

const Rating = mongoose.model ('rating',ratingsSchema);
module.exports= Rating
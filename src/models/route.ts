import mongoose from 'mongoose';
const { Schema } = mongoose;

const RouteSchema = new Schema({
    name: String,
    mountain: {
      type: Schema.Types.ObjectId,
      ref: 'mountain',
      required: true
    },
    class: Number,
    trailhead: String,
    start_elevation: Number,
    summit_elevation: Number,
    total_gain: Number,
    total_distance: Number,
    imgs: [{
      type: String
    }]
});

const Route = mongoose.model('route', RouteSchema);

export default Route;


import mongoose from 'mongoose';
const { Schema } = mongoose;

const MountainSchema = new Schema({
    name: String,
    elevation: Number,
    range: String,
    routes: [{
        type: Schema.Types.ObjectId,
        ref: 'route'
    }],
    latitude: Number,
    longitude: Number,
    imgs: [{
        type: String
    }]
    // Weather
});

const Mountain = mongoose.model('mountain', MountainSchema);

export default Mountain;



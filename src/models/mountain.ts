import mongoose from 'mongoose';
const { Schema } = mongoose;

const MountainSchema = new Schema({
    name: String
});

const Mountain = mongoose.model('mountain', MountainSchema);

export default Mountain;



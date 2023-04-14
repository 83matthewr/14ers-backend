import mongoose from 'mongoose';
const { Schema } = mongoose;

const MountainSchema = new Schema({
    name: String
});

const Mountain = mongoose.model('Mountains', MountainSchema);

export default Mountain;


import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const mongoURL = process.env.MONGO_URL;

const connectionFactory = () => {
    if (mongoURL) {
        return mongoose.connect(mongoURL);
    } else {
        console.log(mongoURL);
        throw new Error('No MongoDB Url provided');
    }
};

export default connectionFactory;
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const user = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;
export const connection = async() => {
    const url = `mongodb://${user}:${pass}@ac-fxpbmtz-shard-00-00.lbckr5o.mongodb.net:27017,ac-fxpbmtz-shard-00-01.lbckr5o.mongodb.net:27017,ac-fxpbmtz-shard-00-02.lbckr5o.mongodb.net:27017/?ssl=true&replicaSet=atlas-dah6f8-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(url, { useUnifiedTopology: true })
        console.log(`
        db connected `);
    } catch (error) {
        console.log(`
        error `, error.message);
    }
}
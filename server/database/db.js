
import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-qhso5wm-shard-00-00.iynywrr.mongodb.net:27017,ac-qhso5wm-shard-00-01.iynywrr.mongodb.net:27017,ac-qhso5wm-shard-00-02.iynywrr.mongodb.net:27017/E-COM-WEB?ssl=true&replicaSet=atlas-mt0h65-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}



export default Connection;
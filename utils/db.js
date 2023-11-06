import mongoose from "mongoose";

const connection = {};

export async function connectDb(){
    if(connection.isConnected){
        console.log("Already Connected To Database");
        return;
    }
    if(mongoose.connections.length > 0){
        connection.isConnected = mongoose.connections[0].readyState;
        if(connection.isConnected === 1){
            console.log('Use previous Connection To Database');
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log('New Connection To Database');
    connection.isConnected = db.connections[0].readyState;
}

export async function disconnectdb(){
    if(connection.isConnected){
        if(process.env.NODE_END === 'production'){
            await mongoose.disconnect();
            connection.isConnected = false;
        }
        else{
            console.log('Not disconneting from database');
        }
    }
}

const db = { connectDb,disconnectdb};

export default db;
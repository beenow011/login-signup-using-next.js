import mongoose, { Connection } from "mongoose";

export async function connect() {
    try{
            mongoose.connect(process.env.MONGO_URL!);
            const connection = mongoose.connection;

            connection.on('connected',()=>{
                console.log('mongo db connected successfully')
            })
            connection.on('error',(err)=>{
                console.log('Mongo Db connection error! ', err)
            })
    }catch(error){
        console.log('something goes wrong!')
        console.log(error)
    }
}
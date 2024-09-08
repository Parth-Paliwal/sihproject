import mongoose  from "mongoose";
mongoose.set('strictQuery', true)

const connectToMongo= async()=>{
    await mongoose.connect(process.env.mongooseURL);
    console.log("connected to mongoose");
}
export default connectToMongo;
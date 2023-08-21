import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const Connection=async(username, password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.ftqt7pt.mongodb.net/gofood?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser:true});
        console.log("connected successfully")
    } catch (error) {
        console.log(error);
    }
}
export default Connection;
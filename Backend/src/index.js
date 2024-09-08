import path from "path";
import dotenv from "dotenv";
import {app} from "./app.js";
import connectToMongo from "./db/db.js";

connectToMongo();

dotenv.config({ path: path.resolve("./src", './.env') });



app.listen(process.env.PORT , ()=>{
    console.log(`this port is listning on port : ${process.env.PORT}`)
})

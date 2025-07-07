import mongoose from "mongoose";

export const dbconnection = () => {

mongoose
.connect(process.env.MONGO_URI,{ dbName: "RESTAURANT",

})
.then(() => {
    console.log("connected to database");
})
.catch(() => {console.log ("some error");

})

};
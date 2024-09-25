import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

dotenv.config({path: "./env"});
connectDB()
.then(() => {
    app.on("error", (error) => {
            console.log("Error before listening: ", error);
            throw error
        })
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
    })
})
.catch((err) => {
    console.log("Mongodb connection failed!!", err);
})

// import express from "express";
// const app = express();
// const PORT = process.env.PORT;

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("ERRR: ", error);
//             throw error
//         })

//         app.listen(PORT, () => {
//             console.log(`App is listening on PORT: ${PORT}`);
//         })
//     } catch (error) {
//         console.error("Error", error);
//         throw error
//     }
// })()
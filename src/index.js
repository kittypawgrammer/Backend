import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
});

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    }
})
.cathch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
});
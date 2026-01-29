import dotenv from "dotenv";
import connectDb from "./config/database.js";
import app from "./config/app.js";

dotenv.config({ path: "./.env" });

const startServer = async () => {
  try {
    console.log("Database URI:", process.env.MONGODB_URI);

    await connectDb();

    app.on("error", (error) => {
      console.error("Server error:", error);
      throw error;
    });

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port: ${PORT}`);
    });

  } catch (error) {
    console.error("MongoDB connection failed ❌", error);
  }
};

startServer();
